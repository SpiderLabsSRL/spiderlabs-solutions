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
  Heart,
  Trash2,
  Edit,
  ChevronRight,
  CreditCard,
  Activity,
  FileText,
  Star,
  Minus,
  Filter,
  Eye,
  Mail,
  Phone as PhoneIcon
} from "lucide-react";

type DemoType = "gimnasio" | "clinica" | "ventas" | "cafeteria" | "landing" | "ecommerce" | null;

const demos = [
  { id: "gimnasio" as const, title: "Sistema Gimnasio", icon: Dumbbell, color: "from-orange-500 to-red-500" },
  { id: "clinica" as const, title: "Clínica Médica", icon: Stethoscope, color: "from-teal-500 to-cyan-500" },
  { id: "ventas" as const, title: "Gestión de Ventas", icon: ShoppingCart, color: "from-violet-500 to-purple-500" },
  { id: "cafeteria" as const, title: "Cafetería", icon: Coffee, color: "from-amber-500 to-orange-500" },
  { id: "landing" as const, title: "Landing Page", icon: Globe, color: "from-blue-500 to-indigo-500" },
  { id: "ecommerce" as const, title: "E-commerce", icon: Store, color: "from-emerald-500 to-green-500" },
];

// ============ GIMNASIO DEMO ============
const GymDemo = () => {
  const [activeTab, setActiveTab] = useState<"members" | "classes" | "payments">("members");
  const [members, setMembers] = useState([
    { id: 1, name: "Carlos Pérez", plan: "Premium", status: "Activo", daysLeft: 25, photo: "👨" },
    { id: 2, name: "María García", plan: "Básico", status: "Activo", daysLeft: 12, photo: "👩" },
    { id: 3, name: "Juan López", plan: "VIP", status: "Vencido", daysLeft: 0, photo: "👨‍🦱" },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMemberName, setNewMemberName] = useState("");

  const addMember = () => {
    if (newMemberName.trim()) {
      setMembers([...members, {
        id: members.length + 1,
        name: newMemberName,
        plan: "Básico",
        status: "Activo",
        daysLeft: 30,
        photo: "🧑"
      }]);
      setNewMemberName("");
      setShowAddModal(false);
    }
  };

  const deleteMember = (id: number) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex bg-muted/50 rounded-lg p-1">
        {[
          { key: "members", label: "Miembros", icon: Users },
          { key: "payments", label: "Pagos", icon: CreditCard },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-medium transition-all ${
              activeTab === tab.key ? "bg-card shadow text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Members Tab */}
      {activeTab === "members" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 mr-2">
              <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input className="w-full pl-8 pr-3 py-2 text-sm bg-muted/50 rounded-lg border-0" placeholder="Buscar miembro..." />
            </div>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-accent text-accent-foreground px-3 py-2 rounded-lg flex items-center gap-1 text-xs font-medium hover:bg-accent/90 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Nuevo
            </button>
          </div>

          <div className="space-y-2 max-h-48 overflow-y-auto">
            {members.map((m) => (
              <div key={m.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-lg">
                    {m.photo}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{m.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="px-1.5 py-0.5 bg-accent/10 text-accent rounded text-[10px] font-medium">{m.plan}</span>
                      {m.daysLeft > 0 && <span>{m.daysLeft} días</span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${m.status === "Activo" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                    {m.status}
                  </span>
                  <button onClick={() => deleteMember(m.id)} className="opacity-0 group-hover:opacity-100 text-destructive p-1 hover:bg-destructive/10 rounded transition-all">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Modal */}
          {showAddModal && (
            <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowAddModal(false)}>
              <div className="bg-card p-6 rounded-xl shadow-xl w-72" onClick={e => e.stopPropagation()}>
                <h4 className="font-semibold mb-4">Nuevo Miembro</h4>
                <input
                  type="text"
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                  placeholder="Nombre completo"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background mb-4"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button onClick={() => setShowAddModal(false)} className="flex-1 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
                    Cancelar
                  </button>
                  <button onClick={addMember} className="flex-1 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Payments Tab */}
      {activeTab === "payments" && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-center">
              <DollarSign className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
              <div className="text-lg font-bold text-emerald-600">Bs. 4,500</div>
              <div className="text-[10px] text-muted-foreground">Ingresos del mes</div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-center">
              <Users className="w-5 h-5 text-amber-500 mx-auto mb-1" />
              <div className="text-lg font-bold text-amber-600">12</div>
              <div className="text-[10px] text-muted-foreground">Por renovar</div>
            </div>
          </div>
          <div className="text-xs font-medium text-muted-foreground">Últimos pagos</div>
          {[
            { name: "Carlos P.", amount: 150, date: "Hoy" },
            { name: "María G.", amount: 100, date: "Ayer" },
          ].map((p, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">{p.name}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">Bs. {p.amount}</div>
                <div className="text-[10px] text-muted-foreground">{p.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ============ CLÍNICA DEMO ============
const ClinicDemo = () => {
  const [activeView, setActiveView] = useState<"appointments" | "patients" | "history">("appointments");
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Ana Martínez", time: "09:00", doctor: "Dr. Rodríguez", type: "Consulta", status: "waiting" },
    { id: 2, patient: "Pedro Sánchez", time: "10:30", doctor: "Dra. López", type: "Control", status: "in-progress" },
    { id: 3, patient: "Laura Torres", time: "11:00", doctor: "Dr. Rodríguez", type: "Urgencia", status: "pending" },
  ]);

  const updateStatus = (id: number, status: string) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status } : a));
  };

  const patients = [
    { id: 1, name: "Ana Martínez", age: 32, lastVisit: "15/01/2025", conditions: ["Hipertensión"] },
    { id: 2, name: "Pedro Sánchez", age: 45, lastVisit: "20/01/2025", conditions: ["Diabetes", "Asma"] },
  ];

  return (
    <div className="space-y-4">
      {/* View Selector */}
      <div className="flex gap-2">
        {[
          { key: "appointments", label: "Citas", icon: Calendar },
          { key: "patients", label: "Pacientes", icon: Users },
          { key: "history", label: "Historial", icon: FileText },
        ].map((v) => (
          <button
            key={v.key}
            onClick={() => setActiveView(v.key as typeof activeView)}
            className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-medium transition-all ${
              activeView === v.key ? "bg-accent text-accent-foreground" : "bg-muted/50 text-muted-foreground hover:bg-muted"
            }`}
          >
            <v.icon className="w-3.5 h-3.5" />
            {v.label}
          </button>
        ))}
      </div>

      {/* Appointments View */}
      {activeView === "appointments" && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Hoy - 3 citas</span>
            <button className="text-accent flex items-center gap-1 hover:underline">
              <Plus className="w-3 h-3" /> Nueva cita
            </button>
          </div>
          {appointments.map((a) => (
            <div key={a.id} className="p-3 bg-muted/30 rounded-lg border-l-4 transition-all hover:bg-muted/50" style={{
              borderLeftColor: a.status === "in-progress" ? "#10b981" : a.status === "waiting" ? "#f59e0b" : "#94a3b8"
            }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{a.patient}</div>
                    <div className="text-[10px] text-muted-foreground">{a.doctor}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm font-semibold">
                    <Clock className="w-3 h-3" /> {a.time}
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    a.type === "Urgencia" ? "bg-red-100 text-red-700" : "bg-accent/10 text-accent"
                  }`}>{a.type}</span>
                </div>
              </div>
              <div className="flex gap-1">
                {a.status === "pending" && (
                  <button onClick={() => updateStatus(a.id, "waiting")} className="flex-1 py-1 text-[10px] bg-amber-100 text-amber-700 rounded hover:bg-amber-200 transition-colors">
                    Llamar
                  </button>
                )}
                {a.status === "waiting" && (
                  <button onClick={() => updateStatus(a.id, "in-progress")} className="flex-1 py-1 text-[10px] bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200 transition-colors">
                    Atender
                  </button>
                )}
                {a.status === "in-progress" && (
                  <button onClick={() => updateStatus(a.id, "completed")} className="flex-1 py-1 text-[10px] bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors">
                    Finalizar
                  </button>
                )}
                <button className="px-2 py-1 text-[10px] bg-muted rounded hover:bg-muted/80 transition-colors">
                  <FileText className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Patients View */}
      {activeView === "patients" && (
        <div className="space-y-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input className="w-full pl-8 pr-3 py-2 text-sm bg-muted/50 rounded-lg border-0" placeholder="Buscar paciente..." />
          </div>
          {patients.map((p) => (
            <div key={p.id} className="p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium text-sm">{p.name}</div>
                <span className="text-xs text-muted-foreground">{p.age} años</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {p.conditions.map((c, i) => (
                  <span key={i} className="text-[10px] px-1.5 py-0.5 bg-accent/10 text-accent rounded">{c}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Última visita: {p.lastVisit}</span>
                <button className="text-[10px] text-accent flex items-center gap-0.5 hover:underline">
                  Ver historial <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* History View */}
      {activeView === "history" && (
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground mb-2">Consultas recientes</div>
          {[
            { date: "02/02/2025", patient: "Ana M.", diagnosis: "Control presión arterial", doctor: "Dr. Rodríguez" },
            { date: "01/02/2025", patient: "Pedro S.", diagnosis: "Revisión diabetes", doctor: "Dra. López" },
            { date: "31/01/2025", patient: "Laura T.", diagnosis: "Dolor de cabeza", doctor: "Dr. Rodríguez" },
          ].map((h, i) => (
            <div key={i} className="p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{h.patient}</span>
                <span className="text-[10px] text-muted-foreground">{h.date}</span>
              </div>
              <div className="text-xs text-muted-foreground">{h.diagnosis}</div>
              <div className="text-[10px] text-accent mt-1">{h.doctor}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ============ VENTAS DEMO ============
const SalesDemo = () => {
  const products = [
    { id: 1, name: "Laptop HP 15", price: 2250, stock: 8, category: "Electrónica" },
    { id: 2, name: "Mouse Logitech MX", price: 50, stock: 25, category: "Accesorios" },
    { id: 3, name: "Teclado Mecánico", price: 150, stock: 12, category: "Accesorios" },
    { id: 4, name: "Monitor 24\" Samsung", price: 180, stock: 5, category: "Electrónica" },
  ];

  const [cart, setCart] = useState<{id: number; qty: number}[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (productId: number) => {
    const existing = cart.find(c => c.id === productId);
    if (existing) {
      setCart(cart.map(c => c.id === productId ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { id: productId, qty: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const existing = cart.find(c => c.id === productId);
    if (existing && existing.qty > 1) {
      setCart(cart.map(c => c.id === productId ? { ...c, qty: c.qty - 1 } : c));
    } else {
      setCart(cart.filter(c => c.id !== productId));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((acc, item) => {
      const product = products.find(p => p.id === item.id);
      return acc + (product?.price || 0) * item.qty;
    }, 0);
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-muted-foreground">Nueva Venta</div>
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
          #{Math.floor(Math.random() * 9000 + 1000)}
        </span>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input 
          className="w-full pl-8 pr-3 py-2 text-sm bg-muted/50 rounded-lg border-0" 
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
        {filteredProducts.map((p) => (
          <button
            key={p.id}
            onClick={() => addToCart(p.id)}
            className="p-2 bg-muted/30 rounded-lg text-left hover:bg-muted/50 transition-colors group"
          >
            <div className="text-xs font-medium truncate">{p.name}</div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-bold text-accent">Bs. {p.price}</span>
              <span className="text-[10px] text-muted-foreground">Stock: {p.stock}</span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 text-[10px] text-accent mt-1 transition-opacity">
              + Agregar
            </div>
          </button>
        ))}
      </div>

      {/* Cart */}
      {cart.length > 0 && (
        <div className="border-t pt-3 space-y-2">
          <div className="text-xs font-medium">Carrito ({cart.length} items)</div>
          {cart.map((item) => {
            const product = products.find(p => p.id === item.id);
            if (!product) return null;
            return (
              <div key={item.id} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <div className="text-xs font-medium truncate">{product.name}</div>
                  <div className="text-[10px] text-muted-foreground">Bs. {product.price} c/u</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => removeFromCart(item.id)} className="w-6 h-6 rounded bg-muted flex items-center justify-center hover:bg-destructive/20 transition-colors">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-semibold w-6 text-center">{item.qty}</span>
                  <button onClick={() => addToCart(item.id)} className="w-6 h-6 rounded bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-sm font-bold ml-3 w-20 text-right">Bs. {product.price * item.qty}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Total & Checkout */}
      <div className="border-t pt-3">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold">Total:</span>
          <span className="text-2xl font-bold text-accent">Bs. {getCartTotal()}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
            Efectivo
          </button>
          <button className="py-2 rounded-lg bg-navy-900 text-primary-foreground text-sm font-medium hover:bg-navy-800 transition-colors flex items-center justify-center gap-1">
            <CreditCard className="w-4 h-4" /> Tarjeta
          </button>
        </div>
      </div>
    </div>
  );
};

// ============ CAFETERÍA DEMO ============
const CoffeeDemo = () => {
  const [order, setOrder] = useState<{id: number; qty: number}[]>([]);
  const [category, setCategory] = useState("all");
  
  const menu = [
    { id: 1, name: "Café Americano", price: 15, category: "cafe", emoji: "☕" },
    { id: 2, name: "Cappuccino", price: 20, category: "cafe", emoji: "☕" },
    { id: 3, name: "Latte", price: 22, category: "cafe", emoji: "🥛" },
    { id: 4, name: "Espresso", price: 12, category: "cafe", emoji: "☕" },
    { id: 5, name: "Croissant", price: 18, category: "food", emoji: "🥐" },
    { id: 6, name: "Sandwich", price: 25, category: "food", emoji: "🥪" },
    { id: 7, name: "Cheesecake", price: 22, category: "food", emoji: "🍰" },
    { id: 8, name: "Jugo Natural", price: 15, category: "bebida", emoji: "🧃" },
  ];

  const addItem = (id: number) => {
    const existing = order.find(o => o.id === id);
    if (existing) {
      setOrder(order.map(o => o.id === id ? { ...o, qty: o.qty + 1 } : o));
    } else {
      setOrder([...order, { id, qty: 1 }]);
    }
  };

  const removeItem = (id: number) => {
    setOrder(order.filter(o => o.id !== id));
  };

  const getTotal = () => {
    return order.reduce((acc, item) => {
      const menuItem = menu.find(m => m.id === item.id);
      return acc + (menuItem?.price || 0) * item.qty;
    }, 0);
  };

  const filteredMenu = category === "all" ? menu : menu.filter(m => m.category === category);

  return (
    <div className="space-y-3">
      {/* Categories */}
      <div className="flex gap-1">
        {[
          { key: "all", label: "Todo" },
          { key: "cafe", label: "☕ Café" },
          { key: "food", label: "🍽️ Comida" },
          { key: "bebida", label: "🥤 Bebidas" },
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={`px-2 py-1 rounded-full text-[10px] font-medium transition-all ${
              category === cat.key ? "bg-accent text-accent-foreground" : "bg-muted/50 text-muted-foreground hover:bg-muted"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-4 gap-1.5">
        {filteredMenu.map((item) => {
          const inOrder = order.find(o => o.id === item.id);
          return (
            <button
              key={item.id}
              onClick={() => addItem(item.id)}
              className={`p-2 rounded-lg text-center transition-all hover:scale-105 ${
                inOrder ? "bg-accent/20 border-2 border-accent" : "bg-muted/30 border-2 border-transparent hover:border-accent/30"
              }`}
            >
              <div className="text-xl mb-0.5">{item.emoji}</div>
              <div className="text-[9px] font-medium truncate">{item.name}</div>
              <div className="text-[10px] font-bold text-accent">Bs.{item.price}</div>
              {inOrder && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center">
                  {inOrder.qty}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Order Summary */}
      {order.length > 0 && (
        <div className="bg-muted/30 rounded-lg p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Orden actual</span>
            <button onClick={() => setOrder([])} className="text-[10px] text-destructive hover:underline">Limpiar</button>
          </div>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {order.map((item) => {
              const menuItem = menu.find(m => m.id === item.id);
              if (!menuItem) return null;
              return (
                <div key={item.id} className="flex items-center justify-between text-xs">
                  <span>{menuItem.emoji} {menuItem.name} x{item.qty}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Bs. {menuItem.price * item.qty}</span>
                    <button onClick={() => removeItem(item.id)} className="text-destructive hover:bg-destructive/10 rounded p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-2 flex items-center justify-between">
            <span className="font-bold">Total:</span>
            <span className="text-xl font-bold text-accent">Bs. {getTotal()}</span>
          </div>
          <button className="w-full py-2 bg-navy-900 text-primary-foreground rounded-lg font-medium text-sm hover:bg-navy-800 transition-colors flex items-center justify-center gap-2">
            <CreditCard className="w-4 h-4" /> Cobrar
          </button>
        </div>
      )}
    </div>
  );
};

// ============ LANDING PAGE DEMO ============
const LandingDemo = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 2000);
    }
  };

  return (
    <div className="space-y-3">
      {/* Mini Navbar */}
      <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
        <div className="font-bold text-sm">TuMarca</div>
        <div className="flex gap-2">
          {["Inicio", "Servicios", "Contacto"].map((item, i) => (
            <button 
              key={item}
              onClick={() => setActiveSection(i)}
              className={`text-[10px] px-2 py-1 rounded transition-colors ${
                activeSection === i ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      {activeSection === 0 && (
        <div className="text-center py-4">
          <div className="bg-gradient-to-r from-accent to-blue-400 text-accent-foreground py-6 px-4 rounded-xl mb-4">
            <h4 className="text-lg font-bold mb-1">Transforma Tu Negocio</h4>
            <p className="text-xs opacity-90 mb-3">Soluciones digitales que impulsan tu crecimiento</p>
            <button className="bg-primary-foreground text-primary px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Comenzar Ahora
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: "⚡", label: "Rápido", desc: "Desarrollo ágil" },
              { icon: "🔒", label: "Seguro", desc: "Datos protegidos" },
              { icon: "📱", label: "Moderno", desc: "Última tecnología" },
            ].map((f) => (
              <div key={f.label} className="p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl mb-1">{f.icon}</div>
                <div className="text-xs font-semibold">{f.label}</div>
                <div className="text-[10px] text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Services Section */}
      {activeSection === 1 && (
        <div className="space-y-3">
          <h4 className="font-semibold text-center">Nuestros Servicios</h4>
          {[
            { icon: Globe, title: "Desarrollo Web", price: "Desde Bs. 500" },
            { icon: Store, title: "E-commerce", price: "Desde Bs. 800" },
            { icon: Activity, title: "Apps Móviles", price: "Desde Bs. 1200" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{s.title}</div>
                <div className="text-xs text-accent">{s.price}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
          ))}
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 2 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-center">Contáctanos</h4>
          
          {subscribed ? (
            <div className="text-center py-6 bg-emerald-50 rounded-lg">
              <Check className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-emerald-700">¡Gracias por suscribirte!</div>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background"
                />
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background"
                />
                <textarea 
                  placeholder="Tu mensaje..." 
                  rows={2}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background resize-none"
                />
              </div>
              <button 
                onClick={handleSubscribe}
                className="w-full py-2 bg-navy-900 text-primary-foreground rounded-lg font-medium text-sm hover:bg-navy-800 transition-colors"
              >
                Enviar Mensaje
              </button>
            </>
          )}

          <div className="flex justify-center gap-3 pt-2">
            {[Mail, PhoneIcon, Globe].map((Icon, i) => (
              <div key={i} className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============ ECOMMERCE DEMO ============
const EcommerceDemo = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const products = [
    { id: 1, name: "Camiseta Premium", price: 89, rating: 4.5, category: "ropa", img: "👕", stock: 15 },
    { id: 2, name: "Zapatillas Sport", price: 299, rating: 4.8, category: "calzado", img: "👟", stock: 8 },
    { id: 3, name: "Reloj Digital", price: 199, rating: 4.2, category: "accesorios", img: "⌚", stock: 12 },
    { id: 4, name: "Mochila Urban", price: 149, rating: 4.6, category: "accesorios", img: "🎒", stock: 20 },
    { id: 5, name: "Gorra Classic", price: 59, rating: 4.0, category: "accesorios", img: "🧢", stock: 30 },
    { id: 6, name: "Jeans Slim", price: 189, rating: 4.4, category: "ropa", img: "👖", stock: 10 },
  ];

  const toggleCart = (id: number) => {
    setCart(cart.includes(id) ? cart.filter(i => i !== id) : [...cart, id]);
  };

  const toggleWishlist = (id: number) => {
    setWishlist(wishlist.includes(id) ? wishlist.filter(i => i !== id) : [...wishlist, id]);
  };

  const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);
  const selectedProductData = products.find(p => p.id === selectedProduct);

  const getCartTotal = () => {
    return cart.reduce((acc, id) => {
      const product = products.find(p => p.id === id);
      return acc + (product?.price || 0);
    }, 0);
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="relative flex-1 mr-2">
          <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input className="w-full pl-7 pr-2 py-1.5 text-xs bg-muted/50 rounded-lg border-0" placeholder="Buscar..." />
        </div>
        <div className="flex gap-2">
          <button className="relative p-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
            <Heart className={`w-4 h-4 ${wishlist.length > 0 ? "text-red-500 fill-red-500" : ""}`} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>
          <button className="relative p-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
            <ShoppingCart className="w-4 h-4" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {[
          { key: "all", label: "Todo" },
          { key: "ropa", label: "Ropa" },
          { key: "calzado", label: "Calzado" },
          { key: "accesorios", label: "Accesorios" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-2 py-1 rounded-full text-[10px] font-medium whitespace-nowrap transition-all ${
              filter === f.key ? "bg-accent text-accent-foreground" : "bg-muted/50 text-muted-foreground hover:bg-muted"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Product Grid or Detail */}
      {selectedProduct ? (
        <div className="bg-muted/30 rounded-lg p-4">
          <button onClick={() => setSelectedProduct(null)} className="text-xs text-accent mb-2 flex items-center gap-1 hover:underline">
            ← Volver
          </button>
          <div className="text-center mb-3">
            <div className="text-5xl mb-2">{selectedProductData?.img}</div>
            <h4 className="font-semibold">{selectedProductData?.name}</h4>
            <div className="flex items-center justify-center gap-1 my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(selectedProductData?.rating || 0) ? "text-amber-400 fill-amber-400" : "text-muted"}`} />
              ))}
              <span className="text-xs text-muted-foreground ml-1">({selectedProductData?.rating})</span>
            </div>
            <div className="text-xl font-bold text-accent">Bs. {selectedProductData?.price}</div>
            <div className="text-xs text-muted-foreground">{selectedProductData?.stock} en stock</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleWishlist(selectedProduct)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors ${
                wishlist.includes(selectedProduct) ? "bg-red-100 text-red-600" : "bg-muted hover:bg-muted/80"
              }`}
            >
              <Heart className={`w-4 h-4 ${wishlist.includes(selectedProduct) ? "fill-red-500" : ""}`} />
            </button>
            <button
              onClick={() => toggleCart(selectedProduct)}
              className={`flex-[3] py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors ${
                cart.includes(selectedProduct) ? "bg-emerald-500 text-primary-foreground" : "bg-navy-900 text-primary-foreground hover:bg-navy-800"
              }`}
            >
              {cart.includes(selectedProduct) ? <><Check className="w-4 h-4" /> En carrito</> : <><ShoppingCart className="w-4 h-4" /> Agregar</>}
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {filteredProducts.map((p) => (
            <div 
              key={p.id} 
              className="bg-muted/30 rounded-lg p-2 text-center relative group cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => setSelectedProduct(p.id)}
            >
              <button 
                onClick={(e) => { e.stopPropagation(); toggleWishlist(p.id); }}
                className="absolute top-1 right-1 p-1 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className={`w-3 h-3 ${wishlist.includes(p.id) ? "text-red-500 fill-red-500" : ""}`} />
              </button>
              <div className="text-2xl mb-1">{p.img}</div>
              <div className="text-[10px] font-medium truncate">{p.name}</div>
              <div className="flex items-center justify-center gap-0.5 my-0.5">
                <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                <span className="text-[9px] text-muted-foreground">{p.rating}</span>
              </div>
              <div className="text-xs font-bold text-accent">Bs. {p.price}</div>
              <button
                onClick={(e) => { e.stopPropagation(); toggleCart(p.id); }}
                className={`w-full mt-1 py-1 rounded text-[10px] font-medium transition-colors ${
                  cart.includes(p.id) ? "bg-emerald-500 text-primary-foreground" : "bg-navy-900 text-primary-foreground hover:bg-navy-800"
                }`}
              >
                {cart.includes(p.id) ? "✓ Agregado" : "+ Agregar"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      {cart.length > 0 && !selectedProduct && (
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium">{cart.length} productos</div>
            <div className="text-lg font-bold text-accent">Bs. {getCartTotal()}</div>
          </div>
          <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors flex items-center gap-1">
            <Eye className="w-4 h-4" /> Ver Carrito
          </button>
        </div>
      )}
    </div>
  );
};

// ============ MAIN COMPONENT ============
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
            Explora ejemplos interactivos de los sistemas que desarrollamos. Cada demo es completamente funcional.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                activeDemo === demo.id
                  ? "bg-card border-accent shadow-lg scale-105"
                  : "bg-navy-800/50 border-navy-600 hover:border-accent/50"
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${demo.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <demo.icon className="w-6 h-6 text-primary-foreground" />
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
                <div className="flex items-center gap-3 text-primary-foreground">
                  {(() => {
                    const DemoIcon = demos.find(d => d.id === activeDemo)?.icon || Globe;
                    return <DemoIcon className="w-5 h-5" />;
                  })()}
                  <span className="font-semibold">{demos.find(d => d.id === activeDemo)?.title}</span>
                </div>
                <button 
                  onClick={() => setActiveDemo(null)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Demo Content */}
              <div className="p-5 max-h-[500px] overflow-y-auto">
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
