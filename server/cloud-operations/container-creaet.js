const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();
//const ssm = require("aws-cdk-lib/aws-ssm");
const AWS = require("aws-sdk");
var accountName = "";
(async () => {
  const accname = await ssm
    .getParameter({
      Name: "AZURE_STORAGE_ACCOUNT_NAME",
      WithDecryption: true,
    })
    .promise();
  accountName = accname;
})();
async function createContainer(containerName) {
  try {
    // const accountName = ssm.StringParameter.valueForStringParameter(
    //   this,
    //   "AZURE_STORAGE_ACCOUNT_NAME"
    // ); //process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const ssm = new AWS.SSM();
    const accountName = await ssm.getParameter({
      Name: "AZURE_STORAGE_ACCOUNT_NAME",
      WithDecryption: true,
    });
    if (!accountName) throw Error("Azure Storage accountName not found");

    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      new DefaultAzureCredential()
    );
    console.log(`Container created with container id ${containerName}`);
    // const containerClient = blobServiceClient.getContainerClient(containerName);
    // const createContainerResponse = await containerClient.create();
    // console.log(
    //   `Container was created successfully.\n\trequestId:${createContainerResponse.requestId}\n\tURL: ${containerClient.url}`
    // );
  } catch (e) {
    console.log(e);
  }

  // // List the blob(s) in the container.
  // for await (const blob of containerClient.listBlobsFlat()) {
  //   // Get Blob Client from name, to get the URL
  //   const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);

  //   // Display blob name and URL
  //   console.log(`\n\tname: ${blob.name}\n\tURL: ${tempBlockBlobClient.url}\n`);
  // }
}

// module.exports = function () {
//   this.createContainer = function (containerName) {
//     console.log("createContainer called");
//   };
// };

module.exports = { createContainer };
