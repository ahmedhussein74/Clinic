import React from 'react'
import Nav from './Nav'
import img from '../images/bg.jpg'

const Home = () => {
  return (
    <section className="bg-cyan-950	h-screen">
      <Nav />
      <div className="home pt-12 flex justify-around items-center flex-wrap">
        <article>
          <span className="text-green-600">For Better Future</span>
          <h1 className="text-white text-xl md:text-2xl my-2">
            A Greate Place <br />
            To Recieve Care
          </h1>
          <p className="text-white">
            We are always fully focused on helping <br />
            your child and you
          </p>
          <div className="mt-3">
            <button className="btn text-white border border-green-600 px-5 py-1 rounded bg-green-600 mr-3">
              Get Qoute Now
            </button>
            <button className="btn text-white border border-green-600 px-5 py-1 rounded hover:bg-green-600 mr-3">
              Learn more
            </button>
          </div>
        </article>
        <img src={img} className="w-60 h-44 md:w-96 md:h-72 rounded-lg" />
      </div>
    </section>
  );
}

export default Home