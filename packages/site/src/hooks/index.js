import { useEffect, useRef, useState } from 'react'

import errorHandler from 'site/services/error-handler'
import { useGlobalState } from 'site/state'

// https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
export const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

// https://medium.com/better-programming/react-state-management-in-2020-719d10c816bf
export const useRequest = (api, options = { blocking: false }) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)

  const [errors, setErrors] = useGlobalState('errors')

  const request = async (params) => {
    if (options.blocking && isLoading) return null
    setLoading(true)
    setError(false)
    try {
      const resp = await api(params)
      if (resp.ok) {
        setResponse(resp)
        return resp
      }
      throw errorHandler(resp)
    } catch (err) {
      setError(err)
      setErrors([
        ...errors,
        err,
      ])
    } finally {
      setLoading(false)
    }
    return null
  }

  return { isLoading, error, response, request }
}
