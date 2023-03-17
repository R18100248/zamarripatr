// const { response } = require('express');
const express = require('express');
// const app=express(); SIN COMENTAR EN SEGUNDO ARCHIVO, CON ROUTER PERO SIN MODULO
const router = express.Router();

//Petición tipo GET a la ruta - CONSULTA DE TODOS LOS PRODUCTOS
router.get('/productosAlimenticios/', (req,res) =>
{
    res.status(200).json({respuesta: "Petición GET a ruta productosAlimenticios (ROUTER)"});
}).post('/productosAlimenticios/', (req,res) =>
{
    res.status(200).json({respuesta: "Petición POST a ruta productosAlimenticios (ROUTER)"});    
}).put('/productosAlimenticios/', (req,res) =>
{
    res.status(200).json({respuesta: "Petición PUT a ruta productosAlimenticios (ROUTER)"});    
}).delete('/productosAlimenticios/', (req,res) =>
{
    res.status(200).json({respuesta: "Petición DELETE a ruta productosAlimenticios (ROUTER)"});    
})

module.exports.router = router; //NO APARECE EN EL ARCHIVO CON ROUTER

/* SIN COMENTAR EN SEGUNDO ARCHIVO, CON ROUTER PERO SIN MODULO
app.use(router);

app.listen(8082, (req,res) =>
{
    console.log("Servidor Escuchando");
})*/