import { useContext, createContext, useState, useEffect} from "react";
import { getPopularMovies } from '../Services/Api';

// You need to import or define getPopularMovies
// import { getPopularMovies } from "../api/movieApi"; // Uncomment and adjust path as needed

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {

    const [watchlist, setWatchList] = useState(() => {
        const localData = localStorage.getItem("watchlist");
        return localData ? JSON.parse(localData) : [];
    });
    const [movies, setMovies] = useState(() => {
        const localData = localStorage.getItem("movies");
        return localData ? JSON.parse(localData) : [];
    });
    
    const [loading, setLoading] = useState(movies.length === 0);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    // 3️⃣ If movies exist in localStorage, skip API fetch
        if (movies.length > 0) {
          setLoading(false);
          return;
        }


        const fetchMovies = async () => {
          try {
            // Make sure getPopularMovies is imported or defined
            const data = await getPopularMovies();
            setMovies(data || []);

            // 4️⃣ Save movies to localStorage
            localStorage.setItem("movies", JSON.stringify(data || []));
          } catch (err) {
            console.error(err);
            setError(err);
          } finally {
            setLoading(false);
          }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        console.log("Saving to storage:", watchlist);
        localStorage.setItem( "watchlist", JSON.stringify( watchlist ));
    },[watchlist])

    const toAddMovie = (movie) => {
        setWatchList( prev => [...prev,movie])
    }

    const toRemoveMovie = (movieId) => {
        setWatchList( prev => prev.filter( movie => movie.id !== movieId))
    }

    const isAdded = (movieId) => {
        return watchlist.some(movie => movie.id === movieId)
    }

    const clearWatchlist = () => {
        setWatchList([]);
    }
    
    const value={
        watchlist,
        toAddMovie,
        toRemoveMovie,
        clearWatchlist,
        isAdded,
        loading,
        error,
        movies
    }
    
    return(
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
};