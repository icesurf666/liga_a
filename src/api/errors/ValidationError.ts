export class ValidationError extends Error implements IValidationError {
  constructor(message: string, public errors: IApiErrors, name = 'ValidationError') {
    super(message)
    if (Error.captureStackTrace) { Error.captureStackTrace(this, ValidationError) }
    this.name = name
    this.message = message
    this.errors = errors
  }
}

export default ValidationError
