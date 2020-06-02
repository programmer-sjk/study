var assert = require('assert');
const fun_1 = require('../src/basic.js').fun_1
const fun_abc = require('../src/basic.js').fun_abc
const fun_arr = require('../src/basic.js').fun_arr

suite('Basic Test', () => {
    test('int test', () => {
        assert.equal(fun_1(), 1);
    })

    test('str test', () => {
        assert.equal(fun_abc(), 'abc');
    })

    test('arr test', () => {
        assert.deepStrictEqual(fun_arr(), [1,2,3])
    })
})

suite('Hook Test', () => {
    test('int test', () => {
        assert.equal(fun_1(), 1);
    })

    setup(function() {
        console.log('setup')
    });
    
    teardown(function() {
        console.log('teardown')
    });

    suiteSetup(function() {
        console.log('suiteSetup')
    });

    suiteTeardown(function() {
        console.log('suiteTeardown')
    });
})
