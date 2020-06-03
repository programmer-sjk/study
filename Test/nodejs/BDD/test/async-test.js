var assert = require('assert');
const fun_async = require('../src/async').fun_async
const fun_promise = require('../src/async').fun_promise
const fun_axios =  require('../src/async').fun_axios
const fun_axios2 =  require('../src/async').fun_axios2

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
            assert.equal(ret, 1)
        } catch(e) {
            console.log(e)
        }
        
    })

    it('axios test', (done) => {
        fun_axios( r => {
            try {
                assert.equal(r['data']['id'], 3)
                done()
            } catch(e) {
                console.log(e)
            }
        })
    })

    it('axios test2', (done) => {
        fun_axios2()
        .then(r => {
            assert.equal(r['data']['id'], 3)
            done()
        })
        .catch(done)
    })
})