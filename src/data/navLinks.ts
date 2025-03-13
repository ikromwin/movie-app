// import { ReactNode } from 'react';
import { ElementType } from "react";
import { Film, Bookmark } from 'lucide-react';
import HomePage from "../pages/home/Home";
import WatchlistPage from "../pages/watchlist/Watchlist";

interface NavLink {
    id: number;
    title: string;
    path: string;
    icon: ElementType;
    element: ElementType;
}


export const navLinks: NavLink[] = [
    { id: 1, title: "Movies", path: "/", icon: Film, element: HomePage },
    { id: 2, title: "Watchlists", path: "/watchlist", icon: Bookmark, element: WatchlistPage }
];