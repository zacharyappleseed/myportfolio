import React from 'react';
import { useTransition, useState, lazy } from "react";

import VideoCard from "./VideoCard"

const GuitarArr = () => {

    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="arrangments" className="secondary-title">Arrangements</h2>
                <p className="section-paragraph">I'm currently in the process of writing out the guitar arrangements I've learned over the years. Below you'll find them available for listening or you can download the sheet music through Patreon.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                    <div className="">
                        <div className="w-full h-36 lg:h-72 object-cover">
                            <VideoCard />
                        </div>

                        <span className="badge hover:bg-theme">
                            Vals Op. 8 No. 3
                        </span>
                    </div>
                    <div>
                        <img src="https://img.youtube.com/vi/w9aKnh98pis/maxresdefault.jpg" className="w-full bg-nav h-36 lg:h-72 object-cover" />
                        <span className="badge hover:bg-theme">
                            Vals Op. 8 No. 3
                        </span>
                    </div>
                    <div>
                        <img src="https://img.youtube.com/vi/MFUdLLeWNU0/maxresdefault.jpg" className="w-full bg-nav h-36 lg:h-72 object-cover" />
                        <span className="badge hover:bg-theme">
                            El Marabino
                        </span>
                    </div>
                    <div>
                        <img src="https://img.youtube.com/vi/YiUi7z8TmR4/maxresdefault.jpg" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                        <span className="badge hover:bg-theme">
                            No Woman No Cry
                        </span>
                    </div>
                    <div>
                        <img src="https://img.youtube.com/vi/y_sc_Qibu44/maxresdefault.jpg" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                        <span className="badge hover:bg-theme">
                            Michelle
                        </span>
                    </div>
                    {/*-- placeholder images 
                    <img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover" />
                    */}
                </div>
            </section>
        </div>
    )
}

export default GuitarArr;