import React from 'react';

const PurchaseArrangements = () => {

    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="arrangments" className="secondary-title">Arrangements</h2>
                <p className="section-paragraph">I'm currently in the process of writing out the guitar arrangements I've learned over the years. Below you'll find them available for listening or you can download the sheet music through Patreon.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                    <img src="https://img.youtube.com/vi/y_sc_Qibu44/maxresdefault.jpg" className="w-full bg-nav h-36 lg:h-72 object-cover" />

                    <img src="https://img.youtube.com/vi/w9aKnh98pis/maxresdefault.jpg" className="w-full bg-nav h-36 lg:h-72 object-cover" />
                    <div className="">
                        <a href="https://transactions.sendowl.com/products/78903349/5CA2F8F2/purchase" rel="nofollow">
                            <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">
                                Buy
                            </button>
                        </a>
                        <script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>
                    </div>
                    <img src="https://img.youtube.com/vi/YiUi7z8TmR4/maxresdefault.jpg" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://img.youtube.com/vi/MFUdLLeWNU0/maxresdefault.jpg" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />

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

export default PurchaseArrangements;