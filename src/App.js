import "./App.css"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { Filter } from "./components"
import { MovieSimpleView } from "./domains"

function App() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4972d99e169ba578eb098da6f9a15d72"
    )
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  return (
    <>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered?.map(movie => (
            <MovieSimpleView key={`movie - ${movie.id}`} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default App
