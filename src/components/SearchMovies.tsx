import { useState } from "react";
import { Search, Mic } from 'lucide-react';
import { searchMovies } from "../api/movieAPI";
import { NavLink } from "react-router-dom";


const SearchMoviesList = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<{ id: number; poster_path: string | null }[]>([]);


    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const results = await searchMovies(query);
        setMovies(results.results);
    };



    return (
        <div className="sticky top-0 z-10 ">
            <header className="pl-8 w-full shadow-lg flex justify-between items-center bg-[#2a2b30]">
                <Search size={20} color='yellow' />
                <form className="w-full flex justify-between items-center" onChange={handleSearch} action="/search">
                    <input value={query} type="search" onChange={(e) => setQuery(e.target.value)} className="w-full p-6 pl-8 bg-transparent font-light text-[yellow] placeholder:text-[yellow] placeholder:opacity-60 text-white opacity-100" placeholder="Search..." />
                    <button className='p-6 bg-[yellow] text-black h-full'>
                        <Mic />
                    </button>
                </form>
            </header>



            {(query && movies.length > 0) &&
                <div className='bg-[#414141] p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4'>
                    {query && movies.map((movie) => (
                        <NavLink to={`/movie/${movie.id}`} className="hover:-translate-y-1 transition-transform">
                            {
                                movie.poster_path ?
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="title" className="object-cover h-full rounded-lg group-hover:scale-[1.02] transition" />
                                    :
                                    <img src={`/no-image.png`} alt="title" className="rounded-lg object-cover h-full" />
                            }
                        </NavLink>
                    ))}
                </div>
            }
        </div>
    );
};

export default SearchMoviesList;
