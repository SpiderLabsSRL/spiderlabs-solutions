import { Target, Eye, Rocket, Users, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const MisionVisionSection = () => {
  return (
    <section id="mision-vision" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            type: "spring" as const,
            stiffness: 100,
            damping: 15
          }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Quiénes Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Nuestra Misión y Visión
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprometidos con la excelencia en el desarrollo de software
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Misión Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              type: "tween" as const,
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
              y: -6,
              transition: { type: "spring" as const, stiffness: 400, damping: 25 }
            }}
            className="group relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border hover:border-accent/30 transition-all duration-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.08, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
                  className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Target className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Misión
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Desarrollar soluciones de software personalizadas para diversos sectores, 
                adaptadas a las necesidades específicas de cada cliente. Nos enfocamos en 
                crear interfaces intuitivas, funcionales y eficientes, optimizando la 
                gestión empresarial mediante el uso de tecnología innovadora y confiable.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Users, label: "Clientes" },
                  { icon: Lightbulb, label: "Innovación" },
                  { icon: Rocket, label: "Eficiencia" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "tween" as const,
                      duration: 0.3,
                      delay: 0.1 + index * 0.05
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      transition: { type: "spring" as const, stiffness: 500, damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center p-3 rounded-lg bg-muted/50 cursor-pointer"
                  >
                    <item.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                    <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visión Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              type: "tween" as const,
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1
            }}
            whileHover={{ 
              y: -6,
              transition: { type: "spring" as const, stiffness: 400, damping: 25 }
            }}
            className="group relative bg-navy-900 rounded-2xl p-8 md:p-10 shadow-lg border border-navy-700 hover:border-accent/30 transition-all duration-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
                  className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/30"
                >
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                  Visión
                </h3>
              </div>

              <p className="text-silver-300 leading-relaxed mb-8 text-lg">
                Ser una empresa líder en soluciones de software por su calidad, 
                innovación y compromiso. Buscamos expandirnos ofreciendo herramientas 
                tecnológicas que impulsen la eficiencia, el crecimiento y el éxito 
                de nuestros clientes.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, label: "Liderazgo" },
                  { icon: Lightbulb, label: "Calidad" },
                  { icon: Rocket, label: "Crecimiento" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "tween" as const,
                      duration: 0.3,
                      delay: 0.15 + index * 0.05
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      transition: { type: "spring" as const, stiffness: 500, damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center p-3 rounded-lg bg-navy-800/50 cursor-pointer"
                  >
                    <item.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                    <span className="text-xs font-medium text-silver-300">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionSection;