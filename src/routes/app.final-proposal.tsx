import { createFileRoute } from "@tanstack/react-router";
import { Download, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { activeBorrower, financialRatios, formatGBP, proposalSections, riskFlags } from "@/lib/mock-data";

export const Route = createFileRoute("/app/final-proposal")({
  head: () => ({
    meta: [
      { title: "Final proposal — CreditNarrate AI" },
      { name: "description", content: "Completed credit proposal ready for export and submission." },
      { property: "og:title", content: "Final proposal — CreditNarrate AI" },
      { property: "og:description", content: "Completed credit proposal ready for export and submission." },
    ],
  }),
  component: FinalProposal,
});

function FinalProposal() {
  return (
    <div>
      <PageHeader
        title="Final credit proposal"
        description={`${activeBorrower.reference} · Approved by review · Ready for credit committee`}
        action={
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => toast("PDF export is a UI demonstration only.")}>
              <Download className="mr-1.5 h-4 w-4" /> Export PDF
            </Button>
            <Button onClick={() => toast.success("Proposal submitted to credit committee (demo).")}>
              <Send className="mr-1.5 h-4 w-4" /> Submit proposal
            </Button>
          </div>
        }
      />

      <Card className="border-border/70 shadow-none">
        <CardContent className="p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Borrower", activeBorrower.name],
              ["Company", activeBorrower.company],
              ["Facility requested", formatGBP(activeBorrower.amount)],
              ["Purpose", activeBorrower.purpose],
              ["Industry", activeBorrower.industry],
              ["Incorporated", activeBorrower.incorporated],
              ["Employees", String(activeBorrower.employees)],
              ["Location", activeBorrower.location],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{k}</p>
                <p className="mt-1 text-sm font-medium">{v}</p>
              </div>
            ))}
          </div>

          <Separator className="my-7" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {financialRatios.map((r) => (
              <div key={r.name} className="rounded-md bg-secondary p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{r.name}</p>
                <p className="mt-1 font-display text-xl font-semibold">{r.value}</p>
                <p className="text-xs text-muted-foreground">{r.status}</p>
              </div>
            ))}
          </div>

          <Separator className="my-7" />

          <div className="space-y-7">
            {proposalSections.map((s, i) => (
              <section key={s.id}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {i + 1}. {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{s.body}</p>
              </section>
            ))}
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                5. Risk register
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-foreground/85">
                {riskFlags.map((f) => (
                  <li key={f.title}>
                    <span className="font-medium">{f.title}</span> ({f.severity}) — {f.explanation}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
