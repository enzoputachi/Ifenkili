import { Link } from "react-router-dom"

const Card = ({movie}) => {
  const {id, original_title, overview, poster_path} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : null;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        {image ? (
          <img className="rounded-t-lg" src={image} alt="" />
        ) : (
          <div className="h-64 flex items-center justify-center bg-gray-300 rounded-t-lg text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            No image available
          </div>
        )}
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default Card
