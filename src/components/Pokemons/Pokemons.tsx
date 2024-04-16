import { useState } from "react"
import { useFetch } from "../../hooks/customHooks"

type Root = {
  count: number
  next: string
  previous: string
  results: Result[]
}

type Result = {
  name: string
  url: string
}

const Pokemons = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const { data, loading, error } = useFetch<Root>(url)

  console.log(data)
  return (
    <section className="pokemons">
      <h2>Pokemons</h2>
      <p>{loading ? "loading" : "loaded"}</p>
      {data?.results && <p>{data.results[1].name}</p>}{" "}
    </section>
  )
}

export default Pokemons
