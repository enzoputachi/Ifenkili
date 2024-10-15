import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

export const MovieList = (apiPath) => {
  const { data: movies } = useFetch(apiPath)

  return (
    <main>
      <section className="py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly"> {/*  md:justify-center lg:justify-start sm:justify-center lg:ml-4*/}
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};