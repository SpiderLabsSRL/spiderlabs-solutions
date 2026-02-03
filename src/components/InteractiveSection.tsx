import { useState } from "react";
import { 
  Dumbbell, 
  Stethoscope, 
  ShoppingCart, 
  Coffee, 
  Globe, 
  Store,
  X,
  User,
  Calendar,
  DollarSign,
  Package,
  Users,
  Search,
  Plus,
  Check,
  Clock,
  Heart
} from "lucide-react";

type DemoType = "gimnasio" | "clinica" | "ventas" | "cafeteria" | "landing" | "ecommerce" | null;

const demos = [
  { id: "gimnasio" as const, title: "Sistema Gimnasio", icon: Dumbbell, color: "from-orange-500 to-red-500" },
  { id: "clinica" as const, title: "Clínica Médica", icon: Stethoscope, color: "from-teal-500 to-cyan-500" },
  { id: "ventas" as const, title: "Gestión de Ventas", icon: ShoppingCart, color: "from-violet-500 to-purple-500" },
  { id: "cafeteria" as const, title: "Cafetería POS", icon: Coffee, color: "from-amber-500 to-orange-500" },
  { id: "landing" as const, title: "Landing Page", icon: Globe, color: "from-blue-500 to-indigo-500" },
  { id: "ecommerce" as const, title: "E-commerce", icon: Store, color: "from-emerald-500 to-green-500" },
];

