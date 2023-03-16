const fs = require('fs');
const path = require('path');
const fsp = require('fs').promises;

fs.writeFile(path.join(__dirname, 'archivoC.txt'), 'Archivo creado por CALLBACK - Rogelio Zamarripa Treviño (18100248)', (err) =>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('Archivo creado por CALLBACK: Rogelio Zamarripa Treviño (18100248)');
    }
});

(async () =>
{
    try
    {
        await fsp.writeFile(path.join(__dirname, 'archivoP.txt'), 'Archivo creado por Promises - Rogelio Zamarripa Treviño (18100248)');
        console.log('Archivo creado por Promises: Rogelio Zamarripa Treviño (18100248)');
    }
    catch(err)
    {
        console.log(err);
    }
})();

console.log(__dirname);
console.log(__filename);
