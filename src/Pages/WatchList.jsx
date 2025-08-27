import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WatchList() {
    const [searchQuery, setSearchQuery] = useState("");
    const { watchlist, clearWatchlist } = useMovieContext();
    const navigate = useNavigate();

    

    const handleSearch = (e) =>{
           
      e.preventDefault();
      if (!searchQuery.trim()) return;
      navigate(`/search/${searchQuery}`);
      setSearchQuery('');
    };

    if (watchlist.length > 0) {
        return (
        <div className="bg-black h-full flex flex-col flex-1 p-4 box-border w-full">
            <form onSubmit={handleSearch} className="flex items-center justify-center mb-4 pt-4">
        <input type="text"
          placeholder='Search for movie...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
        <button type='submit' className="bg-red-700 text-white rounded hover:bg-red-600 transition-colors duration-200 m-2 px-1" >
        Search
        </button>
      </form>
            <h1 className="text-3xl font-bold text-white text-center mb-2 ">Next To Watch...</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 pt-6'>
             {watchlist.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        <button onClick={clearWatchlist} className=" bg-red-700 text-white rounded hover:bg-red-600 transition-colors duration-200 mx-auto px-1">
            Clear Watchlist
        </button>
        </div>
    );
    }

    return (
        <div className="bg-black h-full flex flex-col flex-1 p-4 box-border w-full">
            <form onSubmit={handleSearch} className="flex items-center justify-center mb-4 pt-4">
                <input type="text"
                    placeholder='Search for movie...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className="bg-red-700 text-white rounded hover:bg-red-600 transition-colors duration-200 m-2 px-1" >
                    Search
                </button>
            </form> 
            <h1 className="text-3xl font-bold text-white text-center mb-2">Your watchlist is empty.</h1>
        </div>
    );
}
export default WatchList;