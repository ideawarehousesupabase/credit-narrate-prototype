import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { activeBorrower, proposalSections } from "@/lib/mock-data";

export const Route = createFileRoute("/app/review")({
  head: () => ({
    meta: [
      { title: "Review workspace — CreditNarrate AI" },
      { name: "description", content: "Human review workspace for editing and approving AI proposal drafts." },
      { property: "og:title", content: "Review workspace — CreditNarrate AI" },
      { property: "og:description", content: "Human review workspace for editing and approving AI proposal drafts." },
    ],
  }),
  component: ReviewWorkspace,
});

function ReviewWorkspace() {
  const [sections, setSections] = useState(() =>
    proposalSections.map((s) => ({ ...s })),
  );
  const [editing, setEditing] = useState<string | null>(null);
  const [comments, setComments] = useState([
    { author: "R. Whitcombe (Credit Manager)", text: "Confirm the personal guarantee amount with the founder before committee." },
  ]);
  const [draft, setDraft] = useState("");
  const [approved, setApproved] = useState(false);

  return (
    <div>
      <PageHeader
        title="Review workspace"
        description={`${activeBorrower.company} · ${activeBorrower.reference} · Draft awaiting credit review`}
        action={
          approved ? (
            <Button asChild>
              <Link to="/app/final-proposal">Open final proposal</Link>
            </Button>
          ) : (
            <Button onClick={() => setApproved(true)}>Approve proposal</Button>
          )
        }
      />

      {approved ? (
        <div className="mb-6 flex items-center gap-2 rounded-md bg-success/10 px-4 py-3 text-sm text-success">
          <CheckCircle2 className="h-4 w-4" /> Proposal approved and locked for final
          documentation.
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <Card className="border-border/70 shadow-none">
          <CardContent className="space-y-6 p-7">
            {sections.map((s) => (
              <section key={s.id}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {s.title}
                  </h3>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setEditing(editing === s.id ? null : s.id)}
                  >
                    {editing === s.id ? "Done" : "Edit"}
                  </Button>
                </div>
                {editing === s.id ? (
                  <Textarea
                    className="mt-2 min-h-40 text-sm"
                    value={s.body}
                    onChange={(e) =>
                      setSections((prev) =>
                        prev.map((p) => (p.id === s.id ? { ...p, body: e.target.value } : p)),
                      )
                    }
                  />
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{s.body}</p>
                )}
              </section>
            ))}
          </CardContent>
        </Card>

        <Card className="h-fit border-border/70 shadow-none">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold">Comments</h3>
            <ul className="mt-3 space-y-3">
              {comments.map((c, i) => (
                <li key={i} className="rounded-md bg-secondary p-3 text-sm">
                  <p className="text-xs font-medium text-muted-foreground">{c.author}</p>
                  <p className="mt-1">{c.text}</p>
                </li>
              ))}
            </ul>
            <Textarea
              className="mt-4"
              rows={3}
              placeholder="Add a review comment…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <Button
              className="mt-2 w-full"
              variant="outline"
              disabled={!draft.trim()}
              onClick={() => {
                setComments((c) => [...c, { author: "You", text: draft.trim() }]);
                setDraft("");
              }}
            >
              Add comment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
