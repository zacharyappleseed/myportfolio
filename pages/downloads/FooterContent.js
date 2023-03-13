import React from 'react';
import SocialContact from "../components/SocialContact";
import Link from 'next/link'

const FooterContent = () => {

  return (
    <div>
      <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
          <h2 id="footer" className="secondary-title"></h2>

          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32">
            <div className="formWrapper">
              <p className="text-secondary">Thanks for listening!</p>
              <p className="mt-9 text-secondary">Feel free to email me or {" "}
                <Link href="/#contact" className="underline hover:text-secondary">
                  message me through this contact form
                </Link>
                , if you have any questions.</p>
            </div>

            <SocialContact />
          </div>
        </section>

      </div>
      <div className="grid w-full place-content-center ">
        <p className="mt-9 mb-15 text-secondary place-content-center">zacharypagliaro.com</p>
      </div>
    </div>
  )
}

export default FooterContent;