const assert  = require("chai").assert;
const index = require('../index');


//Results
const helloWorldTest = index.helloWorld();


describe('Index suite', function(){

    describe('Hello word method and text Cases', function(){
        it('Hello word text is as expectd', function(){
            assert.equal(helloWorldTest,'Hello word');
        });
        it('Validate data type', function(){
            assert.typeOf(helloWorldTest, 'string', 'The expected data type is a string' )
        });

    });
 
});