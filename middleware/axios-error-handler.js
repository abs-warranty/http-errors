const { AxiosError } = require('axios')
const { HttpError } = require('../http-errors')

/**
 * Express middleware error handler for converting any axios-thrown errors to HTTP Errors
 * @type {import('express').ErrorRequestHandler}
 */
function axiosErrorHandler(err, req, res, next) {
  if (err instanceof AxiosError && err.response) {
    next(new HttpError(err.response?.status, err.response?.data?.message, true))
  } else next(err)
}

module.exports = axiosErrorHandler