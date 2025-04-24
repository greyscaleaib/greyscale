import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-6 flex justify-between items-center relative">
      <div className="text-3xl font-bold tracking-wider">
        <span className="text-[#333333]">GREY</span>
        <span className="text-[#F4098A]">SCALE</span>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-[#333333] text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'X' : '≡'}
      </button>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-8">
        <a href="#about" className="hover:underline text-sm text-[#333333]">ABOUT</a>
        <a href="#greycon" className="hover:underline text-sm text-[#333333]">GREYCON PANELS (UHPC)</a>
        <a href="#caststone" className="hover:underline text-sm text-[#333333]">CAST STONE PANELS</a>
        <a href="#bricks" className="hover:underline text-sm text-[#333333]">CONCRETE BRICKS</a>
        <a href="#sustainability" className="hover:underline text-sm text-[#333333]">SUSTAINABILITY</a>
        <a href="#contact" className="hover:underline text-sm text-[#333333]">CONTACT</a>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F5F5F5] z-50 border-t border-[#F4098A]">
          <div className="flex flex-col p-4">
            <a href="#about" className="py-3 border-b border-gray-200 hover:text-[#F4098A] text-[#333333]">ABOUT</a>
            <a href="#greycon" className="py-3 border-b border-gray-200 hover:text-[#F4098A] text-[#333333]">GREYCON PANELS (UHPC)</a>
            <a href="#caststone" className="py-3 border-b border-gray-200 hover:text-[#F4098A] text-[#333333]">CAST STONE PANELS</a>
            <a href="#bricks" className="py-3 border-b border-gray-200 hover:text-[#F4098A] text-[#333333]">CONCRETE BRICKS</a>
            <a href="#sustainability" className="py-3 border-b border-gray-200 hover:text-[#F4098A] text-[#333333]">SUSTAINABILITY</a>
            <a href="#contact" className="py-3 hover:text-[#F4098A] text-[#333333]">CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;