const helloWorld = require('../app').helloWorld;
const addition = require('../app').addition;
const lessThan = require('../app').lessThan;
const assert = require('chai').assert;

describe('App suite', function(){
    it('helloWord should return hello message', function(){
        assert.equal(helloWorld('Arges'), 'Hello World Arges testing');
    });

    it('adition should return 2', function(){
        assert.equal(addition(1,1), 2);
    });


    it('lessThan should return true if int1 is less than int2', function(){
        assert.equal(lessThan(1,2), true);
    });
});