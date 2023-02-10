import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css'
import Form from "./Forms";
import TopBarNav from "./TopBarNav";

const MainContent = () => {

    {/* use the headers to calculate which navigation dot should have a selected circle 
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
                return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
            });

            document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

            document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
        })
    });
    */ }
    return (
        <>


            <TopBarNav />

            <div className="container mt-16 flex justify-between item-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <div className="flex flex-wrap md:flex-nowrap">

                    {/* navigation circle section begins */}

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
                            {/*
                        <a href="#dev" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Dev</span>
                        </a>
                        */} {/*for future use, when the github repositories are all ready*/}
                            <a href="#contact" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
                            </a>
                        </div>
                    </nav>

                    {/*hero section begins*/}

                    <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 -z1  md:my-36">
                        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Guitarist & <br /> Audio Engineer</h1>
                        <div className="w-full flex justify-center md:justify-start">
                            <button className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7Z" /></svg>
                                </div>
                                <span>Listen to my music.</span>
                            </button>
                        </div>
                    </div>
                    <img src="/img/man.png" alt="Guitarist" className="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-0 md:pt-12" />

                </div>
            </div>

            {/*-- Arrangments */}

            <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <section className="w-full">
                    <h2 id="arrangments" className="secondary-title">Arrangements</h2>
                    <p className="section-paragraph">I’ve had the pleasure of learning a nice collection of solo guitar arrangements. Below you'll find them available for listening or for purchase. Both mp3 and wavs are available, as well as the sheet music in pdf and midi formats.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {/*-- placeholder images */}
                        <img src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="w-full bg-nav h-36 lg:h-72 object-cover" />
                        <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-full bg-nav h-36 lg:h-72 object-cover" />
                        <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                        <img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                        <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                        <img src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                        <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                        <img src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover" />
                    </div>
                </section>
            </div>

            {/*-- Clients */}
            <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <section className="w-full">
                    <h2 id="music" className="secondary-title">My music</h2>
                    <p className="section-paragraph">Thanks for listening</p>

                    {/*-- Clients */}
                    <div className="space-y-12 my-16">
                        <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                            {/* Client logo */}
                            <div className="mb-6 lg:mb-0">
                                <img src="/img/oldsoul.png" className="object-contain h-40 md:h-48 lg:h-80 md:object-scale-down" />
                            </div>

                            {/* -- Client info */}
                            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                                <h3 className="text-white text-3xl font-semibold">Nico.wav</h3>

                                <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                    <div className="badge">Producer</div>
                                    <div className="badge">Audio Engineer</div>
                                </div>

                                <p className="text-secondary">Nico.wav is an artist from PG County, MD.{/*--Nico.wav is an artist from PG County, MD. While Nico is a skilled producer and engineer in his own right, I've been privledged to produce several records for the talented rapper. We are continually making new music - stay tuned for the next release!*/} </p>
                            </div>

                        </div>
                        <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                            {/* Client logo */}
                            <div className="mb-6 lg:mb-0">
                                <img src="/img/overzealous.png" className="object-contain h-40 md:h-48 lg:h-80 md:object-scale-down" />
                            </div>

                            {/* -- Client info */}
                            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                                <h3 className="text-white text-3xl font-semibold">Zealxt</h3>

                                <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                    <div className="badge">Producer</div>
                                </div>

                                <p className="text-secondary">A personal music project of my own. {/*A personal music project of my own, Zealxt is a somewhat creative outlet that I use to collect some of my favorite compositions together. Ableton Live is my primary tool for creating these songs.*/} </p>
                            </div>

                        </div>
                        <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                            {/* Client logo */}
                            <div className="mb-6 lg:mb-0">
                                <img src="/img/lushwork.png" className="object-contain h-40 md:h-48 lg:h-80 md:object-scale-down" />
                            </div>

                            {/* -- Client info */}
                            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                                <h3 className="text-white text-3xl font-semibold">Lushwork</h3>

                                <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                    <div className="badge">Guitarist</div>
                                    <div className="badge">Producer</div>
                                    <div className="badge">Audio Engineer</div>
                                </div>

                                <p className="text-secondary">Lushwork is a 5 piece band from NYC.</p>
                            </div>

                        </div>
                    </div>

                </section>
            </div>

            <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <section className="w-full">
                    <h2 id="contact" className="secondary-title">Hire me</h2>
                    <p className="section-paragraph">Feel free to to contact me any time.</p>

                    <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
                        <div className="formWrapper">
                            <div className="contactForm">
                                <Form />
                            </div>
                        </div>

                        <div className="mt-12">
                            {/* Contact info */}
                            {/*<p className="text-secondary">555-555-1234</p>*/}
                            <a href="mailto:zacharypagliaro@icloud.com" className="text-secondary underline mt-3 block">zacharypagliaro@icloud.com</a>

                            {/* Socials */}
                            <div className="flex mt-20 space-x-6">
                                {/* Youtube */}
                                <a href="https://www.youtube.com/@zacharypagliaro">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-8 h-8 lg:w-12 lg:h-12"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                                </a>
                                {/* TikTok */}
                                <a href="https://www.tiktok.com/@zacharypagliaro">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 lg:w-12 lg:h-12"><path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/zacharyappleseed">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-8 h-8 lg:w-12 lg:h-12"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/zacharypagliaro/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 lg:w-12 lg:h-12"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
            </div>



        </>
    )
}

export default MainContent;