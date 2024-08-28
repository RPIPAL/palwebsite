import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoNewspaper } from "react-icons/io5";

function NavLinks(props) {
  return (
    <>
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
    </>
  );
}

export default NavLinks;
