import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-16 py-12 bg-[#333333] text-white font-mono lowercase">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="mb-4 text-lg">contact</h3>
          <p>info@greyscale.com</p>
          <p>+1 (800) 555-0123</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg">address</h3>
          <p>123 concrete ave</p>
          <p>design district</p>
          <p>new york, ny 10001</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg">connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#F4098A]">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-[#F4098A]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#F4098A]">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-600">
        <p>© 2025 greyscale. all rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;