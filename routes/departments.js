var  Router  = require("express").Router();
var { index, show, create, store, edit, update, destoy } = require("../controllers/departments")

Router.get("/" , index);
Router.get("/:id" , show);
Router.post("/" , store);

module.exports = Router;