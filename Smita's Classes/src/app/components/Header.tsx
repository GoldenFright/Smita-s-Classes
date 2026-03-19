import dalogo from "/src/assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded">
            <img
              src={dalogo}
              alt="Smita's Classes Logo"
              className="h-12 w-auto"
            />
          </div>
            <div>
              <h1 className="text-2xl font-bold text-[#022442]">Smita's Classes</h1>
              <p className="text-xs text-[#027E6F] font-semibold">#1 in Pune for ICSE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#027E6F] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#027E6F] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-gray-700 hover:text-[#027E6F] transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("branches")}
              className="text-gray-700 hover:text-[#027E6F] transition-colors"
            >
              Branches
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#027E6F] text-white px-6 py-2 rounded-lg hover:bg-[#02695D] transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#027E6F] transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#027E6F] transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-gray-700 hover:text-[#027E6F] transition-colors text-left"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("branches")}
              className="text-gray-700 hover:text-[#027E6F] transition-colors text-left"
            >
              Branches
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#027E6F] text-white px-6 py-2 rounded-lg hover:bg-[#02695D] transition-colors"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
