import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth, type UserRole } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — CreditNarrate AI" },
      { name: "description", content: "Register your lending team on CreditNarrate AI." },
      { property: "og:title", content: "Create account — CreditNarrate AI" },
      { property: "og:description", content: "Register your lending team on CreditNarrate AI." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    organisationName: "",
    email: "",
    password: "",
    role: "Credit Officer" as UserRole,
  });
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setBusy(true);
    try {
      await register({ ...form, fullName: form.fullName.trim(), email: form.email.trim() });
      navigate({ to: "/app/dashboard" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create account.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-lg">
        <Link to="/" className="mb-6 block text-center font-display text-lg font-semibold">
          CreditNarrate AI
        </Link>
        <Card className="shadow-sm">
          <CardContent className="p-7">
            <h1 className="text-xl font-semibold">Create your account</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Set up access for your credit team.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    required
                    value={form.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="org">Organisation name</Label>
                  <Input
                    id="org"
                    required
                    value={form.organisationName}
                    onChange={(e) => set("organisationName", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="name@lender.com"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={form.password}
                    onChange={(e) => set("password", e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="role">Role</Label>
                  <select
                    id="role"
                    value={form.role}
                    onChange={(e) => set("role", e.target.value as UserRole)}
                    className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <option>Credit Officer</option>
                    <option>Credit Manager</option>
                  </select>
                </div>
              </div>
              {error ? (
                <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </p>
              ) : null}
              <Button type="submit" className="w-full" disabled={busy}>
                {busy ? "Creating account…" : "Create account"}
              </Button>
            </form>
            <p className="mt-5 text-center text-sm text-muted-foreground">
              Already registered?{" "}
              <Link to="/login" className="font-medium text-primary underline-offset-4 hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
