import { Card, CardContent } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <Card className="border-border/70 shadow-none">
      <CardContent className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-2 font-display text-3xl font-semibold text-foreground">{value}</p>
        {detail ? <p className="mt-1 text-xs text-muted-foreground">{detail}</p> : null}
      </CardContent>
    </Card>
  );
}

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        {description ? (
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function RiskBadge({ level }: { level: string }) {
  const tone =
    level === "High"
      ? "bg-destructive/10 text-destructive"
      : level === "Medium"
        ? "bg-warning/20 text-warning-foreground"
        : "bg-success/10 text-success";
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${tone}`}>
      {level}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "Approved" || status === "Verified" || status === "Processed"
      ? "bg-success/10 text-success"
      : status === "Declined"
        ? "bg-destructive/10 text-destructive"
        : status === "In Review" || status === "Review"
          ? "bg-warning/20 text-warning-foreground"
          : "bg-secondary text-secondary-foreground";
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${tone}`}>
      {status}
    </span>
  );
}
