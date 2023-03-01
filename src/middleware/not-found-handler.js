const { NotFoundError } = require('../http-errors')

/**
 * If this middleware is reached, it means that the route does not exist
 * and a NotFoundError should be thrown
 * @type {import('express').RequestHandler}
 * @returns {void}
 * @throws {NotFoundError}
 *
 */
function notFoundHandler(req, res, next) {
  next(new NotFoundError(`Route ${req.method} ${req.url} does not exist`))
}

module.exports = notFoundHandler
