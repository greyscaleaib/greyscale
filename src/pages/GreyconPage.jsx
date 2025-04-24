import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function GreyconPage() {
  const productData = {
    id: "greycon",
    title: "GREYCON PANELS (UHPC)",
    description: "Our flagship ultra-high-performance concrete panels represent the pinnacle of architectural cladding. GreyCon combines exceptional strength with unprecedented design flexibility, allowing architects to create bold statements while maintaining structural integrity. Each panel features our proprietary mix design that delivers a 120+ MPa strength rating with refined texture control.",
    features: [
      "Exceptional strength-to-weight ratio, 6x stronger than conventional concrete",
      "Customizable textures and finishes, from ultra-smooth to deeply textured",
      "Integrates with smart building systems through embedded sensor capability",
      "Self-cleaning nanotechnology surface treatment",
      "Modular installation system for rapid deployment",
      "Fire-resistant and non-combustible (Class A fire rating)"
    ],
    specifications: {
      "Composition": "UHPC with steel fiber reinforcement",
      "Compressive Strength": "120+ MPa",
      "Flexural Strength": "15-20 MPa",
      "Thickness": "12-30mm standard range",
      "Panel Size": "Up to 1200 x 3000mm",
      "Weight": "30-75 kg/m² (depending on thickness)",
      "Water Absorption": "<0.1% by mass",
      "Fire Rating": "Class A (ASTM E84)",
      "Warranty": "25 years structural, 10 years finish"
    },
    images: [
      "/api/placeholder/800/600", // Main image
      "/api/placeholder/400/400", // Gallery image 1
      "/api/placeholder/400/400", // Gallery image 2
      "/api/placeholder/400/400"  // Gallery image 3
    ]
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] font-['Montserrat']">
      <Navbar />
      <ProductDetail 
        id={productData.id}
        title={productData.title}
        description={productData.description}
        features={productData.features}
        specifications={productData.specifications}
        images={productData.images}
      />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default GreyconPage;