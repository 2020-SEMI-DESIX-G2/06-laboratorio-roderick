const router = require("express").Router();

const controller = require("../controllers/estudiantes");

router.get("/", controller.buscarTodos);
router.post("/", controller.crearEstudiante);
router.get("/:id", controller.buscarEstudiante);
router.put("/:id", controller.actualizarEstudiante);
router.delete("/:id", controller.borrarEstudiante);

module.exports = router;
