import { Bookmark, Star } from "lucide-react";

type MovieListProps = {
    movie: {
        id: number;
        title: string;
        poster_path: string;
        popularity: number;
    }
}

function MovieList({ movie }: MovieListProps) {
    return (
        <div className="relative grid bg-[#2a2b30] group">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="title" className="rounded-lg group-hover:scale-[1.02] transition" />

            <h2 className="text-white font-light mt-2 text-md">{movie.title}</h2>

            <div className="absolute bg-black rounded px-1 backdrop-blur-lg z-1 top-2 right-2 flex items-center gap-1 text-white text-sm font-light"><Star size={15} color="#ffc800" fill="#ffc800" /> {movie.popularity}</div>

            <button className="group-hover:opacity-100 opacity-0 absolute flex items-center hover:bg-[yellow] gap-1 bg-white top-2 left-2 pr-1 rounded text-sm font-light transition-all"><Bookmark size={18} /> Watchlist</button>
        </div>
    );
}


export default MovieList;