
const MovieInfo = ({label, children}) => {
  return (
    <p className="my-4">
        <span className="mr-2 font-bold">{label}</span>
        <span>{children}</span>
    </p>
  )
}

export default MovieInfo
