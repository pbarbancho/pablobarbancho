// components/Navbar.js
"use client";
import Link from 'next/link';

import useScrollPosition from '../utils/useScrollPosition';

export const Navbar = () => {
    
    // Obtener la posición de scroll
    const scrollPosition = useScrollPosition();

    return (
        <div className={scrollPosition > 50 ? "fixed top-0 left-0 w-full backdrop-blur-lg bg-background/75 shadow-lg z-50" : "fixed top-0 left-0 w-full bg-transparent z-50"}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="block w-full">
                    <div className={"mx-auto flex items-center justify-between text-foreground" + (scrollPosition > 50 ? " py-2 space-x-2 w-[450px] text-[14px]" : " py-4 space-x-4 w-[600px] text-[18px]")}>
                        <Link href="/">
                            <p className="px-3 py-2 rounded-md hover:text-gray-400">Home</p>
                        </Link>
                        <Link href="#skills">
                            <p className="px-3 py-2 rounded-md hover:text-gray-400">Skills</p>
                        </Link>
                        <Link href="#experience">
                            <p className="px-3 py-2 rounded-md hover:text-gray-400">Experience</p>
                        </Link>
                        <Link href="#projects">
                            <p className="px-3 py-2 rounded-md hover:text-gray-400">Projects</p>
                        </Link>
                        <Link href="#contact">
                            <p className="px-3 py-2 rounded-md hover:text-gray-400">Contact</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};