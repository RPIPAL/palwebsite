import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.tsx";
import SideNav from "../components/SideNav.tsx";
import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
import Footer from "../components/Footer.tsx";
import paths from "../assets/arrow.jsx";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setIsScroll(true);
    });
  });
  return (
    <>
      <SideNav toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`bg-gradient-to-br from-[#FFFF00] from-0% via-[#8B0000] h-[calc(200vh+7rem)] via-30% to-[#00008B] to-100% text-[#FBEBD9] font-raleway md:h-[calc(200vh+7rem)] overflow-hidden ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <div className="first-page">
          <Navbar
            toggleMenu={toggleMenu}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            absolute={true}
          />
          <div className="first-page container [--from-x-first:-500px] flex flex-col h-[calc(100vh)] justify-center items-center mx-auto w-3/4 md:[--from-x-first:-1000px]">
            <motion.div
              initial={{ x: "var(--from-x-first)" }}
              animate={{ x: 0 }}
              className="m-auto"
            >
              <motion.div
                initial={{ y: 0, x: 0 }}
                animate={{ y: "var(--to-y-second)", x: "var(--to-x-second)" }}
                transition={{ delay: 1.5, duration: 0.3 }}
                className="[--to-x-second:0px] [--to-y-second:-29vh] 
                md:[--to-x-second:-19vw] md:[--to-y-second:0px] xl:[--to-x-second:-300px] xl:[--to-y-second:0px] 2xl:[--to-x-second:-350px]"
              >
                <h2 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold ">
                  Mabuhay
                </h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className=""
                >
                  <p className="text-xl 2xl:text-2xl">Welcome to PAL</p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{
                y: "var(--image-from-y)",
                x: "var(--image-from-x, 500px)",
                opacity: 0,
              }}
              animate={{
                y: "var(--image-to-y)",
                x: "var(--image-to-x, -40px)",
                opacity: 1,
              }}
              transition={{ delay: 1.5, duration: 0.5, ease: "backInOut" }}
              className="absolute w-[calc(13rem+18vw)] md:w-[calc(15rem+19vw)] shadow-lg shadow-black overflow-x-hidden [--image-from-y:-50px] [--image-to-y:-50px] 
              md:w-5/12 lg:[--image-from-y:0px] md:[--image-to-y:0px] md:[--image-to-x:23vw] md:[--image-from-x:900px] 
              xl:w-5/12 xl:[--image-from-y:0px] xl:[--image-to-y:0px] xl:[--image-to-x:300px] xl:[--image-from-x:900px] 
              2xl:[--image-to-x:22vw]"
            >
              <img className="md:hidden" src="camping.jpg" alt="" />
            </motion.div>
            <motion.div
              initial={{
                y: "var(--image-from-y)",
                x: "var(--image-from-x, -500px)",
                opacity: 0,
              }}
              animate={{
                y: "var(--image-to-y)",
                x: "var(--image-to-x, 30px)",
                opacity: 1,
              }}
              transition={{ delay: 1.7, duration: 0.5, ease: "backInOut" }}
              className="absolute w-[calc(13rem+18vw)] md:w-[calc(15rem+19vw)] shadow-lg shadow-black overflow-x-hidden [--image-from-y:180px] [--image-to-y:180px] 
              md:w-5/12 lg:[--image-from-y:0px] md:[--image-to-y:0px] md:[--image-to-x:23vw] md:[--image-from-x:900px] 
              xl:w-5/12 xl:[--image-from-y:0px] xl:[--image-to-y:0px] xl:[--image-to-x:300px] xl:[--image-from-x:900px] 
              2xl:[--image-to-x:22vw]"
            >
              <img className="" src="hot_air_balloon.png" alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0, x: -20 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <motion.div
                className="absolute bottom-8 m-auto text-4xl md:hidden"
                animate={{ y: isScroll ? -2000 : 8, opacity: isScroll ? 0 : 1 }}
                transition={{
                  repeat: isScroll ? 0 : Infinity,
                  duration: 1,
                  repeatType: "mirror",
                  delay: 0.3,
                }}
              >
                <FaAnglesDown />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div className="max-md:hidden absolute w-1/3 invert right-1/3 top-[81vh] object-contain">
          <motion.svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 4054 2294"
          >
            {paths.map((path) => {
              return path;
            })}
          </motion.svg>
        </motion.div>
        <div className="second-page h-[calc(100vh)] md:h-[calc(100vh)] md:flex md:justify-around md:flex-row-reverse">
          <div
            className="bg-white/75 text-black md:w-1/2 md:bg-transparent 
          md:inline-block md:m-auto md:text-[#FBEBD9] *:md:w-11/12 *:md:m-auto *:lg:w-5/6 *:xl:w-3/4"
          >
            <motion.h1
              initial={{ x: "var(--who-x-from)", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-5xl [--who-x-from:-300px] font-semibold max-md:text-center md:[--who-x-from:300px] pt-12 md:pb-6 lg:text-6xl lg:pb-8 md:pt-0 xl:text-7xl"
            >
              Who are we?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="p-6 text-sm md:p-0 lg:w-5/6 lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              The Philippine American League (PAL) is a multicultural
              organization at RPI dedicated to promoting and celebrating
              Filipino culture to the local community! We host dance workshops,
              teach how to cook Filipino food, learn new Tagalog words and
              phrases, and work with a variety of other groups on campus to
              raise awareness about Filipino culture. The organization has
              become a standard for culture, diversity and acceptance, and we
              are proud to be pinoy and welcome anyone who wants to learn more
              about what it is to be Filipino!
            </motion.p>
          </div>
          <div className="md:w-1/2 md:m-auto [--second-image-x-from:-300px] ">
            <motion.img
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
              src="camping.jpg"
              alt=""
              className="shadow-lg shadow-black w-11/12 m-auto mt-12 sm:w-3/4 md:mt-0 md:w-11/12 lg:w-5/6"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
