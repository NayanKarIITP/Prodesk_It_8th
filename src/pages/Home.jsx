import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../components/SearchBar";
import MoodMatcher from "../components/MoodMatcher";
import MovieCard from "../components/MovieCard";
import MovieSkeleton from "../components/MovieSkeleton";
import { getPopularMovies } from "../services/tmdb";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  // Initial load
useEffect(() => {
  const fetchInitialMovies = async () => {
    setLoading(true);
    try {
      const data = await getPopularMovies(1);
      setMovies(data);
    } catch (error) {
      console.error("Error loading movies:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchInitialMovies();
}, []);

  // Infinite Scroll Logic
  useInfiniteScroll(async () => {
    if (loading) return;
    const nextPage = page + 1;
    const newMovies = await getPopularMovies(nextPage);
    setMovies((prev) => [...prev, ...newMovies]);
    setPage(nextPage);
  }, loaderRef);

  return (
    <div className="min-h-screen bg-black px-4 py-10">
      <SearchBar setMovies={setMovies} setLoading={setLoading} />
      <MoodMatcher setMovies={setMovies} />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {loading 
          ? Array(10).fill(0).map((_, i) => <MovieSkeleton key={i} />)
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>

      {/* Invisible element that triggers loading more when it hits the screen */}
      <div ref={loaderRef} className="h-20 flex items-center justify-center">
        {movies.length > 0 && <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>}
      </div>
    </div>
  );
};

export default Home;