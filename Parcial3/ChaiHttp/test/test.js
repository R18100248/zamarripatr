let chai     = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

const url = 'http://localhost:8082';
//Encapsular en test dentro de la función describe() Y describiremos el test
describe('Inserta un producto alimenticio',()=>{
    it('debería insertar un producto alimenticio', (done) => {
        chai.request(url)
            .post('/productosAlimenticios')
            .send({ codigoProducto: "00012", nombreProducto: "PRODUCTO PRUEBA", departamento: "Botanas",
            proveedorProducto: "EJEMPLO PROVEEDOR", codigoProveedor: "EP-56789", precioCompra: 9.00, 
            precioVenta: 12.50, cantProdVendidos: 10, cantProdExistentes: 5,
            estadoProducto: "Poco Inventario"})
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res.text).to.be.a('string');
                done();
            });
    });
});