import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-spiderlabs.jpg";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#mision-vision", label: "Misión y Visión" },
  { href: "#servicios", label: "Servicios" },
  { href: "#pruebas", label: "Pruebas Interactivas" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="SpiderLabs Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <span className="text-primary-foreground font-display font-bold text-lg">
                SPIDERLABS
              </span>
              <span className="text-silver-300 text-xs block -mt-1">
                SYSTEMS S.R.L.
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-silver-200 hover:text-primary-foreground transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-navy-700 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-silver-200 hover:text-primary-foreground transition-colors duration-300 text-sm font-medium text-left py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
