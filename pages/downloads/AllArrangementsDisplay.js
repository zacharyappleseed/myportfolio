import { React, useState } from 'react';
import Link from 'next/link';
import SingleProductDisplay from './SingleProductDisplay';

const AllArrangementsDisplay = ({ songdetailsarray }) => {


    return (

        <div className="">
            <div className="mx-auto max-w-2xl py-16  sm:py-24  lg:max-w-7xl ">
                <h2 className="sr-only">Shop</h2>

                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
                    <div className="">
                        <SingleProductDisplay songdetails={songdetailsarray[0]} />

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

    )
}

export default AllArrangementsDisplay;