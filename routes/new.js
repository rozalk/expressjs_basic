const { route } = require("./route.books");

const router = require("express").Router();

// router.get("/:name", (req, res, next) => {
//   try {
//     const { name } = req.params;
//     res.json({ msg: `Hello ${name}...` });
//   } catch (e) {
//     next(e);
//   }
// });

router.get("/", (req, res) => {
  res.json({ msg: "Hello from new r " });
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!id || !name) throw new Error("Id or name is missing");
    res.json({ msg: `Hello ${name} your id is ${id}` });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
