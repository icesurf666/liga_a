export default class ApiError extends Error {
  public code: number

  public errors: IApiErrors

  public response: any

  constructor(message: any, response: any) {
    super(message)
    if (Error.captureStackTrace) { Error.captureStackTrace(this, ApiError) }
    this.name = 'ApiError'
    this.message = message
    this.errors = response.errors
    this.code = response.code
    this.response = response
  }
}
