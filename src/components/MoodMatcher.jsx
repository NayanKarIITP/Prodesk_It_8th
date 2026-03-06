import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { searchMovies } from "../services/tmdb";

const MoodMatcher = ({ setMovies }) => {
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize Gemini
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const handleAiSearch = async (e) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Suggest one highly rated movie title that fits this mood: "${mood}". Return ONLY the movie title. No quotes, no extra text.`;

      const result = await model.generateContent(prompt);
      const movieTitle = result.response.text().trim();

      // Use the AI title to get the full movie object from TMDB
      const results = await searchMovies(movieTitle);
      if (results.length > 0) {
        setMovies([results[0]]); // Show the top recommendation
      }
    } catch (error) {
      console.error("AI Matcher Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mb-16 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl shadow-2xl shadow-purple-900/20">
      <div className="bg-gray-900 rounded-[22px] p-6 md:p-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
          💭 AI Mood Matcher
        </h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Tell us how you feel, and our AI will find the perfect cinematic escape.
        </p>

        <form onSubmit={handleAiSearch} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            placeholder="e.g., 'I want a mind-bending thriller that feels like a dream'"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-purple-500 hover:text-white transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Find Movie"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MoodMatcher;