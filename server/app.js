const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { v1: uuidv1 } = require("uuid");
app.use(cors());
app.use(express.json());
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jnkjaiclji0430-iacwuherkppakoicniofK";
//const ssm = require("aws-cdk-lib/aws-ssm");
const container = require("./cloud-operations/container-creaet");
const { getList, list } = require("./cloud-operations/container-get");
//const getlist = require("./cloud-operations/container-get");
app.listen(8000, () => console.log("Server is Running"));
// const AWS = require("aws-sdk");

// var newuri = "";
// (async () => {
//   const ssm = new AWS.SSM();
//   const mongouri = await ssm
//     .getParameter({
//       Name: "MONGODB_URI",
//       WithDecryption: true,
//     })
//     .promise();
//   newuri = mongouri;
// })();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

require("./userDetails");
const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User Already Exists" });
    }

    const userid = uuidv1();
    const containerName = userid.substring(0, 5);
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userid,
    });
    res.send({ status: "ok", userId: containerName });

    try {
      console.log(containerName);
      await container.createContainer(containerName);
    } catch (error) {
      console.log("Error calling container-create");
    }
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const userid = user.userid;
      const containerName = userid.substring(0, 5);
      if (res.status(201)) {
        return res.json({ status: "ok", userid: containerName });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "Invalid Password" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.get("/user", async (req, res) => {
  let uid = req.query.id;
  console.log(uid);
  console.log("get request");
  await new Promise((resolve) => setTimeout(() => resolve(getList(uid)), 5000));
  console.log(list);
  res.send(list);
});
