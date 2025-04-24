import React, { useState } from 'react';
import fractalImage from "./assets/fractal.jpg";
import greyconImage from "./assets/greycon.jpg";
import castImage from "./assets/cast.jpg";

// Main App Component
const App = () => {
  return (
    <div className="font-montserrat text-charcoal bg-white min-h-screen overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <Navbar />
      <Hero />
      <MaterialsIntro />
      <ProductShowcase />
      <SustainabilitySection />
      <FinishingOptions />
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="flex justify-between items-center py-4 px-4 md:px-16"> {/* Reduced mobile padding */}
        <div className="flex items-center">
          {/* Logo styling to match the provided image */}
          <span className="font-black text-2xl md:text-3xl tracking-tight leading-none">
            GREYSCALE<span className="align-top text-xs font-bold">TM</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {/* Using uppercase, black font weight for navigation items */}
          <a href="#materials" className="uppercase text-sm font-black tracking-wide hover:border-b-2 hover:border-pink transition-none">Materials</a>
          <a href="#products" className="uppercase text-sm font-black tracking-wide hover:border-b-2 hover:border-pink transition-none">Products</a>
          <a href="#sustainability" className="uppercase text-sm font-black tracking-wide hover:border-b-2 hover:border-green transition-none">Sustainability</a>
          <a href="#contact" className="uppercase text-sm font-black tracking-wide hover:border-b-2 hover:border-pink transition-none">Contact</a>
        </div>
        
        <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`w-6 h-0.5 bg-charcoal mb-1.5 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-charcoal mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-charcoal ${isMenuOpen ? 'transform -rotate-45' : ''}`}></div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 border-t border-gray-200">
          <div className="flex flex-col uppercase px-4 space-y-4"> {/* Reduced mobile padding */}
            <a href="#materials" className="text-sm font-black tracking-wide hover:border-b hover:border-pink transition-none py-2">Materials</a>
            <a href="#products" className="text-sm font-black tracking-wide hover:border-b hover:border-pink transition-none py-2">Products</a>
            <a href="#sustainability" className="text-sm font-black tracking-wide hover:border-b hover:border-green transition-none py-2">Sustainability</a>
            <a href="#contact" className="text-sm font-black tracking-wide hover:border-b hover:border-pink transition-none py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:py-0 px-4 md:px-0 flex flex-col md:flex-row items-center min-h-screen relative bg-white overflow-hidden">
      <div className="md:w-1/2 h-full order-2 md:order-1 px-4 md:px-16 flex items-center">
        <div className="max-w-lg pt-12 md:pt-0">
          <h1 className="font-bebas text-5xl md:text-8xl tracking-wide leading-none mb-8">
            EVERY WALL<br />A WORK OF ART
          </h1>
          <div className="w-16 h-1 bg-pink mb-8"></div>
          <p className="mb-8 text-lg">
            GreyScale specializes in high-end architectural concrete solutions, elevating raw concrete to art form through innovative technology and design.
          </p>
          <button className="bg-white border-2 border-charcoal uppercase font-bold text-sm px-10 py-3 hover:bg-pink hover:text-white hover:border-pink transition-none">
            Explore Materials
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 h-80 md:h-screen order-1 md:order-2 relative overflow-hidden bg-light-blue">
        <img 
          src="https://hypeandhyper.com/content/images/2022/06/50890-wotruba-kirche-kirche-zur-heiligsten-dreifaltigkeit-19to1-scaled-1.jpeg" 
          alt="Brutalist concrete architecture with angular forms against light blue sky" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-transparent z-10"></div>
      </div>
      
      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <div className="font-mono text-xs text-charcoal bg-white bg-opacity-70 px-4 py-2">
          Concrete. Refined.
        </div>
      </div>
    </section>
  );
};

