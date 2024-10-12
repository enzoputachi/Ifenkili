import { useEffect, useState } from "react"

export const useFetch = ({ apiPath }, queryTerm="") => {
    // console.log(apiPath);
    
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${queryTerm}`
    console.log(url);
    

    useEffect(() => {
        const fetchMovies = async () => {
          const response = await fetch(url)
          const json = await response.json()
          setData(json.results);
        }
    
        fetchMovies()
    }, [url])


  return { data }
}
