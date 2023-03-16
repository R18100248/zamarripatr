let eventos = require('events').EventEmitter;
let util = require('util'); //Modulo que permite usar la herencia

class Saludo extends eventos
{
    saludar()
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
}

let sal = new Saludo();
sal.saludar();

sal.on('iniciaSaludo',function()
{
    console.log('La función Saludar emitió el evento iniciaSaludo');
})

sal.on('finalizaSaludo',function()
{
    console.log('La función Saludar emitió el evento finalizaSaludo');
})
