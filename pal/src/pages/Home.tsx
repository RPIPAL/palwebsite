import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.tsx";
import SideNav from "../components/SideNav.tsx";
import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";

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
        className={`bg-gradient-to-br from-[#FFFF00] from-0% via-[#8B0000] via-30% to-[#00008B] to-100% text-[#FBEBD9] font-raleway h-[200vh] overflow-hidden ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <div className="first-page">
          <Navbar
            toggleMenu={toggleMenu}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <div className="first-page container [--from-x-first:-500px] flex flex-col h-screen justify-center items-center mx-auto w-3/4 md:[--from-x-first:-1000px]">
            <motion.div
              initial={{ x: "var(--from-x-first)" }}
              animate={{ x: 0 }}
              className="m-auto"
            >
              <motion.div
                initial={{ y: 0, x: 0 }}
                animate={{ y: "var(--to-y-second)", x: "var(--to-x-second)" }}
                transition={{ delay: 1.5, duration: 0.3 }}
                className="[--to-x-second:0px] [--to-y-second:-23vh] 
                md:[--to-x-second:-19vw] md:[--to-y-second:0px] xl:[--to-x-second:-300px] xl:[--to-y-second:0px] 2xl:[--to-x-second:-350px]"
              >
                <h2 className="text-7xl xl:text-8xl 2xl:text-9xl font-bold ">
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
                x: "var(--image-from-x, 0px)",
                opacity: 0,
              }}
              animate={{
                y: "var(--image-to-y)",
                x: "var(--image-to-x, 0px)",
                opacity: 1,
              }}
              transition={{ delay: 1.5, duration: 0.5, ease: "backInOut" }}
              className="absolute w-5/6 shadow-lg shadow-black overflow-x-hidden [--image-from-y:400px] [--image-to-y:50px] 
              md:w-5/12 lg:[--image-from-y:0px] md:[--image-to-y:0px] md:[--image-to-x:23vw] md:[--image-from-x:900px] 
              xl:w-5/12 xl:[--image-from-y:0px] xl:[--image-to-y:0px] xl:[--image-to-x:300px] xl:[--image-from-x:900px] 
              2xl:[--image-to-x:22vw]"
            >
              <img className="" src="camping.jpg" alt="" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0, x: -20 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <motion.div
                className="absolute bottom-8 m-auto text-4xl"
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
        <div className="second-page h-screen ">
          <div className="bg-white/75 text-black">
            <motion.h1
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-6xl font-semibold text-center pt-12"
            >
              What is PAL?
            </motion.h1>
            <motion.p className="p-8 text-sm ">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti
              pellentesque habitasse tellus gravida finibus. Neque dignissim
              lobortis hendrerit sed natoque sagittis ridiculus duis. Risus
              adipiscing lobortis volutpat praesent mi gravida mauris nostra
              purus. Consectetur vestibulum libero id augue dis enim parturient
              ornare. Integer gravida lobortis consectetur et nisl posuere
              sollicitudin. Cras molestie ac massa pharetra class cras nam.
              Torquent erat ad cubilia bibendum dis auctor.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
