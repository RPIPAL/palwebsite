import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaDiscord } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="h-28 flex justify-around bg-black">
        <div className="flex flex-col w-full mx-auto text-xl lg:flex-row lg:justify-around m-2 lg:w-5/6 lg:items-center lg:text-2xl ">
          <div className="flex flex-col items-center lg:flex-row lg:w-1/2 *:ml-4 lg:justify-center">
            <i>Philippine American League</i>
            <i>Est. 1993</i>
          </div>

          <div className="flex w-2/3 m-auto justify-evenly text-4xl lg:text-5xl lg:w-1/2">
            <a
              href="https://www.instagram.com/rpi_pal/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://discord.gg/PFdCBrts"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>

            <a
              className="h-4/5"
              href="https://www.tiktok.com/@rpipal"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>
            <a href="https://x.com/rpi_pal" target="_blank" rel="noreferrer">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
