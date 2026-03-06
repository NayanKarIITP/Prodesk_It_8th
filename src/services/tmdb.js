const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  if (!response.ok) throw new Error("Failed to fetch popular movies");
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  if (!query.trim()) return [];
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  if (!response.ok) throw new Error("Search failed");
  const data = await response.json();
  return data.results;
};