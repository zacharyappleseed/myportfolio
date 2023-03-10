import React from 'react';
import NavDots from "./NavDots"

const HeaderContent = () => {

    return (
        <div className="container mt-16 flex justify-between item-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="flex flex-wrap md:flex-nowrap">

                {/* navigation circle section begins */}

                <NavDots />

                {/*hero section begins*/}

                <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 -z1  md:my-36">
                    <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Guitarist & <br /> Audio Engineer</h1>
                    <div className="w-full flex justify-center md:justify-start">
                        <button className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7Z" /></svg>
                            </div>
                            <a href="#music">
                                <span>Listen to my music.</span>
                            </a>
                        </button>
                    </div>
                </div>
                <img src="/img/man.png" alt="Guitarist" className="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-0 md:pt-12 xl:max-w-[1300px] xl:pr-64" />

            </div>
        </div>
    )
}

export default HeaderContent;