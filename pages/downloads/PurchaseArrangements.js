import { React, useState } from 'react';
import AllArrangementsDisplay from './AllArrangementsDisplay';

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

    const allsongs = [detailsvalsop8no4, detailselmarabino, detailsnowomannocry, detailsmichelle];

    return (
        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="arrangments" className="secondary-title">All Arrangements</h2>
                <h3 className="mt-4 text-sm">Download the sheet music and guitar tabs below</h3>
                <AllArrangementsDisplay songdetailsarray={allsongs} />

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