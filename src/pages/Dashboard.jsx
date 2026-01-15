import SimpleLineChart from "@/components/charts/LineChart";
import SimplePieChart from "@/components/charts/PieChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// summary cards
const summaryCards = [
  { title: "Total Requisitions", value: 53 },
  { title: "Pending Requisitions", value: 0 },
  { title: "Squad Assigned Requisitions", value: 0 },
  { title: "Withdrawn Requisitions", value: 4 },
];

// challan stats
const challanStats = [
  {
    label: "Total Challans",
    count: 19,
    fineLabel: "TOTAL FINE",
    fine: "Rs. 135,000",
    color: "bg-[var(--chart-1)]",
    fineClass: "text-foreground",
  },
  {
    label: "Paid Challans",
    count: 0,
    fineLabel: "PAID FINE",
    fine: "Rs. 0",
    color: "bg-[var(--chart-2)]",
    fineClass: "text-green-600",
  },
  {
    label: "Unpaid Challans",
    count: 19,
    fineLabel: "UNPAID FINE",
    fine: "Rs. 135,000",
    color: "bg-[var(--chart-3)]",
    fineClass: "text-red-600",
  },
];

// charts
const charts = [
  {
    title: "Challan Trends",
    description: "Monthly challan trends",
    component: <SimpleLineChart />,
  },
  {
    title: "Challan Distribution",
    description: "Challan distribution by type",
    component: <SimplePieChart />,
  },
  {
    title: "New Users",
    description: "Monthly new users",
    component: <SimpleLineChart />,
  },
  {
    title: "Task Completion",
    description: "Task completion rate",
    component: <SimplePieChart />,
  },
  {
    title: "Revenue",
    description: "Monthly revenue",
    component: <SimpleLineChart />,
  },
  {
    title: "User Acquisition",
    description: "User acquisition channels",
    component: <SimplePieChart />,
  },
  {
    title: "Active Users",
    description: "Daily active users",
    component: <SimpleLineChart />,
  },
  {
    title: "Satisfaction",
    description: "User satisfaction score",
    component: <SimplePieChart />,
  },
  {
    title: "Ticket Resolution",
    description: "Ticket resolution time",
    component: <SimpleLineChart />,
  },
];

// Placeholder for icons
const Icon = ({ className }) => (
  <div className={`w-8 h-8 rounded-full ${className}`} />
);

export default function Dashboard() {
  return (
    <div className="flex-1 bg-background p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      {/* Top Summary Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <Button variant="link" className="px-0">
                View
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Challan Count Section */}
      <div className="mt-8 border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Challan Count (By Status)
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challanStats.map((item, index) => (
            <Card key={index} className="bg-accent">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Icon className={item.color} />
                <p className="text-lg font-semibold mt-4">{item.label}</p>
                <p className="text-3xl font-bold mt-2">{item.count}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  {item.fineLabel}:
                </p>
                <p className={`text-lg font-semibold ${item.fineClass}`}>
                  {item.fine}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 mt-8">
        {charts.map((chart, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{chart.title}</CardTitle>
              <CardDescription>{chart.description}</CardDescription>
            </CardHeader>
            <CardContent>{chart.component}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}