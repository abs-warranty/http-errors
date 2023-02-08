/**
 * Generic HTTP errors have JSON message and status
 * @class
 * @extends {Error}
 */
export class HttpError extends Error {
    /**
     * @param {number} statusCode
     * @param {string} message
     * @param {string | boolean} [externalMessage]
     */
    constructor(statusCode: number, message: string, externalMessage?: string | boolean | undefined);
    statusCode: number;
    externalMessage: string | false | undefined;
    json: {
        error: string;
        statusCode: number;
    } | {
        message: string | false | undefined;
        error: string;
        statusCode: number;
    };
    response: string;
}
/**
 * Custom error denoting a bad request was made (HTTP 400)
 * @class
 * @extends {HttpError}
 */
export class BadRequestError extends HttpError {
    /**
     * @param {string} message
     * @param {string | boolean} [externalMessage]
     */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting the user is not authorized (HTTP 401)
 * @class
 * @extends {HttpError}
 */
export class UnauthorizedError extends HttpError {
    /**
     * @param {string} message
     * @param {string | boolean} [externalMessage]
     */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting the user has insufficient privileges (HTTP 403)
 * @class
 * @extends {HttpError}
 */
export class ForbiddenError extends HttpError {
    /**
     * @param {string} message
     * @param {string | boolean} [externalMessage]
     */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting a resource has not been found (HTTP 404)
 * @class
 * @extends {HttpError}
 */
export class NotFoundError extends HttpError {
    /**
    * @param {string} message
    * @param {string | boolean} [externalMessage]
    */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting the method used is not allowed for this endpoint (HTTP 405)
 * @class
 * @extends {HttpError}
 */
export class NotAllowedError extends HttpError {
    /**
    * @param {string} message
    * @param {string | boolean} [externalMessage]
    */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting a resource is in conflict
 * @class
 * @extends {HttpError}
 */
export class ConflictError extends HttpError {
    /**
    * @param {string} message
    * @param {string | boolean} [externalMessage]
    */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting that the machine really is actually a teapot 🍵
 * @class
 * @extends {HttpError}
 */
export class IAmATeapotError extends HttpError {
    /**
    * @param {string} message
    * @param {string | boolean} [externalMessage]
    */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting the user must enhance their frickin' calm, maaaan. 🌿
 * @class
 * @extends {HttpError}
 */
export class EnhanceYourCalmError extends HttpError {
    /**
    * @param {string} message
    * @param {string | boolean} [externalMessage]
    */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting an unprocessable entity
 * @class
 * @extends {HttpError}
 */
export class UnprocessableEntityError extends HttpError {
    /**
    * @param {string} message
    * @param {string | boolean} [externalMessage]
    */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
/**
 * Custom error denoting an internal server error (HTTP 500)
 * @class
 * @extends {HttpError}
 */
export class InternalServerError extends HttpError {
    /**
    * @param {string} message
    * @param {string | boolean} [externalMessage]
    */
    constructor(message: string, externalMessage?: string | boolean | undefined);
}
