// components/Navbar.js
"use client";
import Link from 'next/link';

import useScrollPosition from '../utils/useScrollPosition';

export const Navbar = () => {
    
    // Obtener la posición de scroll
    const scrollPosition = useScrollPosition();

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu?.classList.toggle("hidden");
    };

    return (
        <>  
            <div className={"fixed top-0 left-0 w-full hidden lg:block" + (scrollPosition > 50 ? "backdrop-blur-lg bg-background/75 shadow-lg z-50" : " bg-transparent z-50")}>
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
                            <Link href="#certifications">
                                <p className="px-3 py-2 rounded-md hover:text-gray-400">Certifications</p>
                            </Link>
                            <Link href="#contact">
                                <p className="px-3 py-2 rounded-md hover:text-gray-400">Contact</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full block lg:hidden z-50">
                <div className="flex items-center justify-between px-4 py-3 bg-background">
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="text-foreground hover:text-gray-400 focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="mobile-menu" className="hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full h-screen bg-background">
                    <Link href="/" onClick={toggleMobileMenu}>
                        <p className="block px-3 py-2 rounded-md text-[24px] font-medium text-foreground hover:text-gray-400">Home</p>
                    </Link>
                    <Link href="#skills" onClick={toggleMobileMenu}>
                        <p className="block px-3 py-2 rounded-md text-[24px] font-medium text-foreground hover:text-gray-400">Skills</p>
                    </Link>
                    <Link href="#experience" onClick={toggleMobileMenu}>
                        <p className="block px-3 py-2 rounded-md text-[24px] font-medium text-foreground hover:text-gray-400">Experience</p>
                    </Link>
                    <Link href="#certifications" onClick={toggleMobileMenu}>
                        <p className="block px-3 py-2 rounded-md text-[24px] font-medium text-foreground hover:text-gray-400">Certifications</p>
                    </Link>
                    <Link href="#contact" onClick={toggleMobileMenu}>
                        <p className="block px-3 py-2 rounded-md text-[24px] font-medium text-foreground hover:text-gray-400">Contact</p>
                    </Link>
                </div>
            </div>
        </>
    );
};