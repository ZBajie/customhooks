import { useState } from "react"
import { useCounter } from "../../hooks/customHooks"

const Counter = () => {
  const [number, setNumber] = useState(0)

  const [maxValue, setMaxValue] = useState<number | undefined>(undefined)
  const [minValue, setMinValue] = useState<number | undefined>(undefined)

  const [initialValue, setInitialValue] = useState(0)
  const { count, increment, decrement, reset, even } = useCounter(
    initialValue,
    maxValue,
    minValue
  )

  return (
    <section className="counter">
      <div className="local">
        <h2>Local </h2>

        <p>{number}</p>

        <button
          onClick={() => {
            setNumber(number + 1)
          }}
        >
          add 1
        </button>
      </div>
      <div className="use-custom-hook">
        <h2>custom hook</h2>
        <p>{count}</p>
        {even ? <p>number is odd</p> : <p>number is even</p>}
        <button
          onClick={() => {
            increment()
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            decrement()
          }}
        >
          Decrement
        </button>
        <div>
          <label htmlFor="initValue">Initial value</label>
          <input
            id="initValue"
            type="number"
            onChange={(e) => {
              setInitialValue(parseInt(e.target.value))
            }}
          />

          <label htmlFor="maxvalue">Max value</label>
          <input
            type="number"
            name=""
            id="maxvalue"
            onChange={(e) => setMaxValue(parseInt(e.target.value))}
          />
          <label htmlFor="minvalue">Min value</label>
          <input
            type="number"
            name=""
            id="minvalue"
            onChange={(e) => {
              setMinValue(parseInt(e.target.value))
            }}
          />
          <button
            onClick={() => {
              reset()
            }}
          >
            Set
          </button>
        </div>
      </div>
    </section>
  )
}

export default Counter
