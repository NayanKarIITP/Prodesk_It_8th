import React from "react";
import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    favorite ? removeFavorite(movie.id) : addFavorite(movie);
  };

  return (
    <div className="group relative bg-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-purple-500 transition-all duration-300 shadow-xl">
      {/* Image with Aspect Ratio */}
      <div className="aspect-[2/3] w-full overflow-hidden">
        <img
          loading="lazy"
          src={
            movie.poster_path 
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
              : "https://via.placeholder.com/500x750?text=No+Poster"
          }
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Favorite Button */}
      <button
        onClick={onFavoriteClick}
        className="absolute top-3 right-3 z-10 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-white transition-all group/btn"
      >
        <span className={`text-xl ${favorite ? "scale-110" : "grayscale group-hover/btn:grayscale-0"}`}>
          {favorite ? "❤️" : "🤍"}
        </span>
      </button>

      {/* Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-yellow-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded">IMDb</span>
          <span className="text-yellow-400 font-bold text-xs">{movie.vote_average.toFixed(1)}</span>
        </div>
        <h3 className="text-white font-bold text-sm line-clamp-2 leading-tight">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-[10px] mt-1">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;