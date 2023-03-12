import React from 'react';
import { useTransition, useState, lazy } from "react";

import ValsOp8No4VideoCard from "./VideoCards/VCValsOp8No3"
import ElMarabinoVideoCard from "./VideoCards/VCElMarabino"
import NoWomanNoCryVideoCard from "./VideoCards/VCNoWomanNoCry"
import MichelleVideoCard from "./VideoCards/VCMichelle"

const GuitarArr = () => {

    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full grow">
                <h2 id="arrangments" className="secondary-title">Arrangements</h2>
                <p className="section-paragraph">I'm currently in the process of writing out the guitar arrangements I've learned over the years. Below you'll find them available for listening or you can download the sheet music through Patreon.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 flex-auto">

                    <div className="">
                        <div className="w-full h-fit lg:h-72 object-cover">
                            <ValsOp8No4VideoCard />
                        </div>

                        <span className="badge hover:bg-theme">
                            Vals Op. 8 No. 3
                        </span>
                    </div>
                    <div className="">
                        <div className="w-full h-fit lg:h-72 object-cover">
                            <ElMarabinoVideoCard />
                        </div>

                        <span className="badge hover:bg-theme">
                            El Marabino
                        </span>
                    </div>
                    <div className="">
                        <div className="w-full h-fit lg:h-72 object-cover">
                            <NoWomanNoCryVideoCard />
                        </div>

                        <span className="badge hover:bg-theme">
                            No Woman No Cry
                        </span>
                    </div>
                    <div className="">
                        <div className="w-full h-fit lg:h-72 object-cover">
                            <MichelleVideoCard />
                        </div>

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