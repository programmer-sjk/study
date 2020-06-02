var assert = require('assert');
const fun_async = require('../src/async').fun_async
const fun_promise = require('../src/async').fun_promise

describe('Async Test', () => {
    it('setTimeout 100ms callback test', (done) => {
        fun_async( ret => {
            assert.equal(ret, 1)
            done()
        })
    })

    it('Proimse resolve test-1', (done) => {
        fun_promise()
        .then(ret => {
            assert.equal(ret, 1);
            done();
        })
        .catch(done)
    })

    it('Proimse resolve test-2', (done) => {
        fun_promise()
        .then( ret => {
            assert.equal(ret, 1)
        })
        .then(done, done)
    })

    it('Proimse resolve test2', () => {
        return fun_promise()
        .then( ret => {
            assert.equal(ret, 1)
        })
    })

    it('async await test', async () => {
        const ret = await fun_promise()
        try {
            assert.equal(ret, 2)
        } catch(e) {
            console.log(e)
        }
        
    })
})