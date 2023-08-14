import React from "react";

const Appoinment = () => {
  return (
    <section className="py-16">
      <article className="w-64 md:w-80 mx-auto md:mx-20">
        <span className="text-green-600">Practice Advice</span>
        <h1 className="font-bold text-xl md:text-2xl">Online Appoinment</h1>
        <p className="text-gray-500">
          Problems try to resolve the conflict between the two major realms of
          classical phiyscal newtonain mechanics
        </p>
      </article>
      <div className="flex justify-center flex-wrap mt-12">
        <div className="card w-64 md:w-80 shadow-lg m-3 px-2 py-6 hover:bg-green-600 rounded hover:text-white">
          <i className="fa-solid fa-heart-pulse text-3xl text-indigo-500 bg-white flex justify-center rounded w-12 py-2"></i>
          <h2 className="font-bold py-2 text-xl">Emergency Case</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card w-64 md:w-80 shadow-lg m-3 px-2 py-3 hover:bg-green-600 rounded hover:text-white">
          <i className="fa-solid fa-clipboard-list text-3xl text-indigo-500 bg-white flex justify-center rounded w-12 py-2"></i>
          <h2 className="font-bold py-2 text-xl">Canser Care</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card w-64 md:w-80 shadow-lg m-3 px-2 py-3 hover:bg-green-600 rounded hover:text-white">
          <i className="fa-solid fa-staff-snake text-3xl text-indigo-500 bg-white flex justify-center rounded w-12 py-2"></i>
          <h2 className="font-bold py-2 text-xl">Dental Surgenos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card w-64 md:w-80 shadow-lg m-3 px-2 py-3 hover:bg-green-600 rounded hover:text-white">
          <i className="fa-solid fa-book-medical text-3xl text-indigo-500 bg-white flex justify-center rounded w-12 py-2"></i>
          <h2 className="font-bold py-2 text-xl">Book Now</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
