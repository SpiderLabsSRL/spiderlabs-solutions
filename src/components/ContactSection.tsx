import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, Instagram, Facebook, Linkedin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// Componente SVG del logo oficial de WhatsApp
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
  </svg>
);

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/spiderlabs.srl?igsh=NXRrNmo2N3U0d2xy&utm_source=qr", color: "hover:bg-pink-500" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61567902863647&locale=es_LA", color: "hover:bg-blue-600" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/spiderlabssrl/", color: "hover:bg-blue-700" },
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/59167461937", color: "hover:bg-green-600" },
];

const services = [
  "Sistema Gimnasio",
  "Clínica Médica", 
  "Gestión de ventas",
  "Cafetería",
  "Landing Page",
  "E-commerce"
];

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleServiceSelect = (service: string) => {
    setFormState((prev) => ({ ...prev, service }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir el mensaje de WhatsApp
    const whatsappMessage = `*Nuevo contacto desde el sitio web:*%0A%0A` +
      `*Nombre:* ${formState.name}%0A` +
      `*Email:* ${formState.email}%0A` +
      `*Teléfono:* ${formState.phone}%0A` +
      `*Servicio de interés:* ${formState.service}%0A` +
      `*Mensaje:* ${formState.message}%0A%0A` +
      `_Este mensaje fue enviado desde el formulario de contacto de SpiderLabs_`;
    
    // Abrir WhatsApp con el mensaje predefinido
    window.open(`https://wa.me/59167461937?text=${whatsappMessage}`, '_blank');
    
    // Mostrar estado de enviado
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ 
        name: "", 
        email: "", 
        phone: "", 
        service: "", 
        message: "" 
      });
    }, 3000);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:spiderlabssrl@gmail.com?subject=Consulta desde el sitio web&body=Hola SpiderLabs, me gustaría obtener más información sobre sus servicios.";
  };

  const handlePhoneClick = () => {
    window.open("https://wa.me/59167461937", '_blank');
  };

  const handleLocationClick = () => {
    // Enlace a Google Maps con la dirección específica
    window.open("https://maps.google.com/?q=Calle+San+Martin+y+Sucre,+Cochabamba+Bolivia", '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-muted/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Hablemos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos listos para ayudarte a convertirlo en realidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-navy-900 rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-display font-bold mb-6">
                Información de Contacto
              </h3>
              <p className="text-silver-300 mb-8 leading-relaxed">
                Estamos disponibles para atender tus consultas y comenzar a trabajar juntos en tu próximo proyecto.
              </p>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={handleEmailClick}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-silver-300">Email</div>
                    <div className="font-medium hover:text-accent transition-colors">spiderlabssrl@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={handlePhoneClick}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-silver-300">Teléfono</div>
                    <div className="font-medium hover:text-accent transition-colors">+591 67461937</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={handleLocationClick}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-silver-300">Ubicación</div>
                    <div className="font-medium hover:text-accent transition-colors">
                      Calle San Martín y Sucre,<br />
                      Cochabamba - Bolivia
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-navy-700">
                <div className="text-sm text-silver-300 mb-4">Síguenos en redes sociales</div>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:text-primary-foreground`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-silver-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-2">
                    ¡Redirigiendo a WhatsApp!
                  </h4>
                  <p className="text-muted-foreground">
                    Se abrirá WhatsApp para que puedas enviar tu mensaje.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </motion.div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono*
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300"
                      placeholder="+591 XXX XXX XX"
                    />
                  </div>

                  <div className="mb-6 relative">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Servicio de interés *
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 text-left flex justify-between items-center"
                      >
                        <span className={formState.service ? "text-foreground" : "text-muted-foreground"}>
                          {formState.service || "Selecciona un servicio"}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute z-10 w-full mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                        >
                          <div className="py-1 max-h-60 overflow-auto">
                            {services.map((service) => (
                              <button
                                key={service}
                                type="button"
                                onClick={() => handleServiceSelect(service)}
                                className="w-full px-4 py-3 text-left hover:bg-muted transition-colors duration-200 text-foreground"
                              >
                                {service}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                    {formState.service && (
                      <p className="mt-2 text-sm text-accent">
                        Seleccionado: {formState.service}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 hover:bg-navy-800 text-primary-foreground rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar por WhatsApp</span>
                  </motion.button>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    * Al hacer clic en "Enviar por WhatsApp", se abrirá la aplicación con tu mensaje predefinido
                  </p>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;