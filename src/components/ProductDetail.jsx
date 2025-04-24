import React from 'react';

function ProductDetail({ id, title, description, features, specifications, images }) {
  return (
    <section id={id} className="pt-16 pb-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6 md:px-16">
        {/* Product Header */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#333333]">{title}</h1>
        <div className="w-16 h-1 bg-[#F4098A] mb-12"></div>
        
        {/* Product Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xl mb-8 text-[#555555]">{description}</p>
            <h3 className="text-2xl font-bold mb-4 text-[#333333]">KEY FEATURES</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-[#555555]">
                  <span className="text-[#F4098A] mr-2">—</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img 
              src={images[0]} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Product Gallery */}
        <h3 className="text-3xl font-bold mb-6 text-[#333333]">GALLERY</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {images.slice(1, 4).map((image, index) => (
            <div key={index} className="h-64">
              <img 
                src={image} 
                alt={`${title} application ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Technical Specifications */}
        <div className="bg-white p-8 font-mono shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-[#333333]">TECHNICAL SPECIFICATIONS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {Object.entries(specifications).map(([key, value], index) => (
              <div key={index} className="border-b border-gray-200 pb-2">
                <span className="text-gray-500">{key}: </span>
                <span className="text-[#333333]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;