const { Router } = require('express');
const { Proyects} = require("../db")


const routerProyects = Router();

routerProyects.post("/",async (req, res) => {
    const {imagenes, titulo, informacion, github, web, frontend, backend, db} = req.body;
    try {
        const newProyect = {
            titulo: titulo,
            informacion: informacion,
            frontend: frontend,
            backend: backend,
            db: db,
            github: github,
            web:web,
            imagenes: imagenes
        }
       const createProyect = await Proyects.create(newProyect);
        res.status(200).json(newProyect)
    } catch (error) {
        
    }

})

routerProyects.get("/", async (req, res) => {

    const allProyects = await Proyects.findAll();
    res.status(200).json(allProyects)
})

routerProyects.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const proyectDel = await Proyects.findOne({where:{id: id}});
        if (proyectDel) {
            proyectDel.destroy();
            res.status(200).json("El proyecto fue eliminado")
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = routerProyects;