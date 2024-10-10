import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> {/* rounded-lg sm:text-start text-center */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <Link to="cinemate" className="hover:underline">Cinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"> {/* justify-center sm:justify-start */}
          <li>
            <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Youtube</a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline">Github</a>
          </li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer
