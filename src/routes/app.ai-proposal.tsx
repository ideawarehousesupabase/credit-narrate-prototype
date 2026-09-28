import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { activeBorrower, formatGBP, proposalSections } from "@/lib/mock-data";

export const Route = createFileRoute("/app/ai-proposal")({
  head: () => ({
    meta: [
      { title: "AI proposal draft — CreditNarrate AI" },
      { name: "description", content: "AI-generated credit proposal draft with sourced narrative sections." },
      { property: "og:title", content: "AI proposal draft — CreditNarrate AI" },
      { property: "og:description", content: "AI-generated credit proposal draft with sourced narrative sections." },
    ],
  }),
  component: AiProposal,
});

function AiProposal() {
  return (
    <div>
      <PageHeader
        title="AI credit proposal draft"
        description="Generated from the borrower file, uploaded statements and portfolio benchmarks."
        action={
          <Button asChild>
            <Link to="/app/review">Send to review workspace</Link>
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <Card className="border-border/70 shadow-none">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Draft generated in 42 seconds
            </div>
            <h2 className="mt-3 text-xl font-semibold">
              Credit proposal — {activeBorrower.company}
            </h2>
            <p className="text-sm text-muted-foreground">
              {activeBorrower.reference} · {formatGBP(activeBorrower.amount)} ·{" "}
              {activeBorrower.purpose}
            </p>
            <Separator className="my-6" />
            <div className="space-y-7">
              {proposalSections.map((s, i) => (
                <section key={s.id}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {i + 1}. {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{s.body}</p>
                </section>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="border-border/70 shadow-none">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold">Generation details</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {[
                  ["Model", "Narrative v2 (simulated)"],
                  ["Documents used", "3"],
                  ["Data points cited", "27"],
                  ["Confidence", "Medium-high"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
          <Card className="border-border/70 shadow-none">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold">Next steps</h3>
              <div className="mt-3 space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/app/risk">Check risk flags</Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/app/portfolio">Compare with portfolio</Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/app/final-proposal">View final proposal</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
