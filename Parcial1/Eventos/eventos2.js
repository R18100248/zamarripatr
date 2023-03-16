let eventos = require('events');

function saludar()
{
    let eEm = new eventos.EventEmitter(); //Clase de emisión de eventos

    setTimeout(
        ()=>
        {
            eEm.emit('iniciaSaludo'); //Mientras la funcion hace su procesamiento emitiremos algo
            console.log("Hola Mundo! (Rogelio Zamarripa Treviño - 18100248)");
            eEm.emit('finalizaSaludo');
        }, 2000
    )
    return eEm;
}

let sal = saludar();

sal.on('iniciaSaludo',function()
{
    console.log('La función Saludar emitió el evento iniciaSaludo');
})

sal.on('finalizaSaludo',function()
{
    console.log('La función Saludar emitió el evento finalizaSaludo');
})
