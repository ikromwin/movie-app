import { useState, useEffect } from "react";
import { getWatchlist, removeFromWatchlist } from "../../data/watchLists";
import MovieList from "../../components/MovieList";


function WatchlistPage() {
    interface Movie {
        id: number;
        title: string;
        poster_path: string;
        popularity: number;
    }

    const [watchlist, setWatchlist] = useState<Movie[]>([]);

    useEffect(() => {
        setWatchlist(getWatchlist());
    }, []);

    const handleRemove = (id: number) => {
        removeFromWatchlist(id);
        setWatchlist(getWatchlist()); // Update state
    };
    return (
        <div className="p-8">
            <h1 className="text-white text-2xl font-extrabold mb-12">🔖 Watchlist</h1>

            {watchlist.length === 0 ? (
                <p className="text-center text-white">No movies in your watchlist</p>
            ) : (
                <div className='px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                    {
                        watchlist.map((movie: { id: number; title: string; poster_path: string; popularity: number; }) => (
                            <div className="grid">
                                <MovieList key={movie.id} movie={movie} />
                                <button className="bg-[#D84040] p-1 rounded" onClick={() => handleRemove(movie.id)}>Remove</button>
                            </div>
                        ))
                    }
                </div>
            )}


        </div>
    );
}

export default WatchlistPage;