const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const errorHandler = require("./controllers/errorHandlers");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;
//test
//middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//logs
app.use(morgan("dev"));

//rutas
app.use(routes);
//manejo de errores de ruta
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`proyecto corriendo en http://localhost:${PORT}`);
});
