const express = require("express");
const router = express.Router();

const estudiantes = require("./estudiantes");

router.get("/", (req, res) => {
  res.status(200).render("index", { title: "Estudiantes" });
});

//router.use("/estudiantes", estudiantes);

module.exports = router;
