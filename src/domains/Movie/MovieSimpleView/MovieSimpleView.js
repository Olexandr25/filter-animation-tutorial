import { motion } from "framer-motion"

const MovieSimpleView = props => {
  const { movie } = props

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout>
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="movie img"
      />
    </motion.div>
  )
}

export default MovieSimpleView
