let eventos = require('events');
let eEm = new eventos.EventEmitter(); //Clase de emisión de eventos

eEm.on('saludar', function(data)
{
    console.log("Hola 1er Listener: "+data+"!");
});

eEm.addListener('saludar', function(data)
{
    console.log("Hola 2do Listener: "+data+"!");
});

eEm.emit('saludar', 'Rogelio Zamarripa Treviño - 18100248');
//Emitirá el evento Saludar, y alguien lo va a escuchar
