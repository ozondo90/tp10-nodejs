var { MongoClient } = require("mongodb");
var url = "mongodb://localhost:27017";

var client;

async function initMongoClientConnexion(){
  if(client) return client;

  try{
    client = new MongoClient(url);
    await client.connect();
    console.log("MOngo client connected successfully");
    return client
  }catch(err){
    console.log(err)
  }
}

function getMongoClient(){
  if(client) return client; 
}

module.exports = { initMongoClientConnexion, getMongoClient , client}