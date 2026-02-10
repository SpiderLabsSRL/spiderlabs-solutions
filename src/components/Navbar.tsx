import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const navRef = useRef<HTMLElement>(null);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    
    // Primero cerramos el menú
    setIsOpen(false);
    
    // Pequeño delay para que se cierre el menú antes de hacer scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      
      if (element) {
        // Calcular la posición del navbar fijo
        const navbarHeight = 80; // Altura aproximada del navbar en px
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        // Fallback para querySelector
        const elementByQuery = document.querySelector(href);
        if (elementByQuery) {
          const elementPosition = elementByQuery.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 80;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }, 300); // Tiempo suficiente para que se cierre la animación del menú
  };

  // Función específica para móviles con manejo más robusto
  const handleMobileClick = (href: string) => {
    // Forzar el cierre inmediato
    setIsOpen(false);
    
    // Esperar al siguiente ciclo de renderizado
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
          // Usar scrollIntoView con opciones
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        } else {
          // Intentar con offset manual
          setTimeout(() => {
            const targetElement = document.querySelector(href);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 350);
        }
      });
    });
  };

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-700"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("#inicio")}
          >
            <img 
              src={logo} 
              alt="SpiderLabs Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div>
              <span className="text-primary-foreground font-display font-bold text-lg">
                SPIDERLABS
              </span>
              <span className="text-silver-300 text-xs block -mt-1">
                SYSTEMS S.R.L.
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(link.href)}
                className="text-silver-200 hover:text-primary-foreground transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4 border-t border-navy-700 overflow-hidden bg-navy-900"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <button
                    key={link.href}
                    onClick={() => handleMobileClick(link.href)}
                    className="text-silver-200 hover:text-primary-foreground hover:bg-navy-800 transition-all duration-300 text-sm font-medium text-left py-3 px-6 rounded-md mx-2"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;