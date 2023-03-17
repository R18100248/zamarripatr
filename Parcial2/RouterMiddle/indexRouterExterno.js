// Rogelio Zamarripa Treviño - 18100248
const express = require('express');
const app=express();
const productoAlimenticio = require('./productoAlimenticio.js');

app.use(express.json());

// Función Middleware: Tiene acceso al request, al response y a la siguiente función (next)
// Ejecuta código generalmente antes de entrar a nuestras rutas
app.use(function(req,res,next)
{
    console.log(req.body.nombreProducto);

    if(typeof req.body.nombreProducto === "undefined")
    {
        res.status(401).json({error:"Producto/Usuario No Autorizado"}); // No Autorizado
    }
    else
    {
        if(req.body.nombreProducto == "admin")
        {
            next(); // Manejar la ruta
        }
        else
        {
            res.status(401).json({error:"Producto/Usuario No Autorizado"}); // No Autorizado
        }
    }
});

app.use(productoAlimenticio.router);

app.listen(8082, (req,res) =>
{
    console.log("Servidor Escuchando (INDEX ROUTER EXTERNO - Rogelio Zamarripa Treviño, 18100248)");
})