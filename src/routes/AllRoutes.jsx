import { Route, Routes } from "react-router-dom";
import { MovieDetail, PageNotFound, Search } from "../pages";
import { MovieList } from "../components";


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}></Route>
            <Route path="/movie/:id" element={<MovieDetail apiPath=""/>}></Route>
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular"/>}></Route>
            <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated"/>}></Route>
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}></Route>
            <Route path="search" element={<Search apiPath="search/movie"/>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
