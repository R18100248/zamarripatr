let eventos = require('events').EventEmitter;
// let eEm = new eventos.EventEmitter(); //Clase de emisión de eventos
let util = require('util'); //Modulo que permite usar la herencia

function saludar()
{
    setTimeout(
        ()=>
        {
            this.emit('iniciaSaludo'); //Mientras la funcion hace su procesamiento emitiremos algo
            console.log("Hola Mundo! (Rogelio Zamarripa Treviño - 18100248)");
            this.emit('finalizaSaludo');
        }, 2000
    )
    return this; //Función saludar está heredando los eventos de EventEmitter
}

//Heredar lo que está poniendo EventEmitter
util.inherits(saludar,eventos);
let sal = new saludar();

sal.on('iniciaSaludo',function()
{
    console.log('La función Saludar emitió el evento iniciaSaludo');
})

sal.on('finalizaSaludo',function()
{
    console.log('La función Saludar emitió el evento finalizaSaludo');
})
