import React from 'react';

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-16">
      <h1 className="text-5xl md:text-8xl font-bold mb-4 tracking-tight leading-none text-[#333333]">
        EVERY WALL, <br />
        A WORK OF ART
      </h1>
      <p className="text-xl md:text-3xl mt-4 mb-8 font-light text-[#555555]">
        Concrete Wall Cladding, Elevated.
      </p>
      <div className="w-24 h-1 bg-[#F4098A]"></div>
    </section>
  );
}

export default Hero;