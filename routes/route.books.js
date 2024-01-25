const router = require("express").Router();
// const { properFormat } = require("../utils/properFormat");
router.get("/", (req, res) => {
  res.json({ msg: "Hello from books" });
});
router.post("/", (req, res) => {
  console.log(req.body);
});

// router.get("/:id", (req, res, next) => {
//   try {
//     const { id } = req.params;
//     s;
//     res.json({ msg: `Hello from books id ${id}` });
//   } catch (e) {
//     next(e);
//   }
// });

router.get("/:name", (req, res, next) => {
  try {
    const { name } = req.params;
    suiiiiii;
    res.json({ msg: `My name is ${name}` });
  } catch (e) {
    next(e);
  }
});

// router.post("/:id", (req, res) => {
//   const { id } = req.params;
//   res.json({ msg: "hello from rojal" });
// });
// router.get("/:name/:nickname", (req, res) => {
//   const { name, nickname } = req.params;
//   res.json({ msg: `Hello I am ${name} and my nickname is ${nickname}` });
// });

router.post("/:number", (req, res) => {
  //req.params => /:id => req.params.id //detail page
  //req.query => ?key=value //pagination
  //req.body => raw json({"key":"value"})//form
  //console.log(req.body);
  const result = properFormat(
    req.query.number || req.body.number || req.params.number
  );
  res.json({ msg: result });
});

module.exports = router;
