require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const { CONNECTION_STRING, PORT } = process.env;

const ctrl = require("./controller/ctrl");

const app = express();

massive(CONNECTION_STRING)
  .then(db => {
    console.log(db);
    app.set("db", db);
  })
  .catch(err => console.log("db connection failure"));

app.use(json());
app.use(cors());

app.get("/api/pokemon/:id", ctrl.getPokemon);

const port = PORT || 3001;
app.listen(port, () => {
  console.log("Running on: " + port);
});
