import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader, RiskBadge, StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { comparableCases, formatGBP } from "@/lib/mock-data";

export const Route = createFileRoute("/app/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio comparison — CreditNarrate AI" },
      { name: "description", content: "Benchmark this borrower against comparable historic lending cases." },
      { property: "og:title", content: "Portfolio comparison — CreditNarrate AI" },
      { property: "og:description", content: "Benchmark this borrower against comparable historic lending cases." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const chartData = comparableCases.map((c) => ({
    name: c.company.split(" ")[0],
    amount: c.amount / 1_000_000,
  }));

  return (
    <div>
      <PageHeader
        title="Portfolio comparison"
        description="Northfield Foods Ltd benchmarked against five comparable cases from the last three years."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Comparable cases" value="5" detail="Food & wholesale sector" />
        <StatCard label="Median facility" value="£2.2M" detail="Range £1.85M – £3.0M" />
        <StatCard label="Approval rate" value="80%" detail="4 of 5 approved" />
        <StatCard label="Median DSCR" value="1.33x" detail="This case: 1.35x" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
        <Card className="border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Similar borrowers</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead className="text-right">Loan amount</TableHead>
                    <TableHead>DSCR</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Outcome</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparableCases.map((c) => (
                    <TableRow key={c.company}>
                      <TableCell className="font-medium">{c.company}</TableCell>
                      <TableCell className="text-muted-foreground">{c.industry}</TableCell>
                      <TableCell className="text-right tabular-nums">
                        {formatGBP(c.amount)}
                      </TableCell>
                      <TableCell className="tabular-nums">{c.dscr}</TableCell>
                      <TableCell>
                        <RiskBadge level={c.risk} />
                      </TableCell>
                      <TableCell className="text-muted-foreground">{c.outcome}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border/70 shadow-none">
            <CardHeader>
              <CardTitle className="text-base">Facility size (£M)</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ left: -20, right: 8, top: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={11} />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="amount" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="border-border/70 shadow-none">
            <CardContent className="p-5 text-sm leading-relaxed text-muted-foreground">
              <h3 className="text-sm font-semibold text-foreground">Lending pattern</h3>
              <p className="mt-2">
                Comparable food manufacturing facilities above £2M were approved with quarterly DSCR
                covenants and a stepped leverage covenant in four of five cases. The single decline
                had DSCR below 1.15x at drawdown, materially weaker than this application.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
