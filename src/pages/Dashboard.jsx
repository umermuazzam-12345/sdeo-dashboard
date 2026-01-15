import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Sales</CardTitle>
                <CardDescription>
                  The total sales for the last month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$12,345</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>New Customers</CardTitle>
                <CardDescription>
                  The number of new customers in the last month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">123</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                  The total number of orders in the last month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">1,234</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  The total number of products in the store.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">12,345</p>
              </CardContent>
            </Card>
          </div>

        </main>
      </div>
    </div>
  );
}
