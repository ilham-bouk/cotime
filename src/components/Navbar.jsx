import { Menu, X } from "lucide-react";
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const Links = [
    {name: "Menu", href:"#menu", section: "menu"},
    {name: "Categories", href:"#categories", section: "categories"},
    {name: "About", href:"#about", section: "about"},
    {name: "Testimonial", href:"#testimonial", section: "testimonial"},
    {name: "Contact", href:"#contact", section: "contact"},
  ]

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#2d2d2d]">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#hero"
        onClick={(e) => scrollToSection(e, 'hero')}
        className="text-2xl font-bold text-gray-100">
          Co<span className="text-[#e3985a]">Time</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-8 md:gap-0 lg:gap-8 text-gray-100 font-medium">
          {Links.map((link) => (
            <li key={link.name}>
              <a href={link.href}
              onClick={(e) => scrollToSection(e, link.section)}
              className="hover:text-white hover:bg-[#b6723c] rounded-full px-4 py-3 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden text-[#da9258]">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#2d2d2d] py-4 space-y-4 text-center font-medium text-gray-100">
          {Links.map((link) => (
            <a key={link.name} href={link.href}
            onClick={(e) => {
              scrollToSection(e, link.section);
              setIsOpen(false);
            }} 
            className="block hover:text-[#e3985a]">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar