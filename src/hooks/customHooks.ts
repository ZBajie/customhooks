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
