import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaDiscord } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="h-28 mb-12 flex justify-around">
        <div className="flex flex-col w-5/12 mx-auto">
          <i>Philippine American League</i>
          <i>Est. 1993</i>
        </div>
        <div className="w-1/2">
          <b className="text-xl">Follow us:</b>
          <div className="flex justify-evenly mt-4 text-4xl">
            <FaInstagram />
            <FaDiscord />
            <FaTiktok />
            <FaSquareXTwitter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
