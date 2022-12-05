const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");

//Crear una aplicacion de express
const app = express();

//Habilitar pug
app.set("view engine","pug");

//Cargando los archivos estáticos
app.use(express.static('public'));

//Añadimos la carpeta a las vistas
app.set("views",path.join(__dirname,"./views"));

//Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",routes());

app.listen(8000);