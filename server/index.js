// SETUP DOTENV
// Create .env on root
// .gitignore .env
// Place sensitive info in .env
// npm i dotenv
// require and config()
require("dotenv").config();

// SETUP SERVER
const express = require("express"); // for server
const { json } = require("body-parser"); // middleware
const cors = require("cors"); // middleware
const massive = require("massive"); // for db

// Destructure variables off of .env
const { CONNECTION_STRING, PORT } = process.env;

// Require controller
const ctrl = require("./controller/ctrl");

// Initialize app
const app = express();

// Connect to db with connection string
massive(CONNECTION_STRING)
  .then(db => {
    // console.log(db); // see if db is connected
    app.set("db", db); // store db on app with key "db"
  })
  .catch(err => console.log("db connection failure")); // catch for connectino failure

// Use middlewares
app.use(json());
app.use(cors());

// API
app.get("/api/pokemon/:id", ctrl.getPokemon);

// Listen
const port = PORT || 3001;
app.listen(port, () => {
  console.log("Running on: " + port);
});
