const sumar = require('../index');  // No se coloca la extensión porque common js no lo requiere

const assert = require('assert'); //propio de commonjs
 // SESGOS
 //cobertura: cantidad de codigo que las pruebas alcanzan a abarcar para saber que porcentaje del codigo se prueba
// casos de uso: happy path.
 describe("Probar la suma de dos números", ()=>{
    
    //50/50
    
    // afirmar que 5+5 es 10
    // it es cada caso de prueba, prueba una sola cosa
    it("Cinco mas cinco es diez", ()=>{
        //primero el valor verdadero y luego la funcion que debe retornar ese valor verdadero
        assert.equal(10, sumar(5,5));
    });
    // Afirmamos que cinco + cinco no son 55
    it("Cinco mas cinco no son 55",()=>{
        assert.notEqual(55, sumar(5,5));
    }
    );
 });

