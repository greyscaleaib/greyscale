import React from 'react';

function ProductCard({ title, description, image, link, id }) {
  return (
    <div className="bg-white p-0 shadow-md">
      <div className="h-64 bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#333333]">{title}</h3>
        <p className="mb-4 text-[#555555]">{description}</p>
        <a href={`#${id}`} className="text-[#F4098A] hover:underline uppercase font-bold">Explore →</a>
      </div>
    </div>
  );
}

function ProductShowcase() {
  const products = [
    {
      id: "greycon",
      title: "GREYCON PANELS (UHPC)",
      description: "Ultra-high-performance concrete with unprecedented strength and artistic potential.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "caststone",
      title: "CAST STONE PANELS",
      description: "Premium architectural cast stone with refined texture and timeless appeal.",
      image: "/api/placeholder/400/300"
    },
    {
      id: "bricks",
      title: "DESIGNER BRICKS",
      description: "Modular concrete elements for creative pattern work and statement walls.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-[#F0F0F0]">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#333333]">PRODUCT LINES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;