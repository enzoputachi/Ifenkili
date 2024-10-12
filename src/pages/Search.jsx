import { useSearchParams } from "react-router-dom"
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"


const Search = (apiPath) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');

  const { data: movies } = useFetch(apiPath, queryTerm)

  return (
    <main>
      <section>
        <p className="text-2xl text-gray-700 dark:text-white">
          { movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="py-7">
        <div className="flex justify-start md:justify-center lg:justify-start sm:justify-center lg:ml-4 flex-wrap">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search
