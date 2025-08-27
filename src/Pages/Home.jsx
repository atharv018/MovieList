import { useState, useContext} from 'react';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from "../context/MovieContext";

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const { movies=[], loading, error } = useMovieContext();
    
    const navigate = useNavigate();

    const handleSearch = (e) => {

        e.preventDefault();
      if (!searchQuery.trim()) return;
      navigate(`/search/${searchQuery}`);
      setSearchQuery('');
    };

  return (
    <div className="bg-black min-h-screen flex flex-col p-4 w-full">
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
        <h1 className="text-3xl font-bold text-white text-center mb-2">Trending Movies</h1>
            {loading && <p>Loading...</p>}
            {!loading && movies.length === 0 && <p className="text-white">No movies found.</p>}
            {error && <p className='text-red-500'>{error}</p>}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 pt-6'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>    
      </div>
  );
}

export default Home;