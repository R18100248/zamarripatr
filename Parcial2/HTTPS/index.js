const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

let app = express();

app.get('/',function(req,res)
{
    res.send("Servidor Express contestando a GET (HTTPS) - Rogelio Zamarripa Treviño, 18100248");
})

let opciones = {
    key: fs.readFileSync(path.join(__dirname,'/ssl/key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'/ssl/cert.pem'))
}

//El servidor está utilizando el protocolo de HTTP seguro (https://localhost:8082/)
https.createServer(opciones,app).listen(8082,function()
{
    console.log("Servidor Express en línea - Rogelio Zamarripa Treviño, 18100248");
})