import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/spiderlabs", color: "hover:bg-pink-500" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/spiderlabs", color: "hover:bg-blue-600" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/spiderlabs", color: "hover:bg-blue-700" },
];

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 3000);
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
                {[
                  { icon: Mail, label: "Email", value: "contacto@spiderlabs.com" },
                  { icon: Phone, label: "Teléfono", value: "+591 XXX XXX XX" },
                  { icon: MapPin, label: "Ubicación", value: "Bolivia" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-silver-300">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
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
                      <social.icon className="w-5 h-5" />
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
                    ¡Mensaje Enviado!
                  </h4>
                  <p className="text-muted-foreground">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo
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
                        Email
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
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300"
                      placeholder="+591 XXX XXX XX"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
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
                    <span>Enviar Mensaje</span>
                  </motion.button>
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
