import { NavLink } from "react-router-dom";
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
  ChevronLeft,
} from "lucide-react";

const Logo = () => <div className="w-8 h-8 rounded-full bg-sidebar-primary" />;

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Assigned Requisitions", path: "/assigned-requisitions", icon: ClipboardList },
  { name: "Created Requisitions", path: "/created-requisitions", icon: PlusCircle },
  { name: "User Management", path: "/user-management", icon: Users },
  { name: "Roster Management", path: "/roster-management", icon: Calendar },
  { name: "Shift Time Management", path: "/shift-time-management", icon: Clock },
  { name: "Inventory Management", path: "/inventory-management", icon: Warehouse },
  { name: "Create Squad", path: "/create-squad", icon: Shield },
  { name: "Roster History", path: "/roster-history", icon: History },
  { name: "Feedback", path: "/feedback", icon: MessageSquare },
];

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  return (
    <aside
      className={`relative hidden lg:flex flex-col h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ${
        isCollapsed ? "w-[72px]" : "w-[280px]"
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-16 w-6 h-6 rounded-full bg-sidebar-accent text-sidebar-accent-foreground flex items-center justify-center"
      >
        <ChevronLeft size={16} className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`} />
      </button>

      <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
        <Logo />
        {!isCollapsed && (
          <h2 className="ml-3 text-sm font-semibold tracking-wider uppercase whitespace-nowrap">
            Punjab Enforcement & Regulatory Authority
          </h2>
        )}
      </div>
      <nav className="flex-1 py-4 px-4">
        <ul>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-sm ${
                      isCollapsed ? "justify-center" : ""
                    } ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "hover:bg-sidebar-primary/20"
                    }`
                  }
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto p-4 border-t border-sidebar-border">
        <a href="#" className={`flex items-center gap-3 px-3 py-2 text-sm ${isCollapsed ? "justify-center" : ""}`}>
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="whitespace-nowrap">Log Out</span>}
        </a>
      </div>
    </aside>
  );
}