// Materials Introduction Section
const MaterialsIntro = () => {
  const materials = [
    {
      name: "Concrete (UHPC)",
      compStrength: "45 MPA (n/mm)",
      flexuralStrength: "Minimal",
      density: 4,
      waterAbsorption: 2,
      waterUsage: "2.3%",
      recycledAggregate: "74.4%",
      description: "The first type of concrete we use is High-Performance Concrete (HPC) which is the result of extensive research and years of experience in the concrete industry. Our concrete mixtures are designed specifically for the production of panel tiles in our facility."
    },
    {
      name: "GreyCon",
      compStrength: "105 MPA (n/mm)",
      flexuralStrength: "15 MPA",
      density: 5,
      waterAbsorption: 1,
      waterUsage: "10.7%",
      recycledAggregate: "44.6%",
      description: "Unique to GreyScale, GreyCon is an in-house developed Architectural UHPC (Ultra-High-Performance Concrete) that results in twice the strength of traditional concrete with international assistance."
    },
    {
      name: "Cast Stone",
      compStrength: "45 MPA (n/mm)",
      flexuralStrength: "Minimal",
      density: 3.5,
      waterAbsorption: 2,
      waterUsage: "9%",
      recycledAggregate: "72%",
      description: "Cast Stone is a material composed of binding agent, carefully selected natural aggregates, and mineral additives. The unique combination enables cast stone to maintain the same durable physical properties that exceed those of most natural stones."
    }
  ];

  return (
    <section id="materials" className="py-24 px-8 md:px-16 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-1">
            <h2 className="font-bebas text-5xl tracking-wide mb-4">MATERIAL<br />DNA</h2>
            <div className="w-12 h-1 bg-pink mb-6"></div>
            <p className="text-sm mb-4">
              GreyScale specializes in three main technological ways to manufacture the end products.
            </p>
          </div>
          <div className="col-span-2 md:pl-8">
            <p className="text-lg mb-6">
              Our precise formulations and manufacturing processes result in architectural concrete that is both structurally superior and aesthetically refined. Each material has distinct properties that make it suitable for specific applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="border border-gray-200 p-8 bg-white">
              <h3 className="font-bebas text-3xl tracking-wide mb-4">{material.name}</h3>
              <div className="w-8 h-0.5 bg-pink mb-6"></div>
              <p className="text-sm mb-8">{material.description}</p>
              
              <div className="font-mono text-xs">
                <div className="flex justify-between py-2 border-t border-gray-200">
                  <span>Compressive Strength</span>
                  <span>{material.compStrength}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200">
                  <span>Flexural Strength</span>
                  <span>{material.flexuralStrength}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200">
                  <span>Material Density</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-4 h-2 mx-0.5 ${i < material.density ? 'bg-charcoal' : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200">
                  <span>Water Absorption</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-4 h-2 mx-0.5 ${i < material.waterAbsorption ? 'bg-charcoal' : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200">
                  <span>Water Usage</span>
                  <span>{material.waterUsage}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-b border-gray-200">
                  <span>Recycled Aggregate</span>
                  <span>{material.recycledAggregate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ProductShowcase = () => {
  const productSeries = [
    {
      name: "Fractal Series",
      description:
        "Sculptural concrete tiles with distinctive geometric patterns that create dramatic shadows and textures.",
      items: [
        "Chisel", "PO-2", "Flamenco",
        "Piano", "Kingston Town", "Legion",
        "Otho", "Amazonia", "Jigsaw"
      ],
      image: fractalImage
    },
    {
      name: "GreyCon Panels",
      description:
        "Ultra High-Performance Concrete panels with smooth, elegant finishes and superior structural properties.",
      items: [
        "Float", "Wave", "Ando",
        "Manhattan", "Endless Fields",
        "Asymetric", "Savannah",
        "Urban Playground", "Visions of Johanna", "Awash"
      ],
      image: greyconImage
    },
    {
      name: "Cast Stone Panels",
      description:
        "Material composed of binding agent, natural aggregates, and mineral additives that maintains durable physical properties exceeding those of natural stones.",
      items: [
        "Sicily", "Guilienne", "Corfu",
        "Easy Jones", "Havana", "Mozart",
        "Rumbaba", "Stone Henge", "Woody Creek"
      ],
      image: castImage
    }
  ]

  const [selectedProduct, setSelectedProduct] = useState(0)

  return (
    <section id="products" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">

          {/* Sidebar */}
          <div className="md:col-span-4">
            <h2 className="font-bebas text-5xl tracking-wide mb-4">
              PRODUCT<br />SERIES
            </h2>
            <div className="w-12 h-1 bg-pink mb-6"></div>
            <p className="text-sm mb-8">
              Our product series represents the pinnacle of architectural
              concrete design, each with unique characteristics and applications.
            </p>

            <div className="space-y-4">
              {productSeries.map((series, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedProduct(i)}
                  className={`block w-full text-left py-3 px-4 font-bebas text-xl tracking-wide
                    border-l-4
                    ${selectedProduct === i
                      ? "border-pink bg-light-gray"
                      : "border-transparent hover:border-gray-300"
                    }`}
                >
                  {series.name}
                </button>
              ))}
            </div>
          </div>

          {/* Image + Details */}
          <div className="md:col-span-8 bg-light-gray">
            {/* 16:9 aspect-ratio box */}
            <div className="w-full aspect-video relative overflow-hidden">
              <img
                src={productSeries[selectedProduct].image}
                alt={productSeries[selectedProduct].name}
                className="w-full h-full object-contain object-center"
              />
            </div>

            <div className="p-8">
              <p className="mb-8">
                {productSeries[selectedProduct].description}
              </p>

              <h4 className="font-bebas text-xl mb-4">PRODUCT RANGE</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {productSeries[selectedProduct].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-gray-200 bg-white font-mono text-sm"
                  >
                    {`${(idx + 1).toString().padStart(2, "0")} ${item}`}
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-white border-2 border-charcoal uppercase font-bold text-sm px-8 py-3
                hover:bg-pink hover:text-white hover:border-pink transition-none"
              >
                View Products
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Sustainability Section
const SustainabilitySection = () => {
  const stats = [
    { value: "70%", label: "Mining waste used" },
    { value: "60%", label: "Water reduction" },
    { value: "YES", label: "Photocatalytic self-cleaning" }
  ];

  return (
    <section id="sustainability" className="py-24 px-8 md:px-16 bg-light-green">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-bebas text-5xl tracking-wide mb-4">SUSTAINABILITY</h2>
            <div className="w-12 h-1 bg-pink mb-6"></div>
            <p className="text-lg mb-8">
              Sustainability has always been at the forefront of our ideation process. From the very beginning, we seamlessly integrated the use of mining waste in varying quantities across all our products.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-bebas text-4xl mb-2">{stat.value}</span>
                  <span className="uppercase text-sm font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <p className="mb-8">
              Through our innovative approach, we have successfully incorporated up to 50% of mining waste into our UHPC panels and up to 70% into our concrete and cast stone products.
            </p>
            
            <button className="bg-white border-2 border-green uppercase font-bold text-sm px-8 py-3 hover:bg-green hover:text-white hover:border-green transition-none">
              Learn More
            </button>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-white">
                <div className="font-mono mb-4 text-green text-3xl">NO₂</div>
                <p className="text-sm">
                  One of the things that sets the GreyScale UHPC apart from standard concrete on the market is its water-to-binder ratio. While standard concrete typically uses a ratio of 1:2, our UHPC has a ratio of 1:5, resulting in a significant 60% reduction in water content.
                </p>
              </div>
              
              <div className="p-8 bg-white">
                <div className="font-mono mb-4 text-xl">
                  <span className="text-3xl">H₂O</span>
                </div>
                <p className="text-sm">
                  Our products can not only be visually stunning but also functional. Besides standard options, we introduce titanium oxides to our products to give them a self-cleaning property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Finishing Options Section
const FinishingOptions = () => {
  const colorGroups = [
    {
      label: "Grey Tones",
      colors: [
        { code: "A1", name: "Skyfall", hex: "#E6E6E6" },
        { code: "B1", name: "Earl Grey", hex: "#A6A6A6" },
        { code: "C1", name: "Urban Dust", hex: "#787878" }
      ]
    },
    {
      label: "Earth Tones",
      colors: [
        { code: "D1", name: "Cinnamon Brown", hex: "#C18A70" },
        { code: "D2", name: "Terracotta", hex: "#BC6C4D" },
        { code: "E1", name: "Almond Beige", hex: "#D8C6B0" }
      ]
    },
    {
      label: "Accent Colors",
      colors: [
        { code: "A2", name: "Salmon", hex: "#F2B1A3" },
        { code: "B2", name: "Carmine Red", hex: "#C93033" },
        { code: "E2", name: "Tuscan Yellow", hex: "#F2CD88" }
      ]
    },
    {
      label: "Muted Tones",
      colors: [
        { code: "A3", name: "Indie Ochre", hex: "#D99E59" },
        { code: "B3", name: "Apricot Tan", hex: "#E6B787" },
        { code: "E3", name: "Moss Green", hex: "#A7BC9B" }
      ]
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-bebas text-5xl tracking-wide mb-4">GRAIN<br />FINISH</h2>
            <div className="w-12 h-1 bg-pink mb-6"></div>
            <p className="mb-8">
              Our grain finish removes the cement skin layer to expose what's underneath the sheets. Exposed sand grains enhance the visual beauty of our concrete panels.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="h-48 bg-gray-200"></div>
              <div className="h-48 bg-gray-300"></div>
            </div>
            
            <p className="mt-8 text-sm italic">
              The texture can be varied from light to heavy exposure, creating different aesthetic effects.
            </p>
          </div>
          
          <div>
            <h2 className="font-bebas text-5xl tracking-wide mb-4">COLOUR<br />MASTER SHEET</h2>
            <div className="w-12 h-1 bg-pink mb-6"></div>
            <p className="mb-8">
              The tiles and panels are manufactured in controlled manufacturing environments using a consistent proportion of pigments for each batch. However, because concrete is a natural material, slight variations in color will always occur. Existing tones and powder variations in tone and texture make the material naturally unique.
            </p>
            
            <div className="space-y-8">
              {colorGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h4 className="font-bebas text-xl mb-4">{group.label}</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {group.colors.map((color, colorIndex) => (
                      <div key={colorIndex} className="flex flex-col">
                        <div 
                          className="h-12 w-full mb-2" 
                          style={{ backgroundColor: color.hex }}
                        ></div>
                        <div className="flex justify-between text-xs">
                          <span className="font-mono">{color.code}</span>
                          <span>{color.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-sm italic">
              Aside from the colours that are shown above, we can custom create any shade to match your requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-light-gray py-16 px-8 md:px-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="font-bebas text-4xl tracking-wider">
              GREY<span className="text-pink">SCALE</span>
            </span>
            <p className="mt-4 mb-8">Every Wall, a Work of Art</p>
            <p className="font-mono text-sm mb-2">High-end architectural concrete solutions</p>
            <p className="font-mono text-sm mb-8">Established 1983</p>
          </div>
          
          <div>
            <h4 className="font-bebas text-xl mb-4">CONTACT</h4>
            <div className="font-mono text-sm space-y-2">
              <p>info@greyscale.com</p>
              <p>+1 (800) 555-7890</p>
              <p>123 Concrete Ave.</p>
              <p>Design District</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bebas text-xl mb-4">FOLLOW</h4>
            <div className="space-y-2">
              <a href="#" className="block font-mono text-sm underline">Instagram</a>
              <a href="#" className="block font-mono text-sm underline">Pinterest</a>
              <a href="#" className="block font-mono text-sm underline">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 font-mono text-xs">
          <p>© 2025 GreyScale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;

/* Tailwind CSS classes for custom colors */
/* In a real project, these would be in the tailwind.config.js file */
/*
  colors: {
    'pink': '#F4098A',
    'green': '#0BB04A',
    'charcoal': '#201C1E',
    'light-gray': '#F5F5F5',
    'light-pink': '#FCEDF5',
    'light-green': '#C4E3D0',
  }
  
  fontFamily: {
    'bebas': ['Bebas Neue Pro', 'sans-serif'],
    'montserrat': ['Montserrat', 'sans-serif'],
    'mono': ['PT Mono', 'monospace'],
  }
*/