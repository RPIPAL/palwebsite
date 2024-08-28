import React, { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import SideNav from "../components/SideNav.tsx";

function Home() {
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
      </div>
    </>
  );
}

export default Home;
