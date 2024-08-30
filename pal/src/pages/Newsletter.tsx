import React, { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import SideNav from "../components/SideNav.tsx";
function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <>
      <SideNav toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`bg-gradient-to-br from-[#9b870c] via-[#C41E3A] via-25% to-[#0032A0] to-100% text-[#FBEBD9] h-screen ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <Navbar toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
        <header className="lg:w-2/3 m-auto 2xl:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins text-center m-12 font-semibold md:m-10 lg:m-8">
            Look at what we've been up to in our newsletter!
          </h1>
        </header>

        <div
          className="m-auto relative w-3/5 pt-[80%] sm:w-1/2 sm:pt-[66.6667%] md:w-2/5 md:pt-[53.5%] 
        lg:w-[27%] lg:pt-[36%] xl:w-1/4 xl:pt-[33%] 2xl:w-96 2xl:h-[506px] xl:pb-0 mt-6 overflow-hidden rounded-lg "
        >
          <iframe
            loading="lazy"
            className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF6XvinNR0&#x2F;Ze5ZH8975cA09h2KdObE_w&#x2F;view?embed"
            allowFullScreen
            title="PAL 2023-2024 wrapped"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
