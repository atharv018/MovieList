import React, { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';

function MovieCard({movie}) {
    const [liked, setLiked] = useState(false);
    const {isAdded, toAddMovie, toRemoveMovie} = useMovieContext();

    const onFavoriteClick= (e) =>{
        e.preventDefault();
        if(isAdded(movie.id))  toRemoveMovie(movie.id)
        else toAddMovie(movie)
    }
    return (
        
        <div className=" relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-200 h-full flex flex-col hover:-translate-t-1  ">
            <div className="relative aspect-[2/3] w-full ">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover text-white" />
                <div className="movie-overlay absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                    <button
  className={`absolute top-4 right-4 text-xl p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 ${
    isAdded(movie.id) ? 'text-blue-500 bg-black/70' : 'text-white bg-black/50'
  }`}
  onClick={onFavoriteClick}
>
  {isAdded(movie.id) ? (
    // Filled save (bookmark) icon
    <svg
      aria-label="Remove from saved"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="text-red-600"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      role="img"
    >
      <title>Remove from saved</title>
      <path d="M6 2a2 2 0 0 0-2 2v18l8-5.333L20 22V4a2 2 0 0 0-2-2H6z"/>
    </svg>
  ) : (
    // Outline save (bookmark) icon
    <svg
      aria-label="Save"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      role="img"
    >
      <title>Save</title>
      <path d="M6 2a2 2 0 0 0-2 2v18l8-5.333L20 22V4a2 2 0 0 0-2-2H6z"/>
    </svg>
  )}
</button>


                </div>
            </div>
            <div className="movie-info p-4 flex-1 flex flex-row justify-between gap-2">
                <h3 className="text-white text-base m-0">{movie.title}</h3>
                <h3 className="text-white text-base m-0">{movie.release_date?.split("-")[0]}</h3>
            </div>
        </div>
        
    )
}

export default MovieCard;