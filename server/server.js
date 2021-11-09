const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");
// const personSchema = require("./schemas/personSchema");
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


// app
//   .route("/rest/v1/createPerson")

//   .get(function (req, res) {
//     personSchema.find((err, foundArticles)=> {
//       if (!err) {
//         res.send(foundArticles);
//       } else {
//         res.send(err);
//       }
//     });
//   })

//   .post(function (req, res) {
//     console.log(req.body);
//     const newPerson = new personSchema({
//       name: req.body.name,
//       age: req.body.age,
//       address: req.body.address,
//     });

//     newPerson.save(function (err) {
//       if (!err) {
//         res.send("Successfully added a new person.");
//         console.log(res, req);
//       } else {
//         res.send(err);
//       }
//     });
//   });

// app
//   .route("/rest/v1/deletPerson")

//   .delete(function (req, res) {
//     personSchema.deleteMany(function (err) {
//       if (!err) {
//         res.send("Successfully deleted all people!.");
//       } else {
//         res.send(err);
//       }
//     });
//   });

// app
//   .route("/rest/v1/deleteGame")

//   .delete(function (req, res) {
//     console.log(req);
//     personSchema.deleteOne({ _id: req.body._id }, (err, results) => {
//       if (!err) {
//         res.send("Successfully deleted person!.");
//       } else {
//         res.send(err);
//       }
//     });
//   });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 