export type RiskLevel = "Low" | "Medium" | "High";

export const overviewStats = [
  { label: "Active Credit Proposals", value: "18", delta: "+3 this week" },
  { label: "Pending Reviews", value: "7", delta: "2 due today" },
  { label: "Completed Proposals", value: "142", delta: "+12 this month" },
  { label: "Risk Alerts", value: "5", delta: "2 high severity" },
];

export type Applicant = {
  id: string;
  borrower: string;
  company: string;
  industry: string;
  amount: number;
  status: "Draft" | "In Analysis" | "In Review" | "Approved" | "Declined";
  risk: RiskLevel;
};

export const applicants: Applicant[] = [
  { id: "CP-2041", borrower: "Helena Marsh", company: "Northfield Foods Ltd", industry: "Food Manufacturing", amount: 2400000, status: "In Review", risk: "Medium" },
  { id: "CP-2040", borrower: "Daniel Okoye", company: "Vertex Logistics", industry: "Transport & Logistics", amount: 1150000, status: "In Analysis", risk: "Low" },
  { id: "CP-2039", borrower: "Priya Raman", company: "Lumen Health Group", industry: "Healthcare", amount: 3850000, status: "Approved", risk: "Low" },
  { id: "CP-2038", borrower: "Tom Bradshaw", company: "Brightsteel Fabrication", industry: "Industrial Manufacturing", amount: 920000, status: "In Review", risk: "High" },
  { id: "CP-2037", borrower: "Aisha Khan", company: "Orchard Retail Partners", industry: "Retail", amount: 640000, status: "Draft", risk: "Medium" },
  { id: "CP-2036", borrower: "Greg Sullivan", company: "Coastline Energy Services", industry: "Energy", amount: 5200000, status: "Declined", risk: "High" },
];

export const revenueTrend = [
  { year: "2021", revenue: 4.2, ebitda: 0.48 },
  { year: "2022", revenue: 5.1, ebitda: 0.61 },
  { year: "2023", revenue: 6.0, ebitda: 0.66 },
  { year: "2024", revenue: 6.6, ebitda: 0.69 },
  { year: "2025", revenue: 7.0, ebitda: 0.71 },
];

export const financialRatios = [
  { name: "Debt Ratio", value: "0.48", benchmark: "Sector median 0.52", status: "Acceptable" },
  { name: "Current Ratio", value: "1.62", benchmark: "Sector median 1.40", status: "Strong" },
  { name: "Interest Coverage", value: "3.10x", benchmark: "Policy min 2.50x", status: "Acceptable" },
  { name: "DSCR", value: "1.35x", benchmark: "Policy min 1.25x", status: "Marginal" },
];

export const marginTrend = [
  { year: "2021", gross: 31, net: 8.4 },
  { year: "2022", gross: 30, net: 8.1 },
  { year: "2023", gross: 29, net: 7.2 },
  { year: "2024", gross: 28, net: 6.8 },
  { year: "2025", gross: 27, net: 6.1 },
];

export const uploadedDocuments = [
  { name: "Financial Statement.pdf", size: "2.4 MB", pages: 48, status: "Processed" },
  { name: "Management Accounts.xlsx", size: "860 KB", pages: 12, status: "Processed" },
  { name: "Credit Report.pdf", size: "1.1 MB", pages: 9, status: "Processed" },
];

export const riskFlags = [
  {
    title: "High debt exposure",
    severity: "High" as RiskLevel,
    explanation:
      "Total debt to EBITDA stands at 3.9x against an internal policy ceiling of 3.5x. A further £2.4M facility would push leverage to 4.4x before scheduled amortisation.",
  },
  {
    title: "Declining profit margins",
    severity: "Medium" as RiskLevel,
    explanation:
      "Net margin has contracted from 8.4% (2021) to 6.1% (2025) despite revenue growth, indicating input cost pressure that has not been passed through to customers.",
  },
  {
    title: "Market dependency",
    severity: "Medium" as RiskLevel,
    explanation:
      "Top three customers represent 54% of turnover. Loss of the largest contract would reduce DSCR below the 1.25x covenant threshold.",
  },
  {
    title: "Seasonal working capital swing",
    severity: "Low" as RiskLevel,
    explanation:
      "Q3 receivable days extend to 68 versus a 47 day annual average. Headroom on the existing overdraft is sufficient to absorb the swing.",
  },
];

export const verificationChecks = [
  { field: "Revenue (FY2025)", source: "£7.0M", proposal: "£7.0M", status: "Verified" },
  { field: "EBITDA (FY2025)", source: "£0.71M", proposal: "£0.71M", status: "Verified" },
  { field: "Total debt", source: "£2.77M", proposal: "£2.77M", status: "Verified" },
  { field: "DSCR", source: "1.35x", proposal: "1.35x", status: "Verified" },
  { field: "Headcount", source: "184", proposal: "180", status: "Review" },
];

