// const { response } = require('express');
const express = require('express');
const app=express();
const productoAlimenticio = require('./productoAlimenticio.js');
// const router = express.Router();

app.use(productoAlimenticio.router);

app.listen(8082, (req,res) =>
{
    console.log("Servidor Escuchando (INDEX ROUTER EXTERNO)");
})