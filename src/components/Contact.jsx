import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#333333]">CONTACT US</h1>
        <div className="w-16 h-1 bg-[#F4098A] mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="font-mono">
            <h3 className="text-2xl font-bold mb-8 text-[#333333]">GET IN TOUCH</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-2 text-[#333333]">headquarters</h4>
              <p className="text-[#555555]">123 concrete ave</p>
              <p className="text-[#555555]">design district</p>
              <p className="text-[#555555]">new york, ny 10001</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-2 text-[#333333]">contact</h4>
              <p className="text-[#555555]">sales@greyscale.com</p>
              <p className="text-[#555555]">+1 (800) 555-0123</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-2 text-[#333333]">hours</h4>
              <p className="text-[#555555]">monday - friday: 9am - 6pm</p>
              <p className="text-[#555555]">saturday: by appointment</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2 text-[#333333]">connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#555555] hover:text-[#F4098A]">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="#" className="text-[#555555] hover:text-[#F4098A]">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-[#555555] hover:text-[#F4098A]">
                  <i className="fab fa-pinterest text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#333333]">SEND A MESSAGE</h3>
            <form className="space-y-6">
              <div>
                <label className="block font-mono text-sm mb-2 text-[#555555]" htmlFor="name">NAME</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-white border border-gray-300 p-3 text-[#333333]" 
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm mb-2 text-[#555555]" htmlFor="email">EMAIL</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-white border border-gray-300 p-3 text-[#333333]" 
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm mb-2 text-[#555555]" htmlFor="project">PROJECT TYPE</label>
                <select 
                  id="project"
                  className="w-full bg-white border border-gray-300 p-3 text-[#333333] appearance-none" 
                >
                  <option>Architectural Project</option>
                  <option>Interior Design</option>
                  <option>Commercial Development</option>
                  <option>Residential Design</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block font-mono text-sm mb-2 text-[#555555]" htmlFor="message">MESSAGE</label>
                <textarea 
                  id="message"
                  rows="5"
                  className="w-full bg-white border border-gray-300 p-3 text-[#333333]" 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-[#F4098A] hover:bg-white hover:text-[#F4098A] border-2 border-[#F4098A] text-white font-bold text-lg uppercase transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;