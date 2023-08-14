import React from "react";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="flex justify-center flex-wrap text-gray-500">
        <ul className="w-64 md:64 my-5 text-center text-lg">
          <li className="font-bold mb-2 text-green-600 text-xl">
            Company Info
          </li>
          <li>About us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg">
          <li className="font-bold mb-2 text-green-600 text-xl">Legal</li>
          <li>About us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg">
          <li className="font-bold mb-2 text-green-600 text-xl">Features</li>
          <li>Busniess Marketing</li>
          <li>User Analytic</li>
          <li>Live Chat</li>
          <li>Unlimted Support</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg">
          <li className="font-bold mb-2 text-green-600 text-xl">Resources</li>
          <li>IOS & Android</li>
          <li>Watch and Demo</li>
          <li>Custmors</li>
          <li>API</li>
        </ul>
      </div>
      <p className="pt-5 flex justify-center">
        <a href="https://www.linkedin.com/in/ahmed-hussein-23b95b1b8">
          <i className="fa-brands fa-linkedin text-3xl mx-5 mb-3 hover:text-green-600"></i>
        </a>
        <a href="https://github.com/ahmedhussein74">
          <i className="fa-brands fa-square-github text-3xl mx-5 mb-3 hover:text-green-600"></i>
        </a>
        <a href="https://www.facebook.com/AhmedHusein22/">
          <i className="fa-brands fa-square-facebook text-3xl mx-5 mb-3 hover:text-green-600"></i>
        </a>
        <a href="mailto:ahmedhusseinofficial22@gmail.com">
          <i className="fa-solid fa-envelope text-3xl mx-5 mb-3 hover:text-green-600"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
