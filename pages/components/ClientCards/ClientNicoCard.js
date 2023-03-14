import React, { useState } from 'react';
import SoundcloudPlayer from './SoundcloudPlayer';

const ClientNicoCard = () => {

    const [showMore, setShowMore] = useState(false);
    const nicoText = "While he's actually a skilled producer and engineer in his own right, I've gotten to produce several records for the talented rapper.";
    const showMoreTextStyle = "badge text-white mt-10"
    const showLessTextStyle = "badge text-secondary mt-10"
    const showMoreSoundcloud = "hidden"
    const showLessSoundcloud = "w-full px-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap"
    const hidden = "hidden"
    const display = ""
    return (
        <>
            <div className="space-y-12 my-16">

                <div className="w-full border border-nav">
                    <div className="w-full pt-16 px-16 lg:px-32 lg:pt-20 lg:space-x-24 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

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
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-16 lg:px-32 lg:pt-20 lg:space-x-24 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                        <div className="mb-6 lg:mb-0">
                            <div className="text-xl font-bold">
                                <p>Old Soul</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto flex flex-wrap justify-center text-center lg:text-left gap-3 mb-5">
                            <div className="badge">Producer</div>
                            <div className="badge">Audio Engineer</div>

                        </div>
                    </div>

                    <div className={showMore ? display : hidden}>
                        <div className="w-full md:w-full flex flex-wrap justify-center text-left lg:text-left lg:block lg:w-full">
                            <div className="px-16 lg:px-32">
                                <div className="text-secondary">
                                    <p>An album that I had the pleasure of producing, from composing the music to engineering the vocals. Our first project together, it's our attempt at making a timeless classic, just something we will always want to listen to. We hope you enjoy it for years to come.</p>
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
        </>
    )
}

export default ClientNicoCard;