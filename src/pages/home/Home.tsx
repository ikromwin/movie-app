import MovieList from '../../components/MovieList';
import { useState } from 'react';
import { useTrendingMovies } from '../../hooks/useMovies';
import { Loader } from 'lucide-react';

function HomePage() {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useTrendingMovies(page);

    if (isLoading) return <p className='text-white text-center mt-12'><Loader />Loading...</p>;
    if (error) return <p className='text-white text-center mt-12'>Error: {error.message}</p>;
    if (data.length === 0) return <p className='text-white text-center mt-12'>No trending movies found.</p>;

    console.log(data);
    

    return (
        <div className='p-8'>
            <div className='flex items-center justify-between'>
                <h1 className='text-white text-2xl font-extrabold'>🎬 Trending Movies</h1>
                <div>
                    {page === 1 ? null : <button className='bg-white p-2 px-6 rounded-full  text-sm ' onClick={() => setPage(page - 1)}>Prev page</button>}
                    <button className='ml-4 bg-white p-2 px-6 rounded-full text-sm ' onClick={() => setPage(page + 1)}>Next page</button>
                </div>
            </div>

            <div className='mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {data.results.map((movie: { id: number; title: string; poster_path: string; popularity: number; }) => (
                    <MovieList key={movie.id} movie={movie} />
                ))}
            </div>


        </div>
    );
}

export default HomePage;