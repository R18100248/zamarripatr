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

//Petición tipo GET a la ruta - CORRECTO
app.get('/productosAlimenticios/', async(req,res) =>
{
    // res.json({producto:"Todos los productos alimenticios"});
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'web18100248'});
    const [rows, fields] = await connection.execute('SELECT * FROM productosAlimenticios');
    //"SELECT * FROM productosAlimenticios WHERE codigoProducto = 'PR00002'"

    res.json(rows);
})

//Petición tipo GET a la ruta
app.get('/productosAlimenticios/:codigo', async(req,res) =>
{
    //EJEMPLO - IMPRIMIR producto con codigo 1: http://localhost:8081/productosAlimenticios/1
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'web18100248'});
    const [rows, fields] = await connection.execute('SELECT * FROM `productosAlimenticios` WHERE `codigoProducto` = ?', [req.params.codigo]);

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

app.listen(8081,()=>
{
    console.log("Servidor Express corriendo y escuchando en el puerto 8081 - Rogelio Zamarripa Treviño (18100248)")
})
