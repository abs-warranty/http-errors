const handler = require('../../src/middleware/error-handler')
const sinon = require('sinon')
const { ForbiddenError, UnauthorizedError } = require('../../src')
const assert = require('chai').assert

describe('Http Error Handler', function () {
  const sandbox = sinon.createSandbox()
  const errorMessage = 'An error'
  /** @ts-ignore @type {import('express').NextFunction} */
  const next = {}
  /** @ts-ignore @type {import('express').Response} */
  const res = {
    send: function () {},
    json: function (d) {
      return this
    },
    status: function (s) {
      return this
    },
  }

  /** @ts-ignore @type {import('express').Request} */
  const req = {}

  beforeEach(function () {
    sandbox.spy(res)
  })

  //restore the mock to be used again
  afterEach(function () {
    sandbox.restore()
  })

  it('should respond with an HttpError if the given error is of that type', async function () {
    const err = new ForbiddenError(errorMessage, true)
    handler(err, req, res, next)

    assert.equal(res.status.firstCall.args[0], err.statusCode)
    assert.deepEqual(res.json.firstCall.args[0], err.json)
  })

  it('should respond with an HttpError if the given error has a matching name', async function () {
    const err = new UnauthorizedError(errorMessage, true)
    handler(err, req, res, next)

    assert.equal(res.status.firstCall.args[0], err.statusCode)
    assert.deepEqual(res.json.firstCall.args[0], err.json)
  })

  it('should respond with an Internal Server Error if the error is not an http error', async function () {
    const initialErr = new Error(errorMessage, true)
    const err = { error: 'internal server error' }
    const statusCode = 500

    handler(initialErr, req, res, next)

    assert.equal(res.status.firstCall.args[0], statusCode)
    assert.deepEqual(res.json.firstCall.args[0], err)
  })
})
