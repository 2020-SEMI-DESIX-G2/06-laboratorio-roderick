const model = require("../../model");

module.exports = {
  crearEstudiante: function (req, res) {
    const { nombre, apellido, email } = req.body;

    if (nombre && apellido && email) {
      model.createItem({ nombre, apellido, email });
      res.json({
        success: true,
        message: "Nuevo Estudiante Agregado",
      });
    } else {
      res.json({
        success: true,
        message: "campos nombre, apellido, email son requerido",
        error: "Datos vacíos",
      });
    }
  },
  borrarEstudiante: function (req, res) {},
  actualizarEstudiante: function (req, res) {},
  buscarEstudiante: function (req, res) {},
  buscarTodos: function (req, res) {
    const data = model.getData();
    res.status(200).json({
      success: true,
      message: "Estudiantes cargados con éxito",
      data,
    });
  },
};
