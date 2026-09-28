import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, RiskBadge, StatCard, StatusBadge } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { applicants, formatGBP, overviewStats } from "@/lib/mock-data";

export const Route = createFileRoute("/app/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — CreditNarrate AI" },
      { name: "description", content: "Credit officer dashboard with proposals, reviews and risk alerts." },
      { property: "og:title", content: "Dashboard — CreditNarrate AI" },
      { property: "og:description", content: "Credit officer dashboard with proposals, reviews and risk alerts." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Credit dashboard"
        description="Live view of proposal pipeline, review queue and open risk alerts."
        action={
          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <Link to="/app/new-proposal">Create new proposal</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/app/review">Review drafts</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/app/analytics">View analytics</Link>
            </Button>
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewStats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} detail={s.delta} />
        ))}
      </div>

      <Card className="mt-6 border-border/70 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Recent borrower applications</CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Borrower</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead className="text-right">Loan amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicants.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell className="font-medium">{a.borrower}</TableCell>
                    <TableCell className="text-muted-foreground">{a.company}</TableCell>
                    <TableCell className="text-muted-foreground">{a.industry}</TableCell>
                    <TableCell className="text-right tabular-nums">
                      {formatGBP(a.amount)}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={a.status} />
                    </TableCell>
                    <TableCell>
                      <RiskBadge level={a.risk} />
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
