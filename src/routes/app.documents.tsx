import { createFileRoute, Link } from "@tanstack/react-router";
import { FileSpreadsheet, FileText, UploadCloud } from "lucide-react";
import { PageHeader, StatusBadge } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { uploadedDocuments, activeBorrower } from "@/lib/mock-data";

export const Route = createFileRoute("/app/documents")({
  head: () => ({
    meta: [
      { title: "Documents — CreditNarrate AI" },
      { name: "description", content: "Borrower document intake and processing status." },
      { property: "og:title", content: "Documents — CreditNarrate AI" },
      { property: "og:description", content: "Borrower document intake and processing status." },
    ],
  }),
  component: Documents,
});

function Documents() {
  return (
    <div>
      <PageHeader
        title="Borrower documents"
        description={`Intake for ${activeBorrower.company} (${activeBorrower.reference}). Demonstration only — no files are processed.`}
      />

      <Card className="border-dashed border-border shadow-none">
        <CardContent className="flex flex-col items-center justify-center gap-2 p-10 text-center">
          <UploadCloud className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium">Drop financial documents here</p>
          <p className="text-xs text-muted-foreground">
            PDF, XLSX or CSV up to 25 MB. Simulated upload area.
          </p>
          <Button variant="outline" size="sm" className="mt-2">
            Browse files
          </Button>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {uploadedDocuments.map((doc) => (
          <Card key={doc.name} className="border-border/70 shadow-none">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                {doc.name.endsWith(".xlsx") ? (
                  <FileSpreadsheet className="h-5 w-5 text-accent" />
                ) : (
                  <FileText className="h-5 w-5 text-primary" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {doc.size} · {doc.pages} pages
                  </p>
                </div>
              </div>
              <Progress value={100} className="mt-4 h-1.5" />
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Extraction complete</span>
                <StatusBadge status={doc.status} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Button asChild>
          <Link to="/app/financial-analysis">Continue to financial analysis</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/app/dashboard">Back to dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
