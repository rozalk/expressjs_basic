const express = require("express");

const app = express(); //calling or initializing function... app ma express ko file gayer basexa
const indexRoutes = require("./routes");
const newRoutes = require("./routes/new");

app.use(express.json());
app.use("/", indexRoutes);
app.use("/new", newRoutes);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).json({ msg: err });
});

app.listen(8000, () => {
  console.log("Application is running");
});

//get => server to fe
//post => fe to server
//delete => fe to server delete my single data;
//put => fe to server;
//patch => fe to server fix 1 single property of data

// const arrA = ["pasta", "pizza", "ice-cream"];
// const arrB = ["pasta", "cake", "ice-cream"];

// //output => ['pasta','ice-cream']
// //write a js function to compare and find the common items in 2 array using cb functions..

// const call = (solution) => {
//   return solution;
// };

// const callBack = (arrA, arrB, call) => {
//   const answer = arrA.filter((food) => arrB.includes(food));
//   return call(answer);
// };
// const result = callBack(arrA, arrB, call);
// console.log({ result });
