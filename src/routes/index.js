const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const handlerMesages = require("../controllers/handlerMesages")
const handlerProyects = require("../controllers/handlerProyects")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/mensajes", handlerMesages)
router.use("/proyects", handlerProyects)

module.exports = router;
