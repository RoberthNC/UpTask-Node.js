const express = require("express");
const router = express.Router();

const proyectoControllers = require("../controllers/proyectoControllers");

module.exports = function(){

    router.get("/",proyectoControllers.indexController);
    router.get("/nuevo-proyecto",proyectoControllers.formularoProyecto);
    router.post("/nuevo-proyecto",proyectoControllers.nuevoProyecto);
    
    return router;
}