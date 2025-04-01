
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-emerald-600">TeranisAI</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">Home</a>
            <a href="#features" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">Features</a>
            <a href="#solutions" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">Solutions</a>
            <a href="#about" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">About</a>
            <Button className="ml-4 bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">Home</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">Features</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">Solutions</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">About</a>
            <Button className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
