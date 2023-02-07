/**  
 * translate status code to response message
 * @type {{[key:number]:string}}
 */ 
const response = {
  400: 'bad request',
  401: 'unauthorized',
  403: 'forbidden',
  404: 'not found',
  405: 'method not allowed',
  409: 'conflict',
  418: 'i am a teapot',
  420: 'enhance your calm',
  422: 'unprocessable entity',
  500: 'internal server error',
}

/**
 * Generic HTTP errors have JSON message and status
 * @class
 * @extends {Error}
 */
class HttpError extends Error {
  /**
   * @param {number} statusCode 
   * @param {string} message 
   * @param {string | boolean} [externalMessage]
   */
  constructor(statusCode, message, externalMessage) {
    super(message)
    this.name = 'HttpError'
    this.statusCode = statusCode
    this.externalMessage = externalMessage === true ? message : externalMessage
    let json = { error: response[statusCode], statusCode: statusCode }
    this.json = externalMessage ? { ...json, message: this.externalMessage } : json
    this.response = JSON.stringify(this.json)
  }
}

/**
 * Custom error denoting a bad request was made (HTTP 400)
 * @class
 * @extends {HttpError}
 */
class BadRequestError extends HttpError {
  /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage]
   */
  constructor(message, externalMessage) {
    super(400, message, externalMessage)
    this.name = 'BadRequestError'
  }
}

/**
 * Custom error denoting the user is not authorized (HTTP 401)
 * @class
 * @extends {HttpError}
 */
class UnauthorizedError extends HttpError {
  /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage]
   */
  constructor(message, externalMessage) {
    super(401, message, externalMessage)
    this.name = 'UnauthorizedError'
  }
}

/**
 * Custom error denoting the user has insufficient privileges (HTTP 403)
 * @class
 * @extends {HttpError}
 */
class ForbiddenError extends HttpError {
  /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage]
   */
  constructor(message, externalMessage) {
    super(403, message, externalMessage)
    this.name = 'ForbiddenError'
  }
}

/**
 * Custom error denoting a resource has not been found (HTTP 404)
 * @class
 * @extends {HttpError}
 */
class NotFoundError extends HttpError {
   /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage]
   */
  constructor(message, externalMessage) {
    super(404, message, externalMessage)
    this.name = 'NotFoundError'
  }
}

/**
 * Custom error denoting the method used is not allowed for this endpoint (HTTP 405)
 * @class
 * @extends {HttpError}
 */
class NotAllowedError extends HttpError {
   /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage] 
   */
  constructor(message, externalMessage) {
    super(405, message, externalMessage)
    this.name = 'NotAllowedError'
  }
}

/**
 * Custom error denoting a resource is in conflict
 * @class
 * @extends {HttpError}
 */
class ConflictError extends HttpError {
   /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage] 
   */
  constructor(message, externalMessage) {
    super(409, message, externalMessage)
    this.name = 'ConflictError'
  }
}

/**
 * Custom error denoting that the machine really is actually a teapot 🍵
 * @class
 * @extends {HttpError}
 */
class IAmATeapotError extends HttpError {
   /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage] 
   */
  constructor(message, externalMessage) {
    super(418, message, externalMessage)
    this.name = 'IAmATeapotError'
  }
}

/**
 * Custom error denoting the user must enhance their frickin' calm, maaaan. 🌿
 * @class
 * @extends {HttpError}
 */
class EnhanceYourCalmError extends HttpError {
   /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage] 
   */
  constructor(message, externalMessage) {
    super(420, message, externalMessage)
    this.name = 'EnhanceYourCalmError'
  }
}

/**
 * Custom error denoting an unprocessable entity
 * @class
 * @extends {HttpError}
 */
class UnprocessableEntityError extends HttpError {
   /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage] 
   */
  constructor(message, externalMessage) {
    super(422, message, externalMessage)
    this.name = 'UnprocessableEntityError'
  }
}

/**
 * Custom error denoting an internal server error (HTTP 500)
 * @class
 * @extends {HttpError}
 */
class InternalServerError extends HttpError {
   /**
   * @param {string} message 
   * @param {string | boolean} [externalMessage] 
   */
  constructor(message, externalMessage) {
    super(500, message, externalMessage)
    this.name = 'InternalServerError'
  }
}

module.exports = {
  HttpError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  NotAllowedError,
  ConflictError,
  IAmATeapotError,
  EnhanceYourCalmError,
  UnprocessableEntityError,
  InternalServerError,
}
