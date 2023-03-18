// const { response } = require('express');
const express = require('express');
// const app=express();
const router = express.Router();

//Petición tipo GET a la ruta - CONSULTA DE FECHA
router.get('/fecha/', (req,res) =>
{
    res.status(200).json({respuesta: "Petición GET a ruta fecha (ROUTER)"});
}).post('/fecha/', (req,res) =>
{
    res.status(200).json({respuesta: "Petición POST a ruta fecha (ROUTER)"});    
}).put('/fecha/', (req,res) =>
{
    res.status(200).json({respuesta: "Petición PUT a ruta fecha (ROUTER)"});    
}).delete('/fecha/', (req,res) =>
{
    res.status(200).json({respuesta: "Petición DELETE a ruta fecha (ROUTER)"});    
})

module.exports.router = router;

/*
app.use(router);

app.listen(8082, (req,res) =>
{
    console.log("Servidor Escuchando");
})*/