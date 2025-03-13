import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies, getMovieDetails } from "../api/movieAPI";


export const useTrendingMovies = (page: number) => {
    return useQuery({
        queryKey: ["trendingMovies", page],
        queryFn: () => getTrendingMovies(page),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

export const useMovieDetails = (movieId: number) => {
    return useQuery({
        queryKey: ["movieDetails", movieId],
        queryFn: () => getMovieDetails(movieId)
    });
}