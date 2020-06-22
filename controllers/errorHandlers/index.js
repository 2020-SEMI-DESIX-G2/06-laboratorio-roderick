const express = require("express");

const router = express.Router();

router.use((req, res) => {
  res.status(404).json({
    title: "Pagina 404",
    message: `Pagina no encontrada ${req.protocol}://${req.hostname}${req.url}`,
  });
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    title: err.message,
    message: err.message,
  });
});

module.exports = router;
