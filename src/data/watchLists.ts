// watchLists.ts
export const getWatchlist = () => {
    return JSON.parse(localStorage.getItem("watchlist") || "[]");
};

export const addToWatchlist = (movie: { id: number; title: string; poster_path: string; popularity: number }) => {
    const watchlist = getWatchlist();
    if (!watchlist.some((m: { id: number; title: string; poster_path: string; popularity: number }) => m.id === movie.id)) {
        watchlist.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
};

export const removeFromWatchlist = (id: number) => {
    const watchlist = getWatchlist().filter((movie: { id: number; title: string; poster_path: string; popularity: number }) => movie.id !== id);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
};
