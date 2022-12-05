exports.indexController = (req,res)=>{
    res.render("index",{
        nombrePagina:"Proyectos"
    });
}

exports.formularoProyecto = (req,res) => {
    res.render("nuevo-proyecto",{
        nombrePagina:"Nuevo Proyecto"
    });
}

exports.nuevoProyecto = (req,res) => {
    const { nombre } = req.body;
    let errores = [];
    if(!nombre){
        errores.push({"texto":"Agregar un nombre al proyecto"});
    }

    if(errores.length>0){
        res.render("nuevo-proyecto",{
            nombrePagina:"Nuevo proyecto",
            errores
        })
    }
    else{
        
    }
}