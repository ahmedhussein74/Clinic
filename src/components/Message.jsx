import React from "react";

const Message = () => {
  return (
    <section className="w-full bg-cyan-950 py-20">
      <span className="block text-center text-green-600 text-xl">
        Newsletter
      </span>
      <h2 className="text-center text-white font-bold text-3xl md:text-5xl my-3">
        JOIN US
      </h2>
      <p className="text-white text-center">
        Problems trying to resolve conflict between
        <br />
        the two major realms of classical physics: newtonain mechanics
      </p>
      <div className="w-80 md:w-1/2 h-8 md:h-10 mx-auto flex rounded overflow-hidden mt-5">
        <input
          type="email"
          placeholder=" Your Email"
          className="w-3/4 h-full outline-none"
        />
        <button className="w-1/4 h-full bg-green-600 text-white">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Message;
