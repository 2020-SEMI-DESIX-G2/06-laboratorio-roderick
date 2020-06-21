const express = require("express");

const router = express.Router();

router.use((req, res) => {
  res.status(404).render("error404", {
    title: "Pagina 404",
    message: `Pagina no encontrada ${req.protocol}://${req.hostname}${req.url}`,
  });
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.render("error404", {
    title: err.message,
    message: err.message,
  });
});

module.exports = router;
