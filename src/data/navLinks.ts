// import { ReactNode } from 'react';
import { ElementType } from "react";
import { Film } from 'lucide-react';
import HomePage from "../pages/home/Home";

interface NavLink {
    id: number;
    title: string;
    path: string;
    icon: ElementType;
    element: ElementType;
}


export const navLinks: NavLink[] = [
    { id: 1, title: "Movies", path: "/", icon: Film, element: HomePage },
];