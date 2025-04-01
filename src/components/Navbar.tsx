import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-gray-900 dark:text-white font-bold text-xl">
              TeranisAI
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/dashboard" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/ai-analysis" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  AI Analysis
                </Link>
                <a href="#features" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </a>
                <a href="#solutions" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Solutions
                </a>
                <a href="#about" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
                <a href="#contact" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ModeToggle />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent className="md:hidden">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our site.
                  </SheetDescription>
                </SheetHeader>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link to="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </Link>
                  <Link to="/dashboard" className="text-gray-500 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Dashboard
                  </Link>
                  <Link to="/ai-analysis" className="text-gray-500 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    AI Analysis
                  </Link>
                  <a href="#features" className="text-gray-500 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Features
                  </a>
                  <a href="#solutions" className="text-gray-500 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Solutions
                  </a>
                  <a href="#about" className="text-gray-500 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </a>
                  <a href="#contact" className="text-gray-500 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
