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

//Petición tipo POST a la ruta - ALTA
app.post('/productosAlimenticios/', async(req,res) =>
{
    const sentenciaSQL = `INSERT INTO productosAlimenticios
    (codigoProducto, nombreProducto, departamento, proveedorProducto, codigoProveedor, precioCompra, precioVenta, cantProdVendidos, cantProdExistentes, estadoProducto)
    VALUES('${req.body.codigoProducto}','${req.body.nombreProducto}','${req.body.departamento}','${req.body.proveedorProducto}','${req.body.codigoProveedor}',
    '${req.body.precioCompra}','${req.body.precioVenta}','${req.body.cantProdVendidos}','${req.body.cantProdExistentes}','${req.body.estadoProducto}')`;

    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'web18100248'});
    const [rows, fields] = await connection.execute(sentenciaSQL);

    if(rows.affectedRows == 1)
    {
        // res.json({registros:"ERROR DE CAPTURA: No se encontró ningún producto alimenticio con este código."});
        res.status(200).send(`Producto insertado exitósamente a la base de datos productosAlimenticios.`);
    }
    else
    {
        res.status(500).send(`ERROR DE CAPTURA: El producto NO se insertó a la base de datos productosAlimenticios.`);
    }
    
})

//Petición tipo DELETE a la ruta - BAJA
app.delete('/productosAlimenticios/:codigo', async(req,res) =>
{
    const codigoProductoAlimenticio = req.params.codigo;
    //EJEMPLO - BORRAR producto con codigo 1: http://localhost:8081/productosAlimenticios/1
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'web18100248'});
    const [rows, fields] = await connection.execute('DELETE FROM `productosAlimenticios` WHERE `codigoProducto` = ?',[codigoProductoAlimenticio]);

    if(rows.affectedRows == 1)
    {
        res.send(`El producto ha sido eliminado exitósamente de la base de datos.`);
    }
    else
    {
        res.send(`ERROR DE CAPTURA: No se encontró ningún producto alimenticio con este código.`);
    }
})

//Petición tipo PUT a la ruta - MODIFICACION
app.put('/productosAlimenticios/', async(req,res) =>
{
    const sentenciaSQLModificar = `UPDATE productosAlimenticios
    SET nombreProducto = '${req.body.nombreProducto}', departamento = '${req.body.departamento}', proveedorProducto = '${req.body.proveedorProducto}', codigoProveedor = '${req.body.codigoProveedor}',
    precioCompra = '${req.body.precioCompra}', precioVenta = '${req.body.precioVenta}', cantProdVendidos = '${req.body.cantProdVendidos}', cantProdExistentes = '${req.body.cantProdExistentes}',
    estadoProducto = '${req.body.estadoProducto}' WHERE codigoProducto = '${req.body.codigoProducto}'`;

    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'web18100248'});
    const [rows, fields] = await connection.execute(sentenciaSQLModificar);

    if(rows.affectedRows == 1)
    {
        // res.json({registros:"ERROR DE CAPTURA: No se encontró ningún producto alimenticio con este código."});
        res.status(200).send(`Producto modificado exitósamente dentro de la base de datos productosAlimenticios.`);
    }
    else
    {
        res.status(500).send(`ERROR DE CAPTURA: El producto NO se modificó dentro de la base de datos productosAlimenticios.`);
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
