// get the client
const mysql = require('mysql2');
const json2xls = require('json2xls');
const fs = require('fs');
const path = require('path');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'web18100248'
});

// simple query
connection.query(
  'SELECT * FROM productosAlimenticios',
  function(err, results, fields) {
    if(err)
    {
        console.table("Ocurrió un error: " +err.sqlMessage); // results contains rows returned by server
    }
    else
    {
        console.log(results); // fields contains extra meta data about results, if available

        var xls = json2xls(results);
        fs.writeFileSync(path.join(__dirname,'data.xlsx'), xls, 'binary')
    }
  }
);

connection.end(); //Finaliza la conexión, sino se queda abierta

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );