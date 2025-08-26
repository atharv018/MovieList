import React, {useEffect, useState} from 'react';
import { getPopularMovies, searchMovies } from '../Services/Api';
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
    },[])

    const handleSearch = async (e) =>{
      e.preventDefault();
      if (!searchQuery.trim()) return;

      e.preventDefault();
      if (!searchQuery.trim()) return;
      navigate(`/search/${searchQuery}`);

      // if (loading) return;

      // setLoading(true);

      // try{
      //   const searchResult= await searchMovies(searchQuery);
      //   setMovies(searchResult);
      //   setError(null)
      //   navigate(`/search/${searchQuery}`);
      //   setSearchQuery('');

      // }
      // catch (err) {
      //     console.log(err);
      //     setError("Can not find movie");
      // }
      // finally{
      //   setLoading(false);
      // }
    };

  return (
    <div className="bg-black h-full flex flex-col flex-1 p-8 box-border w-full">
      <form onSubmit={handleSearch} className="flex items-center justify-center mb-4">
        <input type="text"
          placeholder='Search for movie...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
        <button type='submit' className="bg-red-700 text-white rounded hover:bg-red-600 transition-colors duration-200 m-2 px-1">
        Search
        </button>
      </form>
      <div>Search Page
            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {movies && movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>    
        </div>
        
    </div>
  );
}

export default Home;