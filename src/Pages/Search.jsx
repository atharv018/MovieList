import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../Services/Api';
import MovieCard from '../components/MovieCard';
import { useEffect } from 'react';

function Search() {
    const {query} = useParams();
    const [movies, setMovies]= useState("");
    const [error, setError]= useState(null);
    const [loading, setLoading]= useState(true);

    useEffect(() => {  
        const loadMovies = async() => {
            setLoading(true);
            try{
                const result= await searchMovies(query);
                setMovies(result);
            } catch (err) {
                console.error(err);
                setError("Cannot fetch search results");
            } finally{
                setLoading(flase);
            }
        };
        loadMovies();
    }, [query])

    return(
        <div>Search Page
            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {movies && movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>    
        </div>
        
    );
}

export default Search;