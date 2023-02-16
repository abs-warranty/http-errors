const assert = require('chai').assert

const { NotFoundError } = require('../../src')
const { notFoundHandler } = require('../../src/middleware')

describe('Not Found Handler Middleware', () => {
  const fail = e => assert.fail(`Test should not throw: ${e.message}`)

  it('Should next a NotFoundError if this middleware is reached with headers not being sent', () => {
    /** @ts-ignore @type {import('express').Request} */
    const req = { method: 'POST', baseUrl: '/route-does-not-exist' }
    /** @ts-ignore @type {import('express').Response} */
    const res = { headersSent: false }

    try {
      notFoundHandler(req, res, v => {
        assert.isTrue(v instanceof NotFoundError)
      })
    } catch (e) {
      fail(e)
    }
  })
})
