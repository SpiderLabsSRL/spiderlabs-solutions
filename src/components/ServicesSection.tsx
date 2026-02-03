import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Headphones,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description: "Soluciones personalizadas adaptadas a las necesidades específicas de tu negocio, con código limpio y escalable.",
  },
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description: "Plataformas web modernas, responsivas y optimizadas para ofrecer la mejor experiencia de usuario.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas e híbridas para iOS y Android que conectan tu negocio con tus clientes.",
  },
  {
    icon: Database,
    title: "Gestión de Datos",
    description: "Sistemas de bases de datos eficientes y seguros para manejar la información de tu empresa.",
  },
  {
    icon: Shield,
    title: "Seguridad Informática",
    description: "Protección integral de tus sistemas y datos contra amenazas cibernéticas.",
  },
  {
    icon: Headphones,
    title: "Soporte Técnico",
    description: "Asistencia técnica continua y mantenimiento para garantizar el óptimo funcionamiento de tus sistemas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Lo Que Hacemos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar el crecimiento de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <button className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Saber más</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
