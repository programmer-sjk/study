var assert = require('assert');
const fun_1 = require('../src/basic.js').fun_1
const fun_abc = require('../src/basic.js').fun_abc
const fun_arr = require('../src/basic.js').fun_arr


describe('Basic Test', () => {
    it('int test', () => {
        assert.equal(fun_1(), 1);
    })

    it('str test', () => {
        assert.equal(fun_abc(), 'abc');
    })

    it('arr test', () => {
        assert.deepStrictEqual(fun_arr(), [1,2,3])
    })
})

describe('Hook Test', () => {
    it('int test', () => {
        assert.equal(fun_1(), 1);
    })

    before(function() {
        console.log('before')
    });
    
    after(function() {
        console.log('after')
    });

    beforeEach(function() {
        console.log('beforeEach')
    });

    afterEach(function() {
        console.log('afterEach')
    });
})
