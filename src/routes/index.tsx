import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  FileSearch,
  Landmark,
  ShieldAlert,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CreditNarrate AI — AI-assisted credit proposal preparation" },
      {
        name: "description",
        content:
          "CreditNarrate AI helps lending teams analyse borrower financials, draft credit proposals and identify risks faster.",
      },
      { property: "og:title", content: "CreditNarrate AI — AI-assisted credit proposals" },
      {
        property: "og:description",
        content:
          "Analyse borrower financials, generate proposal drafts and review risks in one enterprise lending workspace.",
      },
    ],
  }),
  component: Landing,
});

const problems = [
  { title: "Manual preparation", text: "Officers rewrite the same narrative structure for every borrower, copying figures between spreadsheets and documents." },
  { title: "Time consuming", text: "A single mid-market proposal takes 8–12 hours of drafting before it ever reaches credit committee." },
  { title: "Hard to standardise", text: "Tone, depth and risk coverage vary by author, making comparison across the portfolio unreliable." },
];

const solutions = [
  { icon: FileSearch, title: "Analyse borrower financials", text: "Statements and management accounts are read into a consistent ratio and covenant view." },
  { icon: Sparkles, title: "Generate proposal drafts", text: "A structured draft covering overview, financials, risk and recommendation in minutes." },
  { icon: ShieldAlert, title: "Identify risks", text: "Leverage, concentration and margin flags surfaced with severity and explanation." },
  { icon: CheckCircle2, title: "Review recommendations", text: "Officers edit, comment and approve every section before it leaves the workspace." },
];

const steps = [
  "Upload borrower information",
  "Analyse financial data",
  "Generate proposal draft",
  "Review risks",
  "Finalise proposal",
];

const audiences = [
  { icon: Landmark, label: "Banks" },
  { icon: Users, label: "Credit unions" },
  { icon: Wallet, label: "Alternative lenders" },
  { icon: Building2, label: "Credit teams" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-card/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display text-sm font-semibold">CreditNarrate AI</span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Credit proposal automation
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            CreditNarrate AI helps lending teams create credit proposals faster using AI-assisted
            analysis.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/80">
            Bring borrower financials, risk flags and portfolio benchmarks into a single workspace,
            and take a committee-ready proposal from intake to sign-off in a fraction of the time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/register">Create an account</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/login">Sign in to workspace</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Traditional proposal preparation slows lenders down</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {problems.map((p) => (
            <Card key={p.title} className="border-border/70 shadow-none">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">What CreditNarrate AI does for credit teams</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {solutions.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-lg border border-border/70 p-6">
                <s.icon className="h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s} className="rounded-lg border border-border/70 bg-card p-5">
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-medium leading-snug">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Built for lending organisations</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 rounded-lg border border-border/70 p-5"
              >
                <a.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{a.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link to="/register">Start free</Link>
            </Button>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4" /> Demonstration environment using sample borrower data
            </span>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} CreditNarrate AI. MVP demonstration.
      </footer>
    </div>
  );
}
