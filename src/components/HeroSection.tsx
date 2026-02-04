import { ArrowRight, Code2, Sparkles, Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import logoBackground from "@/assets/logo-background.png";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/spiderlabs", color: "hover:bg-pink-500" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/spiderlabs", color: "hover:bg-blue-600" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/spiderlabs", color: "hover:bg-blue-700" },
];

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-navy-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Logo Background - Full Section with Blur */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <img 
          src={logoBackground} 
          alt="" 
          className="w-[80%] max-w-4xl h-auto opacity-[0.08] blur-[2px]"
        />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-700/50 border border-navy-600 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-silver-200 text-sm font-medium">Software Development Company</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6"
          >
            Transformamos Ideas en
            <span className="block mt-2 bg-gradient-to-r from-accent to-blue-300 bg-clip-text text-transparent">
              Soluciones Digitales
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-silver-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Desarrollamos software personalizado con interfaces intuitivas y funcionales, 
            optimizando la gestión empresarial mediante tecnología innovadora y confiable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-300 shadow-glow hover:shadow-lg"
            >
              <span>Contáctanos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-8 py-4 border border-silver-300/30 hover:border-silver-300/50 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:bg-navy-700/50"
            >
              <Code2 className="w-5 h-5" />
              <span>Ver Servicios</span>
            </motion.button>
          </motion.div>

          {/* Social Media Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 bg-navy-800/60 border border-navy-600 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:text-primary-foreground hover:border-transparent`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-silver-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
