import axiosInstance from "./axiosInstance";

// Fetch Trending Movies
export const getTrendingMovies = async (page = 1) => {
    const response = await axiosInstance.get(`/trending/movie/week`, {
        params: { page },
    });
    return response.data;
}

// Fetch Movie Details
export const getMovieDetails = async (movieId: number) => {
    const response = await axiosInstance.get(`movie/${movieId}`);
    return response.data;
};