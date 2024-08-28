import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { IoClose, IoNewspaper } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function SideNav(props) {
  const [navScope, navAnimate] = useAnimate();
  const [linkScope, linkAnimate] = useAnimate();

  const toggleMenu = () => {
    props.setIsOpen((open) => !open);
    if (props.isOpen) {
      navAnimate(
        ".side-nav",
        { x: 1000 },
        {
          duration: 0.3,
        }
      );
    }
  };
  useEffect(() => {
    navAnimate(".side-nav", props.isOpen ? { x: 0 } : { x: 1000 }, {
      duration: 0.3,
    });
    linkAnimate(
      ".links",
      props.isOpen ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 },
      {
        delay: props.isOpen ? staggerMenuItems : 0,
      }
    );
  });
  return (
    <>
      <div ref={navScope}>
        <div
          className={`side-nav fixed h-screen w-11/12 rounded-l-xl bg-black right-0 z-10 text-white ${
            props.isOpen ? "" : "hidden"
          }`}
        >
          <div className="flex items-center justify-start mt-6">
            <img src="logo.png" alt="PAL logo" className="h-32 mx-12" />

            <IoClose
              onClick={toggleMenu}
              className=" ml-auto text-6xl cursor-pointer mr-10"
            />
          </div>
          <div
            ref={linkScope}
            className="flex flex-col mx-16 font-medium text-3xl h-1/2 justify-evenly *:flex *:items-center font-poppin"
          >
            <Link className="links" to="/">
              <MdHome className="text-4xl mr-3" />
              Home
            </Link>
            <Link className="links" to="/events">
              <FaCalendar className="mr-4" />
              Events
            </Link>
            <Link className="links" to="/media">
              <TiSocialInstagram className="mr-4" />
              Socials
            </Link>
            <Link className="links" to="/newsletter ">
              <IoNewspaper className="mr-4" />
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
