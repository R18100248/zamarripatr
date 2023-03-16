const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

const archivoObjeto = fs.readFileSync(path.join(__dirname,'/archivo.yml'), 'utf8')
const valorObjeto = yaml.parse(archivoObjeto);
console.table(valorObjeto);

const archivoArray = fs.readFileSync(path.join(__dirname,'/array.yml'), 'utf8')
const valorArray = yaml.parse(archivoArray);
console.table(valorArray);

const archivoObjArr = fs.readFileSync(path.join(__dirname,'/objetoArray.yml'), 'utf8')
const valorObjArr = yaml.parse(archivoObjArr);
console.table(valorObjArr);

const archivoArrObj = fs.readFileSync(path.join(__dirname,'/arrayDeObjetos.yml'), 'utf8')
const valorArrObj = yaml.parse(archivoArrObj);
console.table(valorArrObj);
