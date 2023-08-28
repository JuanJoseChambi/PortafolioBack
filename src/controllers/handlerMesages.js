const { Router } = require('express');
const { Mensajes} = require("../db")

const routerMessages = Router();

routerMessages.post("/",async (req, res) => {
    const {nombre, asunto, detalles} = req.body;
    try {
        if (nombre && asunto && detalles) {
            const newMessage = {
                nombre: nombre,
                asunto: asunto,
                detalles: detalles
            }
        await Mensajes.create(newMessage)
        res.status(200).json("Mensaje Creado")
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }

})

routerMessages.get("/", async (req, res) => {
   try {
    const allMessages = await Mensajes.findAll()
    res.status(200).json(allMessages)
   } catch (error) {
    res.status(400).json({error: error.message})
   }
})
routerMessages.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const wantedMessage = await Mensajes.findOne({where:{id:id}});
        if (wantedMessage) {
            wantedMessage.destroy();
            res.status(200).json({message:"El Mensaje fue Eliminado"})
        }
    } catch (error) {
        res.status(404).json({error: error.message})
        
    }

})

module.exports = routerMessages;