import { useState } from "react"

export function useCounter(
  initialValue = 0,
  maxValue: number | undefined,
  minValue: number | undefined
) {
  const [count, setCount] = useState<number>(initialValue)
  const [even, setEven] = useState<boolean>()

  const increment = (): void => {
    if (maxValue) {
      if (count < maxValue) {
        setCount(count + 1)
      }
    } else {
      setCount(count + 1)
    }
    if (count % 2 === 0) {
      setEven(true)
    } else setEven(false)
  }

  const decrement = (): void => {
    if (minValue) {
      if (count > minValue) {
        setCount(count - 1)
      }
    } else {
      setCount(count - 1)
    }
    if (count % 2 === 0) {
      setEven(true)
    } else setEven(false)
  }
  const reset = (): void => setCount(initialValue)

  return { count, increment, decrement, reset, even }
}
