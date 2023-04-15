const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();
const ssm = require("aws-cdk-lib/aws-ssm");
var list = [];
async function getList() {
  var new_list = [];
  const containerName = "1eea3";
  console.log("get list calleds");
  try {
    const accountName = ssm.StringParameter.valueForStringParameter(
      this,
      "AZURE_STORAGE_ACCOUNT_NAME"
    ); //process.env.AZURE_STORAGE_ACCOUNT_NAME;
    if (!accountName) throw Error("Azure Storage accountName not found");

    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      new DefaultAzureCredential()
    );

    const containerClient = blobServiceClient.getContainerClient(containerName);
    for await (const blob of containerClient.listBlobsFlat()) {
      // blob
      //console.log("\t", blob.name);
      console.log("fetching");
      // Get Blob Client from name, to get the URL
      var tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);

      // Display blob name and URL
      //console.log(`\t${blob.name}:\n\t\t${tempBlockBlobClient.url}`);
      new_list.push(tempBlockBlobClient.url);
    }
    new_list = [...new Set(new_list)];
    for (var i in new_list) {
      list.push(new_list[i]);
    }
    console.log(list);
    return list;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getList, list };
