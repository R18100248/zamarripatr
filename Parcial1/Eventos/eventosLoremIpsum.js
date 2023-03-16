let  fs = require('fs');
const { text } = require('stream/consumers');

reader = fs.createReadStream("Parcial1/Eventos/lorem_ipsum.txt");

/* Evento data */
reader.on('data', function (texto)
{
    console.log(texto.toString());
    console.log('He recibido ' + texto.length + ' bytes de datos.');
});

/* Evento error: Se activará si el archivo no está */
reader.on('error', function(err)
{
    console.log(err);
});

/* Evento end: Se dispara cuando no hay más datos para leer, pero aún no se ha cerrado */
reader.on('end', function()
{
    let s = this;
    setTimeout(function()
    {
        s.destroy();
    }, 3000);
});

/* Evento close: Se llama una vez que el ReadStream haya terminado */
reader.on('close', function()
{
    console.log("La transmisión de lectura ha finalizado (Rogelio Zamarripa Treviño - 18100248).");
});