export const comparableCases = [
  { company: "Ashgrove Bakery Group", industry: "Food Manufacturing", amount: 2100000, risk: "Medium" as RiskLevel, outcome: "Approved", dscr: "1.41x", year: 2024 },
  { company: "Penwick Provisions", industry: "Food Manufacturing", amount: 2650000, risk: "Medium" as RiskLevel, outcome: "Approved with covenants", dscr: "1.29x", year: 2024 },
  { company: "Halden Fresh Produce", industry: "Agriculture & Food", amount: 3000000, risk: "High" as RiskLevel, outcome: "Declined", dscr: "1.08x", year: 2023 },
  { company: "Rivermill Foods", industry: "Food Manufacturing", amount: 1850000, risk: "Low" as RiskLevel, outcome: "Approved", dscr: "1.68x", year: 2023 },
  { company: "Caldon Catering Supplies", industry: "Wholesale", amount: 2200000, risk: "Medium" as RiskLevel, outcome: "Approved with covenants", dscr: "1.33x", year: 2022 },
];

export const proposalActivity = [
  { month: "Apr", generated: 14, approved: 9 },
  { month: "May", generated: 18, approved: 12 },
  { month: "Jun", generated: 21, approved: 15 },
  { month: "Jul", generated: 19, approved: 13 },
  { month: "Aug", generated: 26, approved: 18 },
  { month: "Sep", generated: 31, approved: 22 },
];

export const riskCategories = [
  { category: "Leverage", count: 24 },
  { category: "Liquidity", count: 17 },
  { category: "Concentration", count: 13 },
  { category: "Margin erosion", count: 11 },
  { category: "Governance", count: 5 },
];

export const activeBorrower = {
  name: "Helena Marsh",
  company: "Northfield Foods Ltd",
  industry: "Food Manufacturing",
  amount: 2400000,
  purpose: "Plant expansion and working capital",
  reference: "CP-2041",
  incorporated: "2009",
  employees: 184,
  location: "Leeds, United Kingdom",
};

export const proposalSections = [
  {
    id: "overview",
    title: "Company Overview",
    body: "Northfield Foods Ltd is a Leeds-based chilled food manufacturer incorporated in 2009, supplying own-label ready meals to three national grocery retailers. The business operates a single 64,000 sq ft production site and employs 184 staff. Management has been stable since 2016, with the founder retaining 62% of equity. Turnover has grown from £4.2M in FY2021 to £7.0M in FY2025, a compound annual growth rate of 13.6%, driven primarily by volume increases on two existing retailer contracts rather than new customer acquisition.",
  },
  {
    id: "financials",
    title: "Financial Summary",
    body: "FY2025 revenue of £7.0M generated EBITDA of £0.71M (10.1% margin). Gross margin has compressed from 31% to 27% over five years as ingredient and energy costs outpaced contracted price reviews. The balance sheet carries £2.77M of total debt against £5.8M of tangible assets, giving a debt ratio of 0.48. Liquidity is adequate with a current ratio of 1.62 and £410K of undrawn overdraft. Debt service cover for the proposed facility is modelled at 1.35x, above the 1.25x policy floor but with limited headroom.",
  },
  {
    id: "risk",
    title: "Risk Assessment",
    body: "The principal risks are leverage and customer concentration. Post-drawdown debt to EBITDA of 4.4x exceeds the 3.5x internal ceiling until the first two amortisation years complete. The top three customers account for 54% of turnover, and the loss of the largest would take DSCR below covenant. Margin erosion is a secondary concern; management has proposed an annual indexation clause at the next contract review, which is unproven. Sector and management risk are assessed as low.",
  },
  {
    id: "recommendation",
    title: "Lending Recommendation",
    body: "Recommend approval of a £2.4M facility over seven years at a margin of 3.25% over base, subject to: (1) a minimum DSCR covenant of 1.25x tested quarterly, (2) a debt to EBITDA covenant stepping down from 4.5x to 3.5x by FY2028, (3) a debenture over company assets plus a personal guarantee of £350K from the founder, and (4) quarterly management accounts within 30 days of period end. Referral to Credit Committee is required as leverage exceeds the delegated authority threshold.",
  },
];

export const analyticsStats = [
  { label: "Proposals generated", value: "129", detail: "Last 6 months" },
  { label: "Average time saved", value: "6.4 hrs", detail: "Per proposal" },
  { label: "Risk categories identified", value: "70", detail: "Across 129 proposals" },
  { label: "Draft acceptance rate", value: "81%", detail: "Accepted with minor edits" },
];

export function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
