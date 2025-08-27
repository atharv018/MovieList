import { useContext, createContext, useState, useEffect} from "react";

const MovieContext= createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider= ({children}) => {

    const [watchlist, setWatchList] = useState(() => {
        const localData = localStorage.getItem("watchlist");
        return localData ? JSON.parse(localData) : [];
    });

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
        isAdded
    }
    
    return(
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
};