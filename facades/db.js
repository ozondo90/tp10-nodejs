var { getMongoClient } = require("../database");

var DB = {
  collection : (collectionName)=>{
    const db = getMongoClient().db("countrycartdb");
    const col = db.collection(collectionName);
    return col
  }
}

module.exports = DB;