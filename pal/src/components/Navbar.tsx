import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoNewspaper } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
function Navbar(props) {
  return (
    <>
      <div
        className={`h-20 lg:h-28 bg-black rounded-b-lg flex justify-between items-center px-6 z-10`}
      >
        <Link className="links" to="/">
          <img src="logo.png" alt="PAL logo" className="h-14 lg:h-20" />
        </Link>

        <MdOutlineMenu
          onClick={props.toggleMenu}
          className={`text-white text-4xl cursor-pointer ${
            props.isOpen ? "hidden" : ""
          } lg:hidden`}
        />
        <div className=" max-lg:hidden flex *:flex *:items-center text-2xl font-poppins flex-row w-1/2 justify-around">
          <Link className="links" to="/events">
            <FaCalendar className="mr-2" />
            Events
          </Link>
          <Link className="links" to="/social">
            <TiSocialInstagram className="mr-2" />
            Socials
          </Link>
          <Link className="links" to="/newsletter ">
            <IoNewspaper className="mr-2" />
            Newsletter
          </Link>
          <Link className="links" to="https://account.venmo.com/u/JesseyJames">
            <TbMoneybag className="mr-2" />
            Donate
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
