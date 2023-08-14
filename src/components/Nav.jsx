import React from "react";
import { useState } from "react";

const Nav = () => {
  const [view, setView] = useState(false);

  const changeHeight = () => {
    if (view) {
      setView(false);
      document.querySelector("nav").style.height = "50px";
    } else {
      setView(true);
      document.querySelector("nav").style.height = "300px";
    }
  };

  return (
    <nav className="bg-slate-900 w-full flex flex-wrap justify-between overflow-hidden px-3">
      <header className="text-white font-bold text-xl md:text-2xl flex items-center">
        MedicalBetter
      </header>
      <i
        onClick={changeHeight}
        className="fa-solid fa-bars block md:hidden text-white text-xl flex items-center"
      ></i>
      <aside className="w-full md:w-fit flex flex-wrap justify-center md:justify-around">
        <a
          href="#"
          className="w-full md:w-fit text-white text-xl flex items-center mx-0 md:mx-2"
        >
          Home
        </a>
        <a
          href="#"
          className="w-full md:w-fit text-white text-xl flex items-center mx-0 md:mx-2"
        >
          Product
        </a>
        <a
          href="#"
          className="w-full md:w-fit text-white text-xl flex items-center mx-0 md:mx-2"
        >
          Pricing
        </a>
        <a
          href="#"
          className="w-full md:w-fit text-white text-xl flex items-center mx-0 md:mx-2"
        >
          Contact
        </a>
      </aside>
      <div className="btns flex items-center">
        <button className="btn text-white border border-green-600 px-5 py-1 rounded hover:bg-green-600 mx-2">
          Login
        </button>
        <button className="btn text-white border border-green-600 px-5 py-1 rounded bg-green-600 mx-2">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Nav;
