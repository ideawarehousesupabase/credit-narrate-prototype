import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader, StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { analyticsStats, proposalActivity, riskCategories } from "@/lib/mock-data";

export const Route = createFileRoute("/app/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — CreditNarrate AI" },
      { name: "description", content: "Proposal volume, time saved and risk category analytics." },
      { property: "og:title", content: "Analytics — CreditNarrate AI" },
      { property: "og:description", content: "Proposal volume, time saved and risk category analytics." },
    ],
  }),
  component: Analytics,
});

function Analytics() {
  return (
    <div>
      <PageHeader
        title="Analytics"
        description="Team performance across generated proposals, review outcomes and risk themes."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {analyticsStats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} detail={s.detail} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Proposal activity</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={proposalActivity} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="generated" name="Generated" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="approved" name="Approved" fill="var(--accent)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Risk categories identified</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={riskCategories}
                layout="vertical"
                margin={{ left: 40, right: 16, top: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis
                  type="category"
                  dataKey="category"
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  width={100}
                />
                <Tooltip />
                <Bar dataKey="count" fill="var(--primary)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
