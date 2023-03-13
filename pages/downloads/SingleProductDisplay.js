import { React, useState } from 'react';
import Link from 'next/link';

const SingleProductDisplay = ({ songdetails }) => {


    return (


        <>

            <div className="sm:hidden relative grid grid-cols-2 mb-8">

                <div className="absolute mt-3">

                </div>
                <div className="absolute right-0 bottom-1">
                    <Link href={"#" + songdetails.htmlid}>
                        <h3 className="text-sm md:text-md lg:text-lg">{songdetails.name}</h3>
                        <p className="absolute right-0 text-lg text-theme">{songdetails.price}</p>
                    </Link>
                </div>
            </div>

            <Link href={"#" + songdetails.htmlid} className="group">

                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                    <img src={"https://img.youtube.com/vi/" + songdetails.youtubeid + "/maxresdefault.jpg"} alt={"Zachary Pagliaro plays" + songdetails.name + "Thumbnail"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>


            </Link>

            <div className="relative grid grid-cols-2 mb-8">

                <div className="absolute mt-2 sm:mt-3 md:mt-4">

                    <a href={songdetails.sendowlurl} rel="nofollow">
                        <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">
                            {songdetails.free ? "Download" : "Buy"}
                        </button>
                    </a>
                    <script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
                </div>
                <div className="absolute top-0 right-0">
                    <Link href={"#" + songdetails.htmlid}>
                        <h3 className="hidden sm:block mt-1 text-sm md:text-lg">{songdetails.name}</h3>
                        <p className="hidden sm:block  absolute right-0 text-lg text-theme">{songdetails.price}</p>
                    </Link>
                </div>
            </div>

        </>


    )
}

export default SingleProductDisplay;