import { Link } from "react-router-dom"
import { Button } from "../components"
import useTitle from "../hooks/useTitle"

export const PageNotFound = () => {
  useTitle(`Page not found`)

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

