const express = require('express');
const jsonwebtoken = require('jsonwebtoken');

let app = express();
app.use(express.json());

app.post('/login',function(req,res,next) //Loggearse, mandar las credenciales, regresar token
{
    console.log(req.body);
    var token = jsonwebtoken.sign(req.body, 'claveSecreta'); //Generar un token
    //console.log('Petición POST a login - Rogelio Zamarripa Treviño, 18100248');
    console.log(token);
    res.json({token:token}); //Propiedad: Variable
    // res.send('Petición POST a login - Rogelio Zamarripa Treviño, 18100248');
})

app.get('/sistema2',verificarToken,function(req,res,next) //Verificar si ese token es valido
{
    res.json({mensaje:"Acceso concedido a ruta sistema2"});
})

app.listen(8082,function()
{
    console.log("Servidor Express escuchando en el puerto 8082 - Rogelio Zamarripa Treviño, 18100248")
});

function verificarToken(req,res,next)
{
    //console.log(req.headers.authorization);
    let token = req.headers.authorization.substring(7,req.headers.authorization.length);
    console.log(token);

    //Desencriptar Token
    jsonwebtoken.verify(token,'claveSecreta',function(err, decoded)
    {
        // Si es correcto llamamos a la función next
        // Si es incorrecto res.json({Error:"No tienes acceso"})
        if(err)
        {
            res.json({Error:"Acceso no concedido a ruta sistema2"});
        }
        else
        {
            next();
        }
    });    
}