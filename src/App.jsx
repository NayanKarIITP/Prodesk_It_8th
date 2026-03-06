// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Favorites from "./pages/Favorites";

// function App() {
//   return (
//     <Router>
//       <nav className="bg-black/80 backdrop-blur-md border-b border-white/10 p-4 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-black text-red-600 tracking-tighter">
//             CINE-STREAM
//           </Link>
//           <div className="space-x-6 font-medium">
//             <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
//             <Link to="/favorites" className="hover:text-red-500 transition-colors">Favorites</Link>
//           </div>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/favorites" element={<Favorites />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (

    <FavoritesProvider>
      <Router>
        <div className="min-h-screen bg-black selection:bg-red-500 selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;