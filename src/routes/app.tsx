import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BarChart3,
  FileText,
  GaugeCircle,
  LayoutDashboard,
  LineChart,
  LogOut,
  Menu,
  ShieldAlert,
  Sparkles,
  Layers,
  ClipboardCheck,
  Upload,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

const nav = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/new-proposal", label: "New Proposal", icon: FileText },
  { to: "/app/documents", label: "Documents", icon: Upload },
  { to: "/app/financial-analysis", label: "Financial Analysis", icon: LineChart },
  { to: "/app/ai-proposal", label: "AI Proposal", icon: Sparkles },
  { to: "/app/risk", label: "Risk Dashboard", icon: ShieldAlert },
  { to: "/app/portfolio", label: "Portfolio Comparison", icon: Layers },
  { to: "/app/review", label: "Review Workspace", icon: ClipboardCheck },
  { to: "/app/final-proposal", label: "Final Proposal", icon: GaugeCircle },
  { to: "/app/analytics", label: "Analytics", icon: BarChart3 },
] as const;

function AppLayout() {
  const { user, ready, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (ready && !user) navigate({ to: "/login" });
  }, [ready, user, navigate]);

  if (!ready || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Loading workspace…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-primary text-primary-foreground transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2 border-b border-primary-foreground/15 px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-accent text-accent-foreground">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-display text-sm font-semibold tracking-tight">
            CreditNarrate AI
          </span>
        </div>
        <nav className="flex flex-col gap-0.5 p-3">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-primary-foreground/75 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground data-[status=active]:bg-primary-foreground/15 data-[status=active]:text-primary-foreground data-[status=active]:font-medium"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-card px-4 lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden text-sm text-muted-foreground sm:block">
            {user.organisationName}
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium leading-tight">{user.fullName}</p>
              <p className="text-xs text-muted-foreground">{user.role}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                logout();
                navigate({ to: "/" });
              }}
            >
              <LogOut className="mr-1.5 h-3.5 w-3.5" /> Sign out
            </Button>
          </div>
        </header>
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
