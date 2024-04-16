import { useToggle } from "../../hooks/customHooks"

const Toggle = () => {
  const { toggleValue, toggle } = useToggle()
  return (
    <section className="toggle">
      <h2>Toggle</h2>
      <p>{toggleValue ? "true" : "false"}</p>
      <button
        onClick={() => {
          toggle()
        }}
      >
        Toggle
      </button>
    </section>
  )
}

export default Toggle
