// Rogelio Zamarripa Treviño - 18100248
const express = require('express');
const app=express();
const fecha = require('./fecha.js');

app.use(express.json());

// Función Middleware: Tiene acceso al request, al response y a la siguiente función (next)
// Ejecuta código generalmente antes de entrar a nuestras rutas

// localhost:8082/fecha
// "fechaIngresar": "2023-03-17"
app.use(function(req,res,next)
{
    console.log(req.body.fechaIngresar);

    if(typeof req.body.fechaIngresar === "undefined")
    {
        res.status(401).json({error:"ERROR: Fecha no definida/no autorizada."}); //No Autorizado
    }
    else
    {
        const fecha = new Date(req.body.fechaIngresar);
        const diaHoy = fecha.getDay();

        const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
        console.log("Hoy es el día:",diasSemana[diaHoy], "(",diaHoy,")");

        if(diaHoy == 0 || diaHoy == 2 || diaHoy == 4)
        {
            next(); //Manejar la ruta
        }
        else
        {
            res.status(400).json({error:"ERROR - Fecha no válida: Solo se aceptan los días Lunes (0), Miércoles (2) y Viernes (4)"}); // No Autorizado
        }
    }
});

app.use(fecha.router);

app.listen(8082, (req,res) =>
{
    console.log("Servidor Escuchando (INDEX ROUTER EXTERNO - Rogelio Zamarripa Treviño, 18100248)");
})