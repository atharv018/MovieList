import React, { useState } from 'react';

function MovieCard({movie}) {
    const [liked, setLiked] = useState(false);

    const onFavoriteClick= () =>{
        setLiked(!liked);
    }
    return (
        
        <div className=" relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-200 h-full flex flex-col hover:-translate-t-1  ">
            <div class="relative aspect-[2/3] w-full ">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover text-white" />
                <div class="movie-overlay absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                    <button
  className={`absolute top-4 right-4 text-xl p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 ${
    liked ? 'text-red-500 bg-black/70' : 'text-white bg-black/50'
  }`}
  onClick={onFavoriteClick}
>
  {liked ? '♥' : '♡'}
</button>


                </div>
            </div>
            <div class="movie-info p-4 flex-1 flex flex-col gap-2">
                <h3 class="text-white text-base m-0">{movie.title}</h3>
                <h3 class="text-white text-base m-0">{movie.release_date?.split("-")[0]}</h3>
            </div>
        </div>
        
    )
}

export default MovieCard;