import { ApiError, ValidationError } from 'api/errors'

export default async function castError(res: any): Promise<any> {
  const json = await res.json().catch(() => null)
  if (res.ok && json) { return json }

  if (res.status >= 500) {
    throw new ApiError(
      'Что-то пошло не так. Internal Server Error.',
      {},
    )
  }

  switch (res.status) {
    case 422:
      throw new ValidationError(json ? json.message : 'Validation error', json.errors)
    default:
      if (json && json.message) {
        throw new ApiError(json.message, json)
      }
      throw new ApiError('Undefined error', json)
  }
}
