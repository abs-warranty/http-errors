const { NotFoundError } = require('../../src')

/**
 * If this middleware is reached, it means that the route does not exist
 * and a NotFoundError should be thrown
 * 
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {void}
 * @throws {NotFoundError}
 *
 */
function notFoundHandler(req, res, next) {
  next(new NotFoundError(`Route ${req.method} ${req.baseUrl} does not exist`))
}

module.exports = notFoundHandler
