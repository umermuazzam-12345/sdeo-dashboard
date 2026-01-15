// Placeholder for icons
const Icon = () => <div className="w-5 h-5 bg-sidebar-foreground" />;
const Logo = () => <div className="w-8 h-8 rounded-full bg-sidebar-primary" />;

const navItems = [
  { name: "Dashboard", active: true },
  { name: "Assigned Requisitions" },
  { name: "Created Requisitions" },
  { name: "User Management" },
  { name: "Roster Management" },
  { name: "Shift Time Management" },
  { name: "Inventory Management" },
  { name: "Create Squad" },
  { name: "Roster History" },
  { name: "Feedback" },
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
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-sm ${
                  item.active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-primary/20"
                }`}
              >
                <Icon />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto p-4 border-t border-sidebar-border">
         <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm">
            <Icon />
           Log Out
         </a>
      </div>
    </aside>
  );
}
