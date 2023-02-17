const assert = require('chai').assert
const { AxiosError } = require('axios')
const { HttpError } = require('../../http-errors')
const axiosErrorHandler = require('../../middleware/axios-error-handler')

describe('Axios Error Handler', () => {
  /** @ts-ignore @type {import('express').Request} */
  const req = {}
  /** @ts-ignore @type {import('express').Response} */
  const res = {}

  it('Should throw an HTTP Error', () => {
    /** @type {import('axios').AxiosError} */
    const err = new AxiosError('test error')
    /** @ts-ignore @type {import('axios').AxiosResponse} */
    err.response = {
      status: 409,
      statusText: 'Conflict',
      data: { message: 'abc-123' },
    }

    axiosErrorHandler(err, req, res, e => {
      assert.isTrue(e instanceof HttpError)
    })
  })

  it('Should not throw an HTTP Error if the error is not an axios error', () => {
    const err = new Error('test error')

    axiosErrorHandler(err, req, res, e => {
      assert.isFalse(e instanceof HttpError)
    })
  })
})
