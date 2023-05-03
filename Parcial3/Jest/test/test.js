let modulo = require('../src/modulo.js');

describe("Pruebas a la función areaTriangulo",()=>
{
    test("TESTEO CON JEST - Si le mandamos 2 y 3, el resultado debería de regresarme un número 3", ()=>
    {
        expect(modulo.areaTriangulo(2,3)).toBe(3);
    });
});

