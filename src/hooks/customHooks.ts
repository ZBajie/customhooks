import { useEffect, useState } from "react"

export function useCounter(
  initialValue = 0,
  maxValue: number | undefined,
  minValue: number | undefined,
  incrementValue: number = 1
) {
  const [count, setCount] = useState<number>(initialValue)
  const [even, setEven] = useState<boolean>()

  useEffect(() => {
    setEven(count % 2 === 0)
  }, [count])

  const increment = (): void => {
    if (maxValue) {
      if (count + incrementValue <= maxValue) {
        setCount(count + incrementValue)
      }
    } else {
      setCount(count + incrementValue)
    }
  }

  const decrement = (): void => {
    if (minValue) {
      if (count - incrementValue >= minValue) {
        setCount(count - incrementValue)
      }
    } else {
      setCount(count - incrementValue)
    }
  }
  const reset = (): void => setCount(initialValue)

  return { count, increment, decrement, reset, even }
}

export function useToggle() {
  const [toggleValue, setToggleValue] = useState<boolean>(true)

  const toggle = () => setToggleValue(!toggleValue)

  return { toggleValue, toggle }
}

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null | string | unknown>(null)

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await fetch(url)
        const resultData = (await result.json()) as T
        if (isMounted) {
          setData(resultData)
        }
      } catch (err) {
        if (isMounted) {
          setError(err)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }
    fetchData()
    return () => {
      isMounted = false
    }
  }, [url])

  return { data, loading, error }
}
