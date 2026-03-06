import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { searchMovies, getPopularMovies } from "../services/tmdb";

const SearchBar = ({ setMovies, setLoading }) => {
  const [query, setQuery] = useState("");
  const debouncedSearch = useDebounce(query, 500); // 500ms delay

  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      try {
        if (debouncedSearch) {
          const results = await searchMovies(debouncedSearch);
          setMovies(results);
        } else {
          // If search is cleared, show popular movies again
          const popular = await getPopularMovies();
          setMovies(popular);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [debouncedSearch, setMovies, setLoading]);

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <input
        type="text"
        className="w-full p-4 pl-12 bg-gray-900 border border-gray-700 rounded-full text-white focus:ring-2 focus:ring-red-600 outline-none transition-all"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="absolute left-4 top-4 text-gray-500 text-xl">🔍</span>
    </div>
  );
};

export default SearchBar;