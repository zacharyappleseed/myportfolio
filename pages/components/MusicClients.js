import React, { useState } from 'react';
import SoundcloudPlayer from './SoundcloudPlayer';

const MusicClients = () => {

    const [showMore, setShowMore] = useState(false);
    const nicoText = "While he's actually a skilled producer and engineer in his own right, I've been privledged to produce several records for the talented rapper.";
    const showMoreTextStyle = "badge text-white mt-10"
    const showLessTextStyle = "badge text-secondary mt-10"
    const showMoreSoundcloud = "hidden"
    const showLessSoundcloud = "w-full px-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap"
    const hidden = "hidden"
    const display = ""
    return (
        < div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" >
            <section className="w-full">
                <h2 id="music" className="secondary-title">My music</h2>
                <p className="section-paragraph">Thanks for listening</p>

                {/*-- Clients */}
                <div >
                    <div className="space-y-12 my-16">
                        <div className="w-full border border-nav">
                            <div className="w-full p-16 lg:px-32 lg:pt-20 lg:space-x-24 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                                {/* Client logo */}
                                <div className="mb-6 lg:mb-0">
                                    <img src="/img/oldsoul.png" className="object-contain h-48 md:h-48 lg:h-80 md:object-scale-down" />
                                </div>

                                {/* -- Client info */}
                                <div className="w-full md:w-1/2 flex flex-wrap justify-center text-center lg:text-left lg:block lg:w-2/3">
                                    <div className="lg:pt-10 lg:pl-0 xl:pt-0">
                                        <h3 className="text-white text-3xl font-semibold">Nico.wav</h3>

                                        <p className="text-secondary pt-3">An artist from PG County, MD. </p>
                                    </div>

                                    <div className="w-full lg:w-auto flex flex-wrap justify-center text-center lg:text-left gap-3">
                                        <div className="lg:pt-10 lg:pl-0 xl:pt-0 text-secondary">
                                            {showMore ? nicoText : ""}

                                        </div>
                                        <div className="lg:pl-0 xl:pt-0 text-secondary">
                                            <button className={showMore ? showLessTextStyle : showMoreTextStyle} onClick={() => setShowMore(!showMore)}>
                                                {showMore ? "Show less" : "Show more"}
                                            </button>
                                        </div>
                                        <div className="badge hidden">Producer</div>
                                        <div className="badge hidden">Audio Engineer</div>
                                    </div>
                                </div>
                            </div>

                            <div className={showMore ? display : hidden}>
                                <div className="w-full md:w-full flex flex-wrap justify-center text-center lg:text-left lg:block lg:w-full">
                                    <div className="px-16 lg:px-16">
                                        <div className="px-16 text-secondary">
                                            Old Soul is our first work together, and an album that I produced entirely, from composing the music to engineering the vocals. It's our attempt at making something classic, timeless, and just something that we will always want to listen to. We hope you enjoy it for years to come.
                                        </div>
                                    </div></div>

                            </div>

                            <div className={showMore ? showLessSoundcloud : showMoreSoundcloud} >

                                <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/549183315&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

                            </div>

                            <div className={showMore ? display : hidden}>
                                <div className="w-full md:w-full flex flex-wrap justify-center text-center lg:text-left lg:block lg:w-full">
                                    <div className="px-16 lg:px-16 pb-8">
                                        <div className="px-16 text-secondary">
                                            We are continually making new music - stay tuned for the next release!
                                        </div></div></div>

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