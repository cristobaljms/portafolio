"use client";
import { useRouter } from "next/navigation";

export default function Navbar2() {
  const navigation = useRouter();

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 mb-8">
      <div className="container mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nombre - Enlace al inicio */}
          <div className="flex items-center">
            <button 
              onClick={() => navigation.push("/")}
              className="text-xl lg:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
            >
              Cristóbal Muñoz
            </button>
          </div>

          {/* Botón Volver mejorado */}
          <button
            onClick={() => navigation.back()}
            className="group flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <svg 
              className="w-5 h-5 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium text-lg text-gray-700 group-hover:text-black transition-colors">
              Volver
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
