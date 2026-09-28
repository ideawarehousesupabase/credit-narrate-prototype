import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader, StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activeBorrower, financialRatios, marginTrend, revenueTrend } from "@/lib/mock-data";

export const Route = createFileRoute("/app/financial-analysis")({
  head: () => ({
    meta: [
      { title: "Financial analysis — CreditNarrate AI" },
      { name: "description", content: "Revenue trends, ratios and financial summary for the borrower." },
      { property: "og:title", content: "Financial analysis — CreditNarrate AI" },
      { property: "og:description", content: "Revenue trends, ratios and financial summary for the borrower." },
    ],
  }),
  component: FinancialAnalysis,
});

function FinancialAnalysis() {
  return (
    <div>
      <PageHeader
        title="Financial analysis"
        description={`${activeBorrower.company} · ${activeBorrower.industry} · Reference ${activeBorrower.reference}`}
        action={
          <Button asChild>
            <Link to="/app/ai-proposal">Generate AI proposal</Link>
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {financialRatios.map((r) => (
          <StatCard key={r.name} label={r.name} value={r.value} detail={`${r.benchmark} · ${r.status}`} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Revenue and EBITDA (£M)</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrend} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="year" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke="var(--primary)"
                  fill="var(--primary)"
                  fillOpacity={0.15}
                />
                <Area
                  type="monotone"
                  dataKey="ebitda"
                  name="EBITDA"
                  stroke="var(--accent)"
                  fill="var(--accent)"
                  fillOpacity={0.15}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Margin trend (%)</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marginTrend} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="year" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="gross" name="Gross margin" stroke="var(--primary)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="net" name="Net margin" stroke="var(--destructive)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 border-border/70 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Financial summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            Company shows stable revenue growth with moderate debt exposure. Turnover rose from
            £4.2M to £7.0M over five years at a 13.6% compound growth rate, supported by volume on
            existing retailer contracts.
          </p>
          <p>
            Profitability has weakened: gross margin fell from 31% to 27% and net margin from 8.4%
            to 6.1%, reflecting ingredient and energy cost pressure. Liquidity is adequate
            (current ratio 1.62) and debt service cover of 1.35x clears the 1.25x policy floor with
            limited headroom.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
