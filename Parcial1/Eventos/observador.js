let  fs = require('fs');
let path = require('path');

let archivoObservar = path.join(__dirname,'observador.txt'); /* Función JOIN del modulo PATH */
/*DIRNAME: Constante, directorio donde estamos */
console.log(archivoObservar);

obs = fs.watch(archivoObservar,function(evento,archivo)
/* Primer parámetro de WATCH: El archivo que queremos ver */
/* Segundo parámetro: CALLBACK */
{
    console.log(`Sucedió el evento ${evento} en el archivo ${archivo}`);
});

obs.on('change',function()
{
    console.log('Se cambió el archivo (Rogelio Zamarripa Treviño - 18100248)')
});

// obs.on('error',function()
// {
//     console.log('Sucedió un error (Rogelio Zamarripa Treviño - 18100248)')
// });