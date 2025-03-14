import { NavLink, useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovies";
import { Undo2, Star } from "lucide-react";

interface Genre {
    id: number;
    name: string;
}

const MovieDetails = () => {
    const { id } = useParams();
    const { data: movie, isLoading, error } = useMovieDetails(Number(id));
    console.log(movie);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading movie details.</p>;

    return (
        <div className="w-full">

            <div className="relative z-10 p-8 text-white">
                <NavLink to="/" className="flex item-center gap-2 text-sm opacity-50"><Undo2 size={18} /> Go back</NavLink>

                <div className="flex mt-20 gap-8">
                    <div className="grid">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.original_title}
                            width={200}
                            className="border border-4"
                        />
                        <div className="py-4 flex items-center gap-2 font-light text-sm"><h2 className="text-lg font-medium">{movie.vote_count}</h2>/<p className="font-light">{movie.vote_average}</p> voted</div>
                        <div className="h-0.5 w-full bg-[#ffc800]"></div>
                    </div>

                    <ul>
                        <li><h1 className="text-3xl font-medium font-bold text-white">{movie.title}</h1></li>
                        <li className="mt-6 flex gap-4 items-center">
                            
                            <span className="p-1.5 px-2.5 border border-1 border-white rounded text-sm">HD</span>
                            <div className="flex items-center gap-1 text-[#ffc800] text-sm font-medium"><Star size={15} color="#ffc800" fill="#ffc800" /> {movie.popularity}</div>
                        </li>
                        <li><summary className="mt-6 font-light text-sm max-w-[800px]">{movie.overview}</summary></li>
                        <li className="mt-6 grid gap-1">
                            <div className="flex items-center gap-1 text-white text-sm font-light"><b>Realized:</b> {(movie.release_date)}</div>
                            <div className="flex items-center gap-1 text-white text-sm font-light"><b>Genre:</b>
                                {movie.genres.map((g: Genre, index: number) => (
                                    <span className="font-light" key={g.id}>
                                        {g.name}
                                        {index < movie.genres.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay">
            </div>

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
        </div>
    );
};

export default MovieDetails;
