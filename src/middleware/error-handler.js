const { HttpError } = require('../http-errors')

/**
 * Middleware to handle all uncaught errors in an express app
 *
 * @type {import('express').ErrorRequestHandler}
 */
function errorHandler(err, req, res, next) {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json(err.json)
  } else {
    res.status(500).json({ error: 'internal server error' })
  }
}

module.exports = errorHandler
