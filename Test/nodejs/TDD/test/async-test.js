var assert = require('assert');
const fun_async = require('../src/async').fun_async
const fun_promise = require('../src/async').fun_promise

suite('Async Test', () => {
    test('setTimeout 100ms callback test', (done) => {
        fun_async( ret => {
            assert.equal(ret, 1)
            done()
        })
    })

    test('Proimse resolve test-1', (done) => {
        fun_promise()
        .then(ret => {
            assert.equal(ret, 1);
            done();
        })
        .catch(done)
    })

    test('Proimse resolve test-2', (done) => {
        fun_promise()
        .then( ret => {
            assert.equal(ret, 1)
        })
        .then(done, done)
    })

    test('Proimse resolve test2', () => {
        return fun_promise()
        .then( ret => {
            assert.equal(ret, 1)
        })
    })

    test('async await test', async () => {
        const ret = await fun_promise()
        try {
            assert.equal(ret, 1)
        } catch(e) {
            console.log(e)
        }
        
    })
})