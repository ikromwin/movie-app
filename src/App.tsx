import { navLinks } from './data/navLinks';
import { NavLink, Route, Routes } from "react-router";

import HomePage from './pages/home/Home';
import WatchlistPage from './pages/watchlist/Watchlist';
import MovieDetails from './pages/movie-details/MovieDetails';


function App() {

  return (


    <main className='flex'>

      <div className="sticky top-0 h-screen left-0 bg-[#2a2b30] shadow-lg z-20 transition-all shadow-lg">
        <nav className='grid'>
          <a href='#' className='text-center mt-8 text-3mx text-white'>GM</a>
          <div className='space-y-12 w-full mt-20'>
            {
              navLinks.map(({ id, path, icon: Icon }) =>
                <NavLink key={id} to={path} className='p-8 flex items-center justify-center py-8 text-white hover:bg-[#333] border-l-4'>
                  <Icon />
                </NavLink >
              )
            }
          </div>
        </nav>
      </div>


      <section className="w-full">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>

      </section>
    </main>
  )
}

export default App



