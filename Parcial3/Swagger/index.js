const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const { request } = require('express');
const morgan = require('morgan');
const path = require('path');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app=express();
app.use(express.json())
app.use(express.text())
app.use(morgan('combined'))
app.use(cors())

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API - Productos Alimenticios (Rogelio Zamarripa Treviño - 18100248)',
            version: '1.0.0',
        },
        servers:[
            {url: "http://localhost:8082"}
        ],
    },
    apis: [`${path.join(__dirname,"./index.js")}`]
};

/**
 * @swagger
 * /productosAlimenticios2:
 *    get:
 *      description: Bienvenido a swagger-jsdoc! (Rogelio Zamarripa Treviño - 18100248)
 *      responses:
 *        200:
 *          description: Consulta de todos los productos alimenticios registrados en la tabla 'productosAlimenticios', guardada en la base de datos 'web18100248'.
 */

app.get('/productosAlimenticios2', async (req, res) => {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'web18100248'});
    const [rows, fields] = await connection.execute('SELECT * FROM productosAlimenticios');
    res.json(rows);
});

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

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use((req,res)=> 
{ 
    res.status(404).json({estado: "Pagina = Ruta No Encontrada"})
})

app.listen(8082,()=>
{
    console.log("Servidor Express corriendo y escuchando en el puerto 8082 - Rogelio Zamarripa Treviño (18100248)")
})
