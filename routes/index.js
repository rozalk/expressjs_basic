// const express = require("express");

// const routes = express.Router();

const routes = require("express").Router(); //direct connecting express and router to routes variable...

const booksRoutes = require("./route.books");

const userRoutes = require("./route.user");

//print hello world in express...
routes.get("/", (req, res) => {
  //route 1
  res.json({ msg: "Hello world" });
});

// routes.get("/rojal", (req, res) => {
//   //route 2
//   res.json({ msg: "Hello rojal" });
// });

// routes.get("/:name/:location", (req, res) => {
//   const data = req.params.name;
//   const location = req.params.location;
//   res.json({ msg: `Hello I am ${data} from ${location} ` });
// });
// routes.get("/:random", (req, res) => {
//   //make a random number console using callback function in express js
//   const ran = Math.floor(Math.random() * 17);
//   res.json({ msg: `${ran}` });
// });

// routes.get("/:fName/:lName/:age", (req, res) => {
//   const { fName, lName, age } = req.params;
//   res.json({ msg: `Hello i am ${fName} ${lName} of age ${age}` });
// });
// routes.get("/:a/:b", (req, res) => {
//   const { a, b } = Number(req.params);
//   const num1 = Number(a);
//   const num2 = Number(b);
//   res.json({ msg: `The sum is ${num1 + num2}` });
// });
// routes.get("/:name/:nickname", (req, res) => {
//   const { name, nickname } = req.params;
//   res.json({ msg: `Hello I am ${name} and my nickname is ${nickname}` });
// });

routes.use("/books", booksRoutes); //FUNCTION CALL TO booksRoutes...
routes.use("/user", userRoutes); //function call to userRoutes...

module.exports = routes;
