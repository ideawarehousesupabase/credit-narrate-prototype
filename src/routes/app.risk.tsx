import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { PageHeader, RiskBadge, StatusBadge } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { riskFlags, verificationChecks } from "@/lib/mock-data";

export const Route = createFileRoute("/app/risk")({
  head: () => ({
    meta: [
      { title: "Risk dashboard — CreditNarrate AI" },
      { name: "description", content: "Risk flags and financial data verification for the credit proposal." },
      { property: "og:title", content: "Risk dashboard — CreditNarrate AI" },
      { property: "og:description", content: "Risk flags and financial data verification for the credit proposal." },
    ],
  }),
  component: RiskDashboard,
});

function RiskDashboard() {
  return (
    <div>
      <PageHeader
        title="Risk dashboard"
        description="Flags raised during analysis, with consistency checks between source data and the draft proposal."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {riskFlags.map((flag) => (
          <Card key={flag.title} className="border-border/70 shadow-none">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle
                    className={`h-4 w-4 ${
                      flag.severity === "High"
                        ? "text-destructive"
                        : flag.severity === "Medium"
                          ? "text-warning"
                          : "text-muted-foreground"
                    }`}
                  />
                  <h3 className="text-sm font-semibold">{flag.title}</h3>
                </div>
                <RiskBadge level={flag.severity} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {flag.explanation}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 border-border/70 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Data verification</CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Financial data</TableHead>
                  <TableHead>Proposal</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {verificationChecks.map((c) => (
                  <TableRow key={c.field}>
                    <TableCell className="font-medium">{c.field}</TableCell>
                    <TableCell className="tabular-nums text-muted-foreground">{c.source}</TableCell>
                    <TableCell className="tabular-nums text-muted-foreground">{c.proposal}</TableCell>
                    <TableCell>
                      <StatusBadge status={c.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
