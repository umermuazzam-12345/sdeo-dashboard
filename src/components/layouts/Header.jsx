import { Menu } from "lucide-react";

// Placeholder for user avatar
const Avatar = () => <div className="w-10 h-10 rounded-full bg-muted" />;

export default function Header({ setIsMobileMenuOpen }) {
  return (
    <header className="flex h-16 items-center justify-between lg:justify-end border-b bg-sidebar px-6">
      <button
        className="lg:hidden text-sidebar-foreground"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold text-sidebar-foreground">Noman Sdeo</p>
          <p className="text-sm text-muted-foreground">Sub Divisional Enforcement Officer, PERA HQ</p>
        </div>
        <Avatar />
      </div>
    </header>
  );
}
