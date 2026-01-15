import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AssignedRequisitions from "./pages/placeholders/AssignedRequisitions";
import CreatedRequisitions from "./pages/placeholders/CreatedRequisitions";
import UserManagement from "./pages/placeholders/UserManagement";
import RosterManagement from "./pages/placeholders/RosterManagement";
import ShiftTimeManagement from "./pages/placeholders/ShiftTimeManagement";
import InventoryManagement from "./pages/placeholders/InventoryManagement";
import CreateSquad from "./pages/placeholders/CreateSquad";
import RosterHistory from "./pages/placeholders/RosterHistory";
import Feedback from "./pages/placeholders/Feedback";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";

function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex-1 flex flex-col">
        <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
      <Route path="/assigned-requisitions" element={<DashboardLayout><AssignedRequisitions /></DashboardLayout>} />
      <Route path="/created-requisitions" element={<DashboardLayout><CreatedRequisitions /></DashboardLayout>} />
      <Route path="/user-management" element={<DashboardLayout><UserManagement /></DashboardLayout>} />
      <Route path="/roster-management" element={<DashboardLayout><RosterManagement /></DashboardLayout>} />
      <Route path="/shift-time-management" element={<DashboardLayout><ShiftTimeManagement /></DashboardLayout>} />
      <Route path="/inventory-management" element={<DashboardLayout><InventoryManagement /></DashboardLayout>} />
      <Route path="/create-squad" element={<DashboardLayout><CreateSquad /></DashboardLayout>} />
      <Route path="/roster-history" element={<DashboardLayout><RosterHistory /></DashboardLayout>} />
      <Route path="/feedback" element={<DashboardLayout><Feedback /></DashboardLayout>} />
    </Routes>
  );
}

export default App;
