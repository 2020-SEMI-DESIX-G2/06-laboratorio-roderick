const express = require("express");
const router = express.Router();

const estudiantes = require("./estudiantes");

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Bienvenido a Estudiantes",
  });
});

router.use("/estudiantes", estudiantes);

module.exports = router;
