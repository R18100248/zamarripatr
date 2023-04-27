let modulo = require('../src/modulo.js');
let expect = require('chai').expect;

describe("Pruebas a la función areaTriangulo",()=>
{
    test("TESTEO CON JEST - Si le mandamos 2 y 3, el resultado debería de regresarme un número 3", ()=>
    {
        //expect(modulo.areaTriangulo(2,3)).to.be.a("number");
        expect(modulo.areaTriangulo(2,3)).to.equal(3);
        /* let resultado = modulo.areaTriangulo(2,3);

        expect(resultado).to.be.a("number");
        expect(resultado).to.equal(3);*/
    });
});

