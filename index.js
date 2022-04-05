const express = require("express");
const morgan = require("morgan");
const path = require("path")
require("dotenv").config();
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use('/api/', require('./routes/contacts'))

app.set("port", process.env.port);
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
