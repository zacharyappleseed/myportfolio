import React from 'react';
import SocialContact from "../components/SocialContact";

const FooterContent = () => {

  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section className="w-full">
        <h2 id="footer" className="secondary-title"></h2>

        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32">
          <div className="formWrapper">
            <div className="contactForm">
              <p>Thanks for listening!</p>
            </div>
          </div>

          <SocialContact />
        </div>
      </section>
    </div>
  )
}

export default FooterContent;