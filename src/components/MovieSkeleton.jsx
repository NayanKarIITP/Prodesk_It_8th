import React from "react";

const MovieSkeleton = () => {
  return (
    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl animate-pulse">
      {/* Poster Placeholder */}
      <div className="aspect-[2/3] w-full bg-gray-800">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
      </div>

      {/* Info Placeholder */}
      <div className="p-4 space-y-3">
        {/* Rating and Title lines */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-8 bg-gray-800 rounded"></div>
          <div className="h-4 w-12 bg-gray-800 rounded"></div>
        </div>
        <div className="h-5 w-3/4 bg-gray-800 rounded"></div>
        <div className="h-3 w-1/4 bg-gray-800 rounded"></div>
      </div>

      {/* Floating Button Placeholder */}
      <div className="absolute top-3 right-3 p-4 bg-gray-800 rounded-full"></div>
    </div>
  );
};

export default MovieSkeleton;