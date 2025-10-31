import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { HamburgerIcon, MoonIcon, SearchIcon, SmallSearchIcon, SunIcon2 } from "./Svg";
import AiLogo from '../assets/AiLogo.jpg'


const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkmode] = useState( JSON.parse(localStorage.getItem("darkMode")) || true)

  const activeClass = "text-base block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
  const inActiveClass ="text-base block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

  const [hidden, setHidden]= useState(true);

  useEffect(()=> {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if(darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryTerm = e.target.search.value;
    e.target.reset();

    return navigate(`/search?q=${queryTerm}`);
  }
  
  return (
    <header>
      <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={AiLogo} className="h-8" alt="Ifenkili Logo" />
            <link rel="icon" type="image/svg+xml" href="/src/assets/AiLogo.png" />

            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white font-tangerine">Ifenkili</span>
          </Link>

          <div id="mobile-nav" className="flex md:order-2">
            {/* Mobile screen */}
            <button
              onClick={() => setDarkmode(!darkMode)} 
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" 
              type="button"
              data-toggle-dark="light"
              className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                { darkMode ? <SunIcon2 /> : <MoonIcon />}
            </button>

            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <SearchIcon />
              <span className="sr-only">Search</span>
            </button>

            {/* Desktop screen */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SmallSearchIcon />
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </form>
            </div>

            {/* Mobile Hambugger */}
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerIcon />
            </button>
          </div>


          {/* Mobile Search */}
          <div
            className={`${hidden ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="nav-links"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
              </div>
              <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  name="search"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </form>
            </div>

            {/* NavLinks */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass} >Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({isActive}) => isActive ? activeClass : inActiveClass}>Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({isActive}) => isActive ? activeClass : inActiveClass}>Top Rated</NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({isActive}) => isActive ? activeClass : inActiveClass}>Upcoming</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header
