var chai = require('chai');
var assert = chai.assert;
var func = require('../js/funciones');

describe('Pruebas MiniPractica 2', function () {
    
    describe('Prueba par', function (){
        it('numero', function (){
            var num = 6;
            fcn = func.funcionpr(num);
            assert.equal(fcn,"par");  
        })
    })

    describe('Prueba impar', function (){
        it('numero', function (){
            var num = 17;
            fcn = func.funcionpr(num);
            assert.equal(fcn,"impar");  
        })
    })
})