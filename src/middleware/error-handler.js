/**
 * @typedef {object} ErrorHandlerError
 * @property {string} err.name
 * @property {object} [err.json]
 */

/**
 * Check if an error is an HttpError
 * @param {ErrorHandlerError} err
 * @returns {boolean}
 */
function _isHttpError(err) {
  switch (err.name) {
    case 'HttpError':
    case 'BadRequestError':
    case 'ConflictError':
    case 'EnhanceYourCalmError':
    case 'ForbiddenError':
    case 'IAmATeapotError':
    case 'InternalServerError':
    case 'NotFoundError':
    case 'NotAllowedError':
    case 'UnauthorizedError':
    case 'UnprocessableEntityError':
      return true
    default:
      return false
  }
}

/**
 * Get an Error's HTTP status code if it is an HttpError
 * @param {ErrorHandlerError} err
 * @returns {number}
 */
function _errorCode(err) {
  switch (err.name) {
    case 'BadRequestError':
      return 400
    case 'ConflictError':
      return 409
    case 'EnhanceYourCalmError':
      return 420
    case 'ForbiddenError':
      return 403
    case 'IAmATeapotError':
      return 418
    case 'InternalServerError':
      return 500
    case 'NotFoundError':
      return 404
    case 'NotAllowedError':
      return 405
    case 'UnauthorizedError':
      return 401
    case 'UnprocessableEntityError':
      return 422
    default:
      return 500
  }
}

/**
 * Middleware to handle all uncaught errors in an express app
 *
 * @param {ErrorHandlerError} err
 * @param {import('express').Request} req: express request object
 * @param {import('express').Response} res: express response object
 * @param {import('express').NextFunction} next: express next
 */
function errorHandler(err, req, res, next) {
  if (_isHttpError(err) && err.json) {
    res.status(_errorCode(err)).json(err.json)
  } else {
    res.status(500).json({ error: 'internal server error' })
  }
}

module.exports = errorHandler
