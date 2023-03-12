import React, { useState } from 'react';
import Link from 'next/link';



const DownloadsTopBarNav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="font-bold">Zachary Pagliaro</div>
        <div className="hidden md:flex space-x-12 items-center">
          <Link href='/'>
            Home
          </Link>
          <Link href='#arrangements' className="text-selected-text">
            Arrangements
          </Link>
          <Link href='/#music'>
            Music
          </Link>
          <Link href='/#contact'>
            <button className="px-6 py-2 bg-theme font-bold">Contact</button>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="inline-flex p-3 hover:bg-theme rounded lg:hidden text-white ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white" /></svg>
          </button>
          <div
            className={`${active ? '' : 'hidden'
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-theme hover:text-white '>

                <Link href='/'>
                  Home
                </Link>
              </div>

              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-theme hover:text-white'>

                <Link href='#arrangements'>
                  Arrangements
                </Link>
              </div>

              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-theme hover:text-white'>

                <Link href='/#music'>
                  Music
                </Link>

              </div>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-theme hover:text-white'>

                <Link href='/#contact'>
                  Contact
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default DownloadsTopBarNav;