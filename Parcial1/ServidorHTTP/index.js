let http = require('http');

//create a server object:
let servidor = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.write('Servidor HTTP contestando (Rogelio Zamarripa Trevino - 18100248)');
    res.end();
})

servidor.listen(8080);
