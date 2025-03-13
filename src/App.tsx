import { Search, Mic } from 'lucide-react';
import { navLinks } from './data/navLinks';

import HomePage from './pages/home/Home';

function App() {

  return (


    <main className='flex'>

      <div className="sticky top-0 h-screen left-0 bg-[#2a2b30] shadow-lg z-20 transition-all shadow-lg">
        <nav className='grid'>
          <a href='#' className='text-center mt-8 text-3mx text-white'>GM</a>
          <ul className='space-y-12 w-full mt-20'>
            {
              navLinks.map(({ id, path, icon: Icon }) => (
                <li key={id}>
                  <a href={path} className='p-8 flex items-center justify-center py-8 text-white hover:bg-[#333] border-l-4 border-[yellow]'>
                    <Icon />
                    {/* <span className='ml-4'>{title}</span> */}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>




      <section className="w-full">
        <header className="sticky top-0 w-full shadow-lg z-10 flex justify-between items-center bg-[#2a2b30]">
          <div className="pl-8 w-full flex items-center">
            <Search size={20} color='yellow' />
            <input type="search" className="w-full p-6 pl-8 bg-transparent font-light text-[yellow] placeholder:text-[yellow] placeholder:opacity-60 text-white opacity-100" placeholder="Search..." />
          </div>

          <button className='p-6 bg-[yellow] text-black h-full'>
            <Mic />
          </button>
        </header>

        <HomePage />
      </section>
    </main>
  )
}

export default App
