const { AxiosError } = require('axios')
const { HttpError } = require('../index')

/**
 * Express middleware error handler for converting any axios-thrown errors to HTTP Errors
 *
 * @param {Error | import('axios').AxiosError} err
 * @param {import('express').Request} req: express request object
 * @param {import('express').Response} res: express response object
 * @param {import('express').NextFunction} next: express next
 */
function axiosErrorHandler(err, req, res, next) {
  if (err instanceof AxiosError && err.response) {
    next(new HttpError(err.response?.status, err.response?.data?.message, true))
  } else next(err)
}

module.exports = axiosErrorHandler
