const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();
var list = [];
async function getList() {
  const containerName = "1eea3";
  console.log("get list calleds");
  try {
    const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
    if (!accountName) throw Error("Azure Storage accountName not found");

    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      new DefaultAzureCredential()
    );

    const containerClient = blobServiceClient.getContainerClient(containerName);
    for await (const blob of containerClient.listBlobsFlat()) {
      // blob
      //console.log("\t", blob.name);

      // Get Blob Client from name, to get the URL
      const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);

      // Display blob name and URL
      //console.log(`\t${blob.name}:\n\t\t${tempBlockBlobClient.url}`);
      list.push(tempBlockBlobClient.url);
    }
    list = [...new Set(list)];
    // return list;
    //console.log(list);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getList, list };
