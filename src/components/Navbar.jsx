import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Navbar = () => {
  const { favorites } = useFavorites();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-3xl font-black bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-purple-500 transition-all">
            CINE-STREAM
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === '/' ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
          >
            Home
          </Link>
          
          <Link 
            to="/favorites" 
            className="relative group"
          >
            <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === '/favorites' ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}>
              Favorites
            </span>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;