import { useCallback, useState } from 'react'
import handleError from 'utils/handleError'

type ApiFunction<T> = (params: any) => Promise<T>

interface IUserApi<T> {
  data: T | null;
  loading: boolean;
  loaded: boolean;
  error: Error | null;
  fetch: (params?: any) => any;
  setData: (data: T) => void;
}

interface IUseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onFailure?: (error: Error) => void;
}

function useApi<T>(
  api: ApiFunction<T>,
  { onSuccess, onFailure }: IUseApiOptions<T> = {},
): IUserApi<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetch = useCallback(async (params: Parameters<typeof api>) => {
    setLoading(true)
    try {
      const payload = await api(params)
      setLoading(false)
      setLoaded(true)
      setData(payload)
      if (onSuccess) onSuccess(payload)
    } catch (exception) {
      setLoading(false)
      setError(exception)
      if (onFailure) onFailure(exception)
      console.error(exception)
      return handleError(exception)
    }
    return undefined
  }, [api, setData, setLoading, onSuccess, onFailure])

  return { data, loading, error, loaded, fetch, setData }
}

export default useApi
