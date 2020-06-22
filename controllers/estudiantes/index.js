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
        success: false,
        message: "campos nombre, apellido, email son requerido",
        error: "Datos vacíos",
      });
    }
  },
  borrarEstudiante: function (req, res) {
    const { id } = req.params;

    if (id) {
      const data = model.deleteById(id);
      if (data) {
        res.json({
          success: true,
          message: "Estudiante Eliminado con éxito",
        });
      } else {
        res.json({
          success: false,
          message: "Id de estudiante no existe",
          error: "no existe",
        });
      }
    } else {
      res.json({
        success: false,
        message: "id de estudiante requerido",
        error: "id requerido",
      });
    }
  },
  actualizarEstudiante: function (req, res) {
    const { nombre, apellido, email } = req.body;
    const id = req.body.id || req.params.id;

    if (id && email && nombre && apellido) {
      const data = model.updateItem({ id, nombre, apellido, email });
      if (data) {
        res.json({
          success: true,
          message: "se actualizo con éxito",
          data,
        });
      } else {
        res.json({
          success: true,
          message: "No se encontró estudiante con este ID",
          data,
        });
      }
    } else {
      res.json({
        success: false,
        message: "id, nombre, apellido, email de estudiante son requeridos ",
        error: "id requerido",
      });
    }
  },
  buscarEstudiante: function (req, res) {
    const { id } = req.params;

    if (id) {
      const data = model.findById(id);
      if (data) {
        res.json({
          success: true,
          message: " éxito",
          data,
        });
      } else {
        res.json({
          success: true,
          message: "No se encontraron estudiantes con este ID",
          data,
        });
      }
    } else {
      res.json({
        success: false,
        message: "id de estudiante requerido",
        error: "id requerido",
      });
    }
  },
  buscarTodos: function (req, res) {
    const data = model.getData();
    res.status(200).json({
      success: true,
      message: "Estudiantes cargados con éxito",
      data,
    });
  },
};
