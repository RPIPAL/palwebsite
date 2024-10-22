import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaDiscord } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="h-28 mb-12 flex justify-around bg-black">
        <div className="flex flex-col w-full mx-auto text-xl lg:flex-row lg:justify-around m-2 lg:w-5/6 lg:items-center lg:text-2xl ">
          <div className="flex flex-col items-center lg:flex-row lg:w-1/2 *:ml-4 lg:justify-center">
            <i>Philippine American League</i>
            <i>Est. 1993</i>
          </div>

          <div className="flex w-2/3 m-auto justify-evenly text-4xl lg:text-5xl lg:w-1/2">
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
