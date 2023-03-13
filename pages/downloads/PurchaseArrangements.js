import { React, useState } from 'react';
import Link from 'next/link';
import YoutubeEmbed from "./YoutubeEmbed";
import IconMusicClefTreble from "./icons/IconMusicClefTreble"
import IconDocuments from "./icons/IconDocuments"
import MainSongDisplayModule from "./MainSongDisplayModule"

const PurchaseArrangements = () => {

    const [detailsmichelle] = useState(
        {
            name: "Michelle",
            subtitle: "Written by the Beatles.",
            price: "$8",
            free: false,
            sendowlurl: "https://transactions.sendowl.com/products/78903349/5CA2F8F2/purchase",
            youtubeid: "YiUi7z8TmR4",
            filename: "Michelle transcription.pdf",
            htmlid: "Michelle",
            blurb: "This is one of my favorite guitar pieces, taught to me by Lauren Passareli, a talented professor at Berklee College of Music. Even though it's very different from the original piece by the Beatles, there really is something special about the way this melody fits over a walking bass line.",
        }
    );

    const [detailsnowomannocry] = useState(
        {
            name: "No Woman No Cry",
            subtitle: "Written by Bob Marley.",
            price: "$8",
            free: false,
            sendowlurl: "https://transactions.sendowl.com/products/78903349/5CA2F8F2/purchase",
            youtubeid: "YiUi7z8TmR4",
            downloadlink: "",
            filename: "No Woman No Cry transcription.pdf",
            htmlid: "NoWomanNoCry",
            blurb: "An interesting arrangement played by John Mayer. It's been floating around the internet for years so I'm happy to finally have it written down.",
        }
    );

    const [detailsvalsop8no4] = useState(
        {
            name: "Vals Op. 8 No. 3",
            subtitle: "An intricate piece, written by the greatest composer for guitar that has ever lived: Agustín Barrios Mangoré.",
            price: "free",
            free: true,
            sendowlurl: "",
            youtubeid: "w9aKnh98pis",
            downloadlink: "",
            filename: "Vals Op 8 No 3 transcription.pdf",
            htmlid: "ValsOp8No3",
            blurb: "This is one of two of my favorite pieces from Barrios, the other being his fourth piece from the Opus 8 work.",
        }
    );

    const [detailselmarabino] = useState(
        {
            name: "El Marabino",
            subtitle: "Written by Antonio Lauro, a brilliant composer that brought the Venezualan style waltz to the rest of the world.",
            price: "free",
            free: true,
            sendowlurl: "https://transactions.sendowl.com/products/78903349/5CA2F8F2/purchase",
            youtubeid: "MFUdLLeWNU0",
            downloadlink: "",
            filename: "El Marabino transcription.pdf",
            htmlid: "ElMarabino",
            blurb: "A short, happy piece of music that has some interesting melodic ideas, and some complex harmonies going on.",
        }
    );

    return (
        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="arrangments" className="secondary-title">All Arrangements</h2>
                <h3 className="mt-4 text-sm">Download the sheet music and guitar tabs below</h3>
                <div className="">

                    <div className="mx-auto max-w-2xl py-16  sm:py-24  lg:max-w-7xl ">
                        <h2 className="sr-only">Shop</h2>

                        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
                            <div className="">
                                <Link href="#ValsOp8No4" className="group">

                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://img.youtube.com/vi/w9aKnh98pis/maxresdefault.jpg" alt="Zachary Pagliaro plays Vals Op. 8 No. 3 Thumbnail" className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                    </div>


                                </Link>

                                <div className="relative grid grid-cols-2 mb-8">

                                    <div className="absolute mt-3">

                                        <a href="https://transactions.sendowl.com/products/78903349/5CA2F8F2/purchase" rel="nofollow">
                                            <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">
                                                Download
                                            </button>
                                        </a>
                                        <script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
                                    </div>
                                    <div className="absolute top-0 right-0 ">
                                        <Link href="#ValsOp8No4">
                                            <h3 className="mt-1 text-sm md:text-lg">Vals Op 8 No 3</h3>
                                            <p className="absolute right-0 text-lg text-theme">Free</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="">
                                <Link href="#ElMarabino" className="group">

                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://img.youtube.com/vi/MFUdLLeWNU0/maxresdefault.jpg" alt="Zachary Pagliaro plays El Marabino Thumbnail" className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                    </div>


                                </Link>

                                <div className="relative grid grid-cols-2 mb-8">

                                    <div className="absolute mt-3">

                                        <a href="https://transactions.sendowl.com/products/78903349/5CA2F8F2/purchase" rel="nofollow">
                                            <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">
                                                Download
                                            </button>
                                        </a>
                                        <script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
                                    </div>
                                    <div className="absolute top-0 right-0 ">
                                        <Link href="#ElMarabino" >
                                            <h3 className="mt-1 text-sm md:text-lg">El Marabino</h3>
                                            <p className="absolute right-0 text-lg text-theme">Free</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            <div className="">
                                <Link href="#NoWomanNoCry" className="group">

                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://img.youtube.com/vi/YiUi7z8TmR4/maxresdefault.jpg" alt="Zachary Pagliaro plays No Woman No Cry thumbnail" className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                    </div>


                                </Link>

                                <div className="relative grid grid-cols-2 mb-8">

                                    <div className="absolute mt-3">

                                        <a href="https://transactions.sendowl.com/products/78903349/5CA2F8F2/purchase" rel="nofollow">
                                            <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">
                                                Buy
                                            </button>
                                        </a>
                                        <script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
                                    </div>
                                    <div className="absolute top-0 right-0">
                                        <Link href="#NoWomanNoCry">
                                            <h3 className="mt-1 text-sm md:text-lg">No Woman No Cry</h3>
                                            <p className="absolute right-0 text-lg">$9.99</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            <div className="">
                                <Link href="#Michelle" className="group">

                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://img.youtube.com/vi/y_sc_Qibu44/maxresdefault.jpg" alt="Zachary Pagliaro plays Michelle thumbnail" className="h-full w-full object-cover object-center group-hover:opacity-75 hover:border-gray" />
                                    </div>


                                </Link>

                                <div className="relative grid grid-cols-2 mb-8">

                                    <div className="absolute mt-3">

                                        <a href="https://transactions.sendowl.com/products/78903349/5CA2F8F2/purchase" rel="nofollow">
                                            <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">
                                                Buy
                                            </button>
                                        </a>
                                        <script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
                                    </div>
                                    <div className="absolute top-0 right-0">
                                        <Link href="#Michelle" >
                                            <h3 className="mt-1 text-sm md:text-lg">Michelle</h3>
                                            <p className="absolute right-0 text-lg">$9.99</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* BEGIN SONGS DETAILS */}

                <MainSongDisplayModule songdetails={detailsvalsop8no4} />
                <MainSongDisplayModule songdetails={detailselmarabino} />
                <MainSongDisplayModule songdetails={detailsnowomannocry} />
                <MainSongDisplayModule songdetails={detailsmichelle} />
            </section >


        </div >
    )
}

export default PurchaseArrangements;