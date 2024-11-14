import React, { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import SideNav from "../components/SideNav.tsx";
import Footer from "../components/Footer.tsx";

function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <>
      <SideNav toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`bg-gradient-to-br from-[#9b870c] via-[#C41E3A] via-25% to-[#0032A0] to-100% text-[#FBEBD9] min-h-screen ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <Navbar toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="lg:flex">
          <header className="m-auto lg:hidden my-12">
            <h1 className="text-3xl w-5/6 m-auto md:text-4xl lg:text-5xl font-poppins text-center font-semibold md:m-10 lg:m-8">
              Look at what we've been up to in our newsletter!
            </h1>
          </header>
          <div className="lg:w-1/12"></div>
          <div
            className="m-auto relative w-4/5 pt-[110%] sm:w-1/2 sm:pt-[66.6667%] md:w-2/5 md:pt-[53%] lg:pt-[45.3%] lg:w-1/3 lg:my-12 
       my-6 overflow-hidden rounded-lg items-center"
          >
            <div className="m-auto">
              <iframe
                loading="lazy"
                className="absolute w-full h-full top-0 left-0 border-none p-0 m-0 m-auto"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF6XvinNR0&#x2F;Ze5ZH8975cA09h2KdObE_w&#x2F;view?embed"
                allowFullScreen
                title="PAL 2023-2024 wrapped"
              ></iframe>
            </div>
          </div>
          <header className="lg:w-5/12 my-auto max-lg:hidden">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins text-center font-semibold lg:px-12">
              Look at what we've been up to in our newsletter!
            </h1>
          </header>
          <div className="xl:w-1/12"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Newsletter;
