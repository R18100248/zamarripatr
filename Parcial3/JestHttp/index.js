const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const { request } = require('express');
const morgan = require('morgan');
const app=express();

app.use(express.json())
app.use(express.text())
app.use(morgan('combined'))
app.use(cors())

//GET, POST, DELETE - Altas, Bajas, Consultas, Modificaciones

//Petición tipo GET a la ruta - CONSULTA DE TODOS LOS PRODUCTOS
app.get('/productosAlimenticios/', async(req,res) =>
{
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'web18100248'});
    const [rows, fields] = await connection.execute('SELECT * FROM productosAlimenticios');
    //"SELECT * FROM productosAlimenticios WHERE codigoProducto = 'PR00002'"

    res.json(rows);
})

//Petición tipo GET a la ruta - CONSULTA DE UN PRODUCTO
app.get('/productosAlimenticios/:codigo', async(req,res) =>
{
    //EJEMPLO - IMPRIMIR producto con codigo 1: http://localhost:8081/productosAlimenticios/1
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'web18100248'});
    const [rows, fields] = await connection.execute('SELECT * FROM `productosAlimenticios` WHERE `codigoProducto` = ?',[req.params.codigo]);

    if(rows.length == 0)
    {
        // res.json({registros:"ERROR DE CAPTURA: No se encontró ningún producto alimenticio con este código."});
        res.status(500).send(`ERROR DE CAPTURA: No se encontró ningún producto alimenticio con este código.`);
    }
    else
    {
        res.json(rows);
    }
})

app.use((req,res)=> 
{ 
    res.status(404).json({estado: "Pagina = Ruta No Encontrada"})
})

app.listen(8082,()=>
{
    console.log("Servidor Express corriendo y escuchando en el puerto 8082 - Rogelio Zamarripa Treviño (18100248)")
})
