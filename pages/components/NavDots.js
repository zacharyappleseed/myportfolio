import React, { useState, useEffect } from 'react';
import Link from 'next/link';



const NavDots = () => {

    const [offset, setOffset] = useState(0);

    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });


    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    //console.log(offset);
    console.log([...document.querySelectorAll('h1, h2')].indexOf(titles[0]));

    return (
        <>
            <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">

                <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    {/* each circle contains the nav-dot and selected-circle elements */}
                    <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                    </a>
                    <a href="#arrangments" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Arrangements</span>
                    </a>
                    <a href="#music" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Music</span>
                    </a>

                    <a href="#contact" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavDots;