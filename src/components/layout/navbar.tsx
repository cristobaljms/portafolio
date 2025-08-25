"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#experience", label: "Experiencia" },
    { href: "#work", label: "Trabajo" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nombre */}
          <div className="flex items-center">
            <Link href="/" className="text-xl lg:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              Cristóbal Muñoz
            </Link>
          </div>

          {/* Menú Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="font-medium text-lg lg:text-xl text-gray-700 hover:text-black transition-all duration-300 relative group px-3 py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa para móvil */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Menú móvil */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="pt-4 pb-2 space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="block font-medium text-lg text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 px-4 py-3 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
