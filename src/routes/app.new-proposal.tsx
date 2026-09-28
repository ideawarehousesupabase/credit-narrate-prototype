import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/app/new-proposal")({
  head: () => ({
    meta: [
      { title: "New credit proposal — CreditNarrate AI" },
      { name: "description", content: "Start a borrower assessment and run AI-assisted analysis." },
      { property: "og:title", content: "New credit proposal — CreditNarrate AI" },
      { property: "og:description", content: "Start a borrower assessment and run AI-assisted analysis." },
    ],
  }),
  component: NewProposal,
});

const steps = [
  "Ingesting borrower details",
  "Parsing financial statements",
  "Calculating ratios and covenants",
  "Benchmarking against portfolio",
  "Drafting proposal narrative",
];

function NewProposal() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  function startAnalysis(e: React.FormEvent) {
    e.preventDefault();
    setStarted(true);
    setStep(0);
    steps.forEach((_, i) => {
      setTimeout(() => setStep(i + 1), (i + 1) * 700);
    });
  }

  return (
    <div>
      <PageHeader
        title="New credit proposal"
        description="Capture the borrower request to begin an AI-assisted assessment."
      />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="border-border/70 shadow-none">
          <CardContent className="p-6">
            <form onSubmit={startAnalysis} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="borrower">Borrower name</Label>
                  <Input id="borrower" required defaultValue="Helena Marsh" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Company name</Label>
                  <Input id="company" required defaultValue="Northfield Foods Ltd" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="industry">Industry</Label>
                  <Input id="industry" required defaultValue="Food Manufacturing" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="amount">Loan amount requested (GBP)</Label>
                  <Input id="amount" type="number" required defaultValue={2400000} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="purpose">Loan purpose</Label>
                <Textarea
                  id="purpose"
                  rows={4}
                  required
                  defaultValue="Plant expansion and working capital to support two new retailer contracts."
                />
              </div>
              <Button type="submit">Start analysis</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-none">
          <CardContent className="p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Analysis workflow
            </h2>
            {!started ? (
              <p className="mt-3 text-sm text-muted-foreground">
                Submit the borrower request to run the simulated analysis pipeline.
              </p>
            ) : (
              <ol className="mt-4 space-y-3">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-sm">
                    {i < step ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    ) : (
                      <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-muted-foreground" />
                    )}
                    <span className={i < step ? "text-foreground" : "text-muted-foreground"}>
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            )}
            {started && step >= steps.length ? (
              <div className="mt-5 space-y-2">
                <p className="text-sm text-success">Analysis complete for CP-2041.</p>
                <Button asChild className="w-full">
                  <Link to="/app/financial-analysis">View financial analysis</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/app/documents">Go to documents</Link>
                </Button>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
