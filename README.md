# Custom HTTP Errors

## To Install:

`yarn add @abs-warranty/http-errors`

## Example Usage:

```javascript
const { NotFoundError } = require('@abs-warranty/http-errors')

throw new NotFoundError('<yourMessageHere>')
```

## Available Errors:

| Error                    | Status Code | Message               | Description                                                                 |
| ------------------------ | ----------- | --------------------- | --------------------------------------------------------------------------- |
| BadReqeustError          | 400         | bad request           | Custom error denoting a bad request was made                                |
| UnauthorizedError        | 401         | unauthorized          | Custom error denoting the user is not authorized                            |
| ForbiddenError           | 403         | forbidden             | Custom error denoting the user has insufficient privileges                  |
| NotFoundError            | 404         | not found             | Custom error denoting a resource has not been found                         |
| NotAllowedError          | 405         | method not allowed    | Custom error denoting the method used is not allowed for this endpoint      |
| ConflictError            | 409         | conflict              | Custom error denoting a resource is in conflict                             |
| IAmATeapotError          | 418         | i am a teapot         | Custom error denoting that the machine really is actually a teapot 🍵       |
| EnhanceYourCalmError     | 420         | enhance your calm     | Custom error denoting the user must enhance their frickin' calm, maaaan. 🌿 |
| UnprocessableEntityError | 422         | unprocessable entity  | Custom error denoting an unprocessable entity                               |
| InternalServerError      | 500         | internal server error | Custom error denoting an internal server error                              |

## Error Handler Usage:

```javascript
const { errorHandler, notFoundHandler, axiosErrorHandler } = require('@abs-warranty/http-errors/src/middleware')

// Handle invalid endpoints
app.use(notFoundHandler)

// Axios error handler converts axios errors to http errors
app.use(axiosErrorHandler)

// Catch-all error handler must be used as last middleware in application
app.use(errorHandler)
```

> Note: These middleware must be placed after all routes have been added to express application