// Mini Demo Components
const GymDemo = () => {
  const [members] = useState([
    { id: 1, name: "Carlos Pérez", plan: "Premium", status: "Activo" },
    { id: 2, name: "María García", plan: "Básico", status: "Activo" },
    { id: 3, name: "Juan López", plan: "VIP", status: "Vencido" },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold flex items-center gap-2">
          <Users className="w-4 h-4" /> Miembros del Gimnasio
        </h4>
        <button className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full flex items-center gap-1">
          <Plus className="w-3 h-3" /> Nuevo
        </button>
      </div>
      <div className="space-y-2">
        {members.map((m) => (
          <div key={m.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium text-sm">{m.name}</div>
                <div className="text-xs text-muted-foreground">Plan {m.plan}</div>
              </div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${m.status === "Activo" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ClinicDemo = () => {
  const [appointments] = useState([
    { id: 1, patient: "Ana Martínez", time: "09:00", doctor: "Dr. Rodríguez", type: "Consulta" },
    { id: 2, patient: "Pedro Sánchez", time: "10:30", doctor: "Dra. López", type: "Control" },
    { id: 3, patient: "Laura Torres", time: "11:00", doctor: "Dr. Rodríguez", type: "Urgencia" },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Citas de Hoy
        </h4>
        <span className="text-xs text-muted-foreground">3 pendientes</span>
      </div>
      <div className="space-y-2">
        {appointments.map((a) => (
          <div key={a.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <Clock className="w-4 h-4 text-accent mx-auto" />
                <div className="text-xs font-bold mt-1">{a.time}</div>
              </div>
              <div>
                <div className="font-medium text-sm">{a.patient}</div>
                <div className="text-xs text-muted-foreground">{a.doctor} • {a.type}</div>
              </div>
            </div>
            <button className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
              Atender
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const SalesDemo = () => {
  const [sales] = useState([
    { id: 1, product: "Laptop HP", qty: 2, total: 4500 },
    { id: 2, product: "Mouse Logitech", qty: 5, total: 250 },
    { id: 3, product: "Teclado Mecánico", qty: 3, total: 450 },
  ]);
  const total = sales.reduce((acc, s) => acc + s.total, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold flex items-center gap-2">
          <Package className="w-4 h-4" /> Nueva Venta
        </h4>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
          #{Math.floor(Math.random() * 9000 + 1000)}
        </span>
      </div>
      <div className="space-y-2">
        {sales.map((s) => (
          <div key={s.id} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg text-sm">
            <span>{s.product}</span>
            <span className="text-muted-foreground">x{s.qty}</span>
            <span className="font-semibold">Bs. {s.total}</span>
          </div>
        ))}
      </div>
      <div className="border-t pt-3 flex justify-between items-center">
        <span className="font-bold">Total:</span>
        <span className="text-xl font-bold text-accent">Bs. {total}</span>
      </div>
      <button className="w-full bg-navy-900 text-primary-foreground py-2 rounded-lg font-medium flex items-center justify-center gap-2">
        <DollarSign className="w-4 h-4" /> Procesar Venta
      </button>
    </div>
  );
};

const CoffeeDemo = () => {
  const [order, setOrder] = useState<string[]>([]);
  const menu = [
    { name: "Café Americano", price: 15 },
    { name: "Cappuccino", price: 20 },
    { name: "Latte", price: 22 },
    { name: "Espresso", price: 12 },
  ];

  return (
    <div className="space-y-4">
      <h4 className="font-semibold flex items-center gap-2">
        <Coffee className="w-4 h-4" /> Menú Rápido
      </h4>
      <div className="grid grid-cols-2 gap-2">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => setOrder([...order, item.name])}
            className={`p-3 rounded-lg border text-left transition-all ${
              order.includes(item.name) ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
            }`}
          >
            <div className="text-sm font-medium">{item.name}</div>
            <div className="text-xs text-accent font-bold">Bs. {item.price}</div>
          </button>
        ))}
      </div>
      {order.length > 0 && (
        <div className="bg-muted/50 p-3 rounded-lg">
          <div className="text-xs text-muted-foreground mb-1">Orden actual:</div>
          <div className="text-sm font-medium">{order.join(", ")}</div>
        </div>
      )}
    </div>
  );
};

const LandingDemo = () => (
  <div className="space-y-4 text-center">
    <div className="bg-gradient-to-r from-accent to-blue-400 text-accent-foreground py-6 px-4 rounded-lg">
      <h4 className="text-xl font-bold mb-2">Tu Empresa Aquí</h4>
      <p className="text-sm opacity-90">Soluciones innovadoras para tu negocio</p>
    </div>
    <div className="grid grid-cols-3 gap-2 text-center">
      {["Rápido", "Seguro", "Moderno"].map((f) => (
        <div key={f} className="p-3 bg-muted/50 rounded-lg">
          <Check className="w-5 h-5 text-accent mx-auto mb-1" />
          <span className="text-xs font-medium">{f}</span>
        </div>
      ))}
    </div>
    <button className="w-full bg-navy-900 text-primary-foreground py-3 rounded-lg font-medium">
      ¡Contáctanos Ahora!
    </button>
  </div>
);

const EcommerceDemo = () => {
  const [cart, setCart] = useState<number[]>([]);
  const products = [
    { id: 1, name: "Camiseta Premium", price: 89, img: "👕" },
    { id: 2, name: "Zapatillas Sport", price: 299, img: "👟" },
    { id: 3, name: "Reloj Digital", price: 199, img: "⌚" },
    { id: 4, name: "Mochila Urban", price: 149, img: "🎒" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input className="pl-8 pr-3 py-1.5 text-sm bg-muted/50 rounded-lg border-0 w-40" placeholder="Buscar..." />
        </div>
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {products.map((p) => (
          <div key={p.id} className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">{p.img}</div>
            <div className="text-xs font-medium truncate">{p.name}</div>
            <div className="text-sm font-bold text-accent">Bs. {p.price}</div>
            <button
              onClick={() => setCart([...cart, p.id])}
              className="mt-2 w-full text-xs bg-navy-900 text-primary-foreground py-1.5 rounded flex items-center justify-center gap-1"
            >
              {cart.includes(p.id) ? <Heart className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              {cart.includes(p.id) ? "Agregado" : "Agregar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const InteractiveSection = () => {
  const [activeDemo, setActiveDemo] = useState<DemoType>(null);

  const renderDemo = () => {
    switch (activeDemo) {
      case "gimnasio": return <GymDemo />;
      case "clinica": return <ClinicDemo />;
      case "ventas": return <SalesDemo />;
      case "cafeteria": return <CoffeeDemo />;
      case "landing": return <LandingDemo />;
      case "ecommerce": return <EcommerceDemo />;
      default: return null;
    }
  };

  return (
    <section id="pruebas" className="py-24 bg-navy-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Experiencia Práctica
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Pruebas de Software
          </h2>
          <p className="text-silver-300 max-w-2xl mx-auto">
            Explora ejemplos interactivos de los sistemas que desarrollamos. Haz clic en cualquier demo para probar una interfaz funcional.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                activeDemo === demo.id
                  ? "bg-card border-accent shadow-lg"
                  : "bg-navy-800/50 border-navy-600 hover:border-accent/50"
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${demo.color} flex items-center justify-center shadow-lg`}>
                <demo.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-sm font-medium text-center ${activeDemo === demo.id ? "text-foreground" : "text-silver-200"}`}>
                {demo.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        {activeDemo && (
          <div className="max-w-md mx-auto animate-fade-up">
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
              {/* Demo Header */}
              <div className={`bg-gradient-to-r ${demos.find(d => d.id === activeDemo)?.color} p-4 flex items-center justify-between`}>
                <div className="flex items-center gap-3 text-white">
                  {(() => {
                    const DemoIcon = demos.find(d => d.id === activeDemo)?.icon || Globe;
                    return <DemoIcon className="w-5 h-5" />;
                  })()}
                  <span className="font-semibold">{demos.find(d => d.id === activeDemo)?.title}</span>
                </div>
                <button 
                  onClick={() => setActiveDemo(null)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Demo Content */}
              <div className="p-6">
                {renderDemo()}
              </div>
            </div>
          </div>
        )}

        {/* Hint when no demo selected */}
        {!activeDemo && (
          <div className="text-center text-silver-300 animate-pulse">
            <p>👆 Selecciona una demo para interactuar</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveSection;
