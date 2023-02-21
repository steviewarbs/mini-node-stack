const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");
const platforms = require('./routes/platforms');
const persons = require('./routes/persons');
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mini_node_stack", {
  useNewUrlParser: true,
});

app.use(express.json());
app.use('/api/platforms', platforms);
app.use('/api/persons', persons);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 