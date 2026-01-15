import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <Button>Logout</Button>
    </header>
  );
}
