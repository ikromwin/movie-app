import MovieList from '../../components/MovieList';
import { useState } from 'react';
import { useTrendingMovies } from '../../hooks/useMovies';

import SearchMoviesList from "../../components/SearchMovies";
import MovieListSkeleton from '../../components/loading/MovieListSkeleton';


function HomePage() {
    return (
        <div className='pb-8'>
            <SearchMoviesList />
            <MovieLists />
        </div>
    );
}



export const MovieLists = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useTrendingMovies(page);

    if (isLoading) return (
        <div>
            <div className='p-8 flex items-center justify-between'>
                <div className="h-8 w-full bg-[#414141] rounded-lg max-w-[200px]"></div>
            </div>
            <div className='px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
                <MovieListSkeleton />
            </div>
        </div>
    );
    if (error) return <p className='text-white text-center mt-12'>Error: {error.message}</p>;
    if (data.length === 0) return <p className='text-white text-center mt-12'>No trending movies found.</p>;


    return (
        <div>
            <div className='p-8 flex items-center justify-between'>
                <h1 className='text-white text-2xl font-extrabold'>🎬 Trending Movies</h1>
                <div>
                    {page === 1 ? null : <button className='bg-white p-2 px-6 rounded-full  text-sm ' onClick={() => setPage(page - 1)}>Prev movies (20)</button>}
                    <button className='ml-4 bg-white p-2 px-6 rounded-full text-sm ' onClick={() => setPage(page + 1)}>Next movies (20)</button>
                </div>
            </div>

            <div className='px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {data.results.map((movie: { id: number; title: string; poster_path: string; popularity: number; }) => (
                    <MovieList key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default HomePage;