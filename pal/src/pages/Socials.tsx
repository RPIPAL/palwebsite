import React, { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import SideNav from "../components/SideNav.tsx";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import Footer from "../components/Footer.tsx";

function Socials() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <>
      <SideNav toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`bg-gradient-to-br from-[#9b870c] via-[#9A2A2A] via-50% to-[#0032A0] to-80%  text-[#FBEBD9] min-h-screen font-poppins ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <div className="h-[87vh]">
          <Navbar
            toggleMenu={toggleMenu}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <div className="w-1/2 lg:w-5/6 m-auto my-10 lg:flex items-center">
            <h2 className="text-center text-4xl font-semibold my-6 lg:hidden">
              Check out our latest Youtube video
            </h2>
            <iframe
              src="https://www.youtube.com/embed?listType=playlist&list=UUNDOosZ4sNGRR3hd7Co2YDQ"
              className="w-full aspect-video rounded-sm shadow-2xl"
              title="Checkout"
              allowFullScreen
            ></iframe>

            <div className="lg:mx-4">
              <div className="flex max-lg:hidden items-center">
                <HiMiniArrowLongLeft className="text-8xl" />
                <h2 className="text-4xl font-semibold my-6 mx-2">
                  Check out our latest Youtube video
                </h2>
              </div>
              <p className="my-2 text-lg lg:mx-16">
                Click{" "}
                <a
                  className="underline"
                  href="https://www.youtube.com/channel/UCNDOosZ4sNGRR3hd7Co2YDQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                to visit our channel
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Socials;

//UCNDOosZ4sNGRR3hd7Co2YDQ
