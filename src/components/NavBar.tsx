"use client";
import React from "react";
import PostCount from "./PostCount";

function NavBar({ count }: any) {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="text-lg font-bold">Your Logo</div>
      <div className="flex items-center">
        <div className="relative inline-block">
          <PostCount count={count} />
        </div>
        <ul className="flex justify-end items-center space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Link 3
            </a>
          </li>
        </ul>
        <div className="relative inline-block ml-4">
          <span className="cursor-pointer hover:text-gray-300">Profile</span>
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 hidden">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Profile Link 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Profile Link 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Profile Link 3
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
