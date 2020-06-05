const assert = require('assert');
const asyncModel = require('../model/async/async');

suite('setTimeout', () => {
    test('callback timeout', (done) => {
        asyncModel.timeOut((ret) => {
            assert.equal(ret, 1);
            done();
        })
    })

    test('callback promise timeout', (done) => {
        asyncModel.timeOutPromise()
        .then( ret => {
            assert.equal(ret, 1);
            done();
        })
        .catch(done)
    })

    test('async-awiat timeout', async () => {
        const ret = await asyncModel.timeOutPromise()
        assert.equal(ret, 1);
    })
})

suite('axios', (done) => {
    test('axios return promise', async () => {
        const ret = await asyncModel.axios2()
        assert.equal(ret['data']['id'], 3);
    })
})