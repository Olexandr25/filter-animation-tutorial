import { useEffect } from "react"

const Filter = props => {
  const { popular, setFiltered, activeGenre, setActiveGenre } = props

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter(movie =>
      movie.genre_ids.includes(activeGenre)
    )
    setFiltered(filtered)
  }, [activeGenre, popular, setActiveGenre, setFiltered])

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}>
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}>
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}>
        Action
      </button>
      <button
        className={activeGenre === 16 ? "active" : ""}
        onClick={() => setActiveGenre(16)}>
        Animation
      </button>
    </div>
  )
}

export default Filter
