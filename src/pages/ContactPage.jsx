import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] font-['Montserrat']">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;