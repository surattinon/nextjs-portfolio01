import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="flex justify-center sm:justify-between fixed z-50 w-full">
      <div className="sm:block hidden bg-white/15 backdrop-blur-lg backdrop-brightness-50 px-7 py-3 m-4 border-[1px] border-gray-500 rounded-[10px]">
        <h1 className="text-xl">Basu</h1>
      </div>
      <nav className="justify-end bg-white/15 backdrop-blur-lg backdrop-brightness-50 px-7 py-3 m-4 border-[1px] border-gray-500 rounded-[10px]">
        <ul className="flex justify-center text-xl">
          <li className="mx-3">
            <Link className="text-white" href="/">
              Home
            </Link>
          </li>
          <li className="mx-3">
            <Link className="text-white" href="about">
              About
            </Link>
          </li>
          <li className="mx-3">
            <Link className="text-white" href="portfolio">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
