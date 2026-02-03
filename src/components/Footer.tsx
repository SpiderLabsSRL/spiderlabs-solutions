import logo from "@/assets/logo-spiderlabs.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-primary-foreground py-12 border-t border-navy-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="SpiderLabs Logo" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div>
              <span className="font-display font-bold text-lg">SPIDERLABS</span>
              <span className="text-silver-300 text-xs block -mt-1">SYSTEMS S.R.L.</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-silver-300 text-sm text-center">
            © {currentYear} SpiderLabs Systems S.R.L. Todos los derechos reservados.
          </div>

          {/* Social / Links */}
          <div className="flex items-center gap-4 text-silver-300 text-sm">
            <span>Software Development</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
