import {useEffect, useState} from 'react';
import { getPopularMovies } from '../Services/Api';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    

    useEffect(() => {
      const loadPopularmovies = async () => {
        try{
          const popularMovies= await getPopularMovies();
          setMovies(popularMovies)
        } 
        catch (err) {
          console.log(err);
          setError("Failed to load movies....");
        }
        finally {
          setLoading(false);
        }
      }

      loadPopularmovies();
    },[]);

    const handleSearch = (e) =>{
           
      e.preventDefault();
      if (!searchQuery.trim()) return;
      navigate(`/search/${searchQuery}`);
      setSearchQuery('');
    };

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
        <h1 className="text-3xl font-bold text-white text-center mb-2">Trending Movies</h1>
            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>    
      </div>
  );
}

export default Home;