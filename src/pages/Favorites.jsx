import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-black px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-4xl font-black text-white italic">MY LIST</h1>
          <div className="h-1 flex-1 bg-gradient-to-r from-red-600 to-transparent rounded-full opacity-50"></div>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="text-6xl mb-6 opacity-20">🎬</div>
            <h2 className="text-2xl font-bold text-gray-400 mb-2">Your library is empty</h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Start adding movies to your favorites to see them here.
            </p>
            <Link 
              to="/" 
              className="bg-white text-black px-8 py-3 rounded-full font-black hover:bg-red-600 hover:text-white transition-all"
            >
              EXPLORE MOVIES
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;