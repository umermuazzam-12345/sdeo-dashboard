import SimpleLineChart from "@/components/charts/LineChart";
import SimplePieChart from "@/components/charts/PieChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Placeholder for icons
const Icon = ({ className }) => <div className={`w-8 h-8 rounded-full ${className}`} />;

export default function Dashboard() {
  return (
    <div className="flex-1 bg-background p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="secondary">Squad Management</Button>
          <Button>+ Take Notice</Button>
        </div>
      </div>

      {/* Top Summary Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Requisitions</CardTitle>
            {/* Icon Placeholder */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">53</div>
            <Button variant="link" className="px-0">View</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Requisitions</CardTitle>
            {/* Icon Placeholder */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <Button variant="link" className="px-0">View</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Squad Assigned Requisitions</CardTitle>
            {/* Icon Placeholder */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
             <Button variant="link" className="px-0">View</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Withdrawn Requisitions</CardTitle>
            {/* Icon Placeholder */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
             <Button variant="link" className="px-0">View</Button>
          </CardContent>
        </Card>
      </div>

      {/* Challan Count Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Challan Count (By Status)</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-accent">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Icon className="bg-[var(--chart-1)]" />
              <p className="text-lg font-semibold mt-4">Total Challans</p>
              <p className="text-3xl font-bold mt-2">19</p>
              <p className="text-sm text-muted-foreground mt-4">TOTAL FINE:</p>
              <p className="text-lg font-semibold text-foreground">Rs. 135,000</p>
            </CardContent>
          </Card>
           <Card className="bg-accent">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Icon className="bg-[var(--chart-2)]" />
              <p className="text-lg font-semibold mt-4">Paid Challans</p>
              <p className="text-3xl font-bold mt-2">0</p>
              <p className="text-sm text-muted-foreground mt-4">PAID FINE:</p>
              <p className="text-lg font-semibold text-green-600">Rs. 0</p>
            </CardContent>
          </Card>
           <Card className="bg-accent">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Icon className="bg-[var(--chart-3)]" />
              <p className="text-lg font-semibold mt-4">Unpaid Challans</p>
              <p className="text-3xl font-bold mt-2">19</p>
              <p className="text-sm text-muted-foreground mt-4">UNPAID FINE:</p>
              <p className="text-lg font-semibold text-red-600">Rs. 135,000</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Challan Trends</CardTitle>
             <CardDescription>Monthly challan trends</CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleLineChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Challan Distribution</CardTitle>
             <CardDescription>Challan distribution by type</CardDescription>
          </CardHeader>
          <CardContent>
            <SimplePieChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
