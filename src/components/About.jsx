import React from 'react';

function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div className="p-6 md:p-16 flex flex-col justify-center bg-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#333333]">ABOUT US</h2>
        <p className="mb-6 text-lg text-[#555555]">
          For four decades, GreyScale has redefined concrete as an artistic medium. 
          Our pioneering work with ultra-high-performance concrete (UHPC) brings 
          unprecedented strength and aesthetic potential to architectural surfaces.
        </p>
        <p className="mb-6 text-lg text-[#555555]">
          GreyCon, our signature innovation, merges industrial rawness with 
          design elegance, turning every wall into a testament to brutalist beauty.
        </p>
        <p className="text-lg text-[#555555]">
          Each panel and brick represents our commitment to transforming utilitarian 
          materials into design statements that architects and designers trust worldwide.
        </p>
      </div>
      <div className="bg-[#EEEEEE] flex items-center justify-center h-[400px] md:h-auto">
        <img 
          src="/api/placeholder/600/600" 
          alt="High-contrast concrete texture" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default About;