import React, { useState } from 'react';

const MusicClients = () => {

    const [showMore, setShowMore] = useState(false);
    const { moreText } = "hello! blah blah blah blah blah";
    return (
        < div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" >
            <section className="w-full">
                <h2 id="music" className="secondary-title">My music</h2>
                <p className="section-paragraph">Thanks for listening</p>

                {/*-- Clients */}
                <div className="space-y-12 my-16">
                    <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                        {/* Client logo */}
                        <div className="mb-6 lg:mb-0">
                            <img src="/img/oldsoul.png" className="object-contain h-48 md:h-48 lg:h-80 md:object-scale-down" />
                        </div>

                        {/* -- Client info */}
                        <div className="w-full md:w-1/2 flex flex-wrap justify-center text-center lg:text-left lg:block lg:w-1/2">
                            <div className="md:pl-5 lg:pt-10 lg:pl-0 xl:pt-0">
                                <h3 className="text-white text-3xl font-semibold">Nico.wav</h3>

                                <p className="text-secondary pt-3">An artist from PG County, MD. </p>
                                {/*While he's actually a skilled producer and engineer in his own right, I've been privledged to produce several records for the talented rapper. We are continually making new music - stay tuned for the next release!*/}
                            </div>

                            {showMore ? "A" : "B"}
                            <button className="badge" onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Show less" : "Show more"}
                            </button>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div className="badge hidden">Producer</div>
                                <div className="badge hidden">Audio Engineer</div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                        {/* Client logo */}
                        <div className="mb-6 lg:mb-0">
                            <img src="/img/overzealous.png" className="object-contain h-48 md:h-48 lg:h-80 md:object-scale-down" />
                        </div>

                        {/* -- Client info */}
                        <div className="w-full md:w-1/2 flex flex-wrap justify-center text-center lg:text-left lg:block lg:w-1/2">
                            <div className="md:pl-5 lg:pt-10 lg:pl-0 xl:pt-0">
                                <h3 className="text-white text-3xl font-semibold">Zealxt</h3>

                                <p className="text-secondary pt-3">A personal music project of my own. {/*A personal music project of my own, Zealxt is a somewhat creative outlet that I use to collect some of my favorite compositions together. Ableton Live is my primary tool for creating these songs.*/} </p>
                            </div>
                            <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div className="badge hidden">Producer</div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                        {/* Client logo */}
                        <div className="mb-6 lg:mb-0">
                            <img src="/img/lushwork.png" className="object-contain h-48 md:h-48 lg:h-80 md:object-scale-down" />
                        </div>

                        {/* -- Client info */}
                        <div className="w-full md:w-1/2 flex flex-wrap justify-center text-center lg:text-left lg:block lg:w-1/2">

                            <div className="md:pl-5 lg:pt-10 lg:pl-0 xl:pt-0">
                                <h3 className="text-white text-3xl font-semibold break-after-column">Lushwork</h3>

                                <p className="text-secondary pt-3">A 5 piece band from NYC.</p>
                            </div>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div className="badge hidden">Guitarist</div>
                                <div className="badge hidden">Producer</div>
                                <div className="badge hidden">Audio Engineer</div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div >
    )
}

export default MusicClients;