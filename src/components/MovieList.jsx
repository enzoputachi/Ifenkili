import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useEffect } from "react";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath)

  useEffect(() => {
    document.title = `${title} / Ifenkili`
  }, [title])

  return (
    <main>
      <section className="py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly"> {/*  md:justify-center lg:justify-start sm:justify-center lg:ml-4*/}
          { movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
