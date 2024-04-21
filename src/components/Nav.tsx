import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, fas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(fas);

function Nav() {
  return (
    <div className="flex justify-around fixed z-50 w-full my-4">
      <div className="bg-white/10 backdrop-blur-lg backdrop-brightness-50 px-7 py-3 m-4 border-[1px] border-gray-500 rounded-[10px]">
        <Link href="/">
          <h1 className="sm:text-2xl text-xl">&gt;_basu</h1>
        </Link>
      </div>
      <nav className="bg-white/10 backdrop-blur-lg backdrop-brightness-50 px-7 py-3 m-4 border-[1px] border-gray-500 rounded-[10px] transition-opacity">
        <ul className="sm:hidden flex justify-center hover:text-gray-400">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#ffffff", width: "25px" }}
          />
        </ul>
        <ul className="sm:flex hidden justify-center sm:text-2xl text-xl text-white">
          <li className="mx-4 hover:text-gray-400 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-4 hover:text-gray-400 transition-colors">
            <Link href="about">About</Link>
          </li>
          <li className="mx-4 hover:text-gray-400 transition-colors">
            <Link href="portfolio">Portfolio</Link>
          </li>
          <li className="mx-4 hover:text-gray-400 transition-colors">
            <Link href="https://github.com/surattinon" target="_blank">
              <FontAwesomeIcon icon={faGithub} style={{ width: "30px" }} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
