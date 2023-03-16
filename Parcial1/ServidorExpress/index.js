const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app=express();

app.use(express.json())
app.use(express.text())
app.use(morgan('combined'))
app.use(cors())

app.get('/alumnos/:carrera', (req,res) =>
{
    // console.log(req.params.carrera);
    // http://localhost:8081/alumnos/:EjemploCarrera
    res.json({alumnos:"Alumnos de la carrera de "+req.params.carrera})
})

app.get('/maestros', (req,res) =>
{
    // console.log(req.query.control);
    // http://localhost:8081/maestros?control=EjemploControl
    res.json({maestro:"Información del maestro "+req.query.control})
})

app.post('/administrativos', (req,res) =>
{
    // console.log(req.body.nombre);
    //
    res.json({admin:"Información del personal administrativo "+req.body.nombre})
})

app.use((req,res)=> 
{ 
    res.status(404).json({estado: "Pagina = Ruta No Encontrada"})
})

app.listen(8081,()=>
{
    console.log("Servidor Express corriendo y escuchando en el puerto 8081 - Rogelio Zamarripa Treviño (18100248)")
})
