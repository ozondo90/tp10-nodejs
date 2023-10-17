var DB = require("../facades/db");

async function index(req, res) {
  try {
    const deps = await DB.collection("departments").find({}).toArray();
    res.status(200).send(deps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Une errer s'est produite lors de la recuperation des departements" });
  }
}

 
async function show(req , res){
  try {
    const id = Number(req.params.id);
    const dep = await DB.collection("departments").findOne({"depId" : id});
    res.status(200).json(dep);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Une errer s'est produite lors de la recuperation des departements" });
  }
} 

function create(req, res){
  
};

async function store(req, res){
  try {
    const data = req.body;
    const dep = await DB.collection("departments").insertOne(data);
    res.status(200).json(dep);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Une errer s'est produite lors de la recuperation des departements" });
  }
};

function edit(req, res){
  
};

function update(req, res){
  
};

function destoy(req, res){
  
}

module.exports = { index, show, create, store, edit, update, destoy };