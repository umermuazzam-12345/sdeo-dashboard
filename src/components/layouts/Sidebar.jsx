import {
  LayoutDashboard,
  ClipboardList,
  PlusCircle,
  Users,
  Calendar,
  Clock,
  Warehouse,
  Shield,
  History,
  MessageSquare,
  LogOut,
} from "lucide-react";

const Logo = () => <div className="w-8 h-8 rounded-full bg-sidebar-primary" />;

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Assigned Requisitions", icon: ClipboardList },
  { name: "Created Requisitions", icon: PlusCircle },
  { name: "User Management", icon: Users },
  { name: "Roster Management", icon: Calendar },
  { name: "Shift Time Management", icon: Clock },
  { name: "Inventory Management", icon: Warehouse },
  { name: "Create Squad", icon: Shield },
  { name: "Roster History", icon: History },
  { name: "Feedback", icon: MessageSquare },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col h-screen w-[280px] bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
        <Logo />
        <h2 className="ml-3 text-sm font-semibold tracking-wider uppercase">
          Punjab Enforcement & Regulatory Authority
        </h2>
      </div>
      <nav className="flex-1 py-4 px-4">
        <ul>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-sm ${
                    item.active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "hover:bg-sidebar-primary/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto p-4 border-t border-sidebar-border">
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm">
          <LogOut className="w-5 h-5" />
          Log Out
        </a>
      </div>
    </aside>
  );
}
