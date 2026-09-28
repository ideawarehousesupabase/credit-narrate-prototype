# Credit Insight AI

Build an MVP web application for CreditNarrate AI, an AI-assisted credit proposal preparation platform for lending organisations.

STRICTLY follow the business plan concept.

The purpose of this MVP is to demonstrate how credit officers can use the platform to analyse borrower financial information, review financial insights, view AI-generated credit proposal drafts, identify risks, and prepare final credit documentation.

This is a frontend-focused MVP using mock data.

Do not overengineer the application.

==================================================

MVP OBJECTIVE

==================================================

Build a working prototype demonstrating:

1. User registration and login

2. Credit officer dashboard

3. Borrower credit proposal workflow

4. Financial analysis view

5. AI-generated proposal draft simulation

6. Risk identification dashboard

7. Portfolio comparison simulation

8. Human review workspace

9. Final proposal view

All credit analysis, AI generation, financial calculations, borrower information, risk analysis, and portfolio comparisons should use mock data only.

No real AI models or backend processing are required.

==================================================

TECH STACK

==================================================

Frontend:

- React

- TypeScript

- Tailwind CSS

- Modern responsive UI

- Professional fintech SaaS design

The application should look like an enterprise lending platform.

==================================================

FIREBASE REQUIREMENTS

==================================================

Firebase should be used ONLY for storing user registration data and performing basic CRUD operations.

Do NOT use:

- Firebase Authentication

- Firebase Auth SDK

- Firebase Storage

- Firebase Functions

- Firebase AI services

- Any other Firebase services

Firebase should only act as a database.

==================================================

CUSTOM AUTHENTICATION FLOW

==================================================

Implement custom authentication logic.

Registration:

Create a Register page.

Fields:

- Full Name

- Organisation Name

- Work Email

- Password

- User Role

User roles:

- Credit Officer

- Credit Manager

When a user registers:

Store the user data inside Firebase Firestore collection.

Collection structure:

users

    userId

        fullName

        organisationName

        email

        password

        role

        createdAt

Use Firestore CRUD operations only.

--------------------------------------------------

Login:

Create a Login page.

Fields:

- Email

- Password

Login process:

1. User enters email and password.

2. Fetch user records from Firestore users collection.

3. Match entered credentials with stored data.

4. If matched, redirect user to dashboard.

5. If not matched, show login error.

Do not use Firebase Authentication.

This should be a simple database-based login system.

==================================================

FIREBASE ENVIRONMENT CONFIGURATION

==================================================

Create a .env file for Firebase configuration.

Do not hardcode Firebase configuration values anywhere in the codebase.

Use environment variables throughout the complete project.

Create variables like:

VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=

VITE_FIREBASE_PROJECT_ID=

VITE_FIREBASE_STORAGE_BUCKET=

VITE_FIREBASE_MESSAGING_SENDER_ID=

VITE_FIREBASE_APP_ID=

All Firebase configuration values must be accessed from the .env file.

==================================================

GIT SECURITY

==================================================

Update .gitignore.

Make sure these files are ignored:

.env

.env.local

The environment files must never be pushed to GitHub.

==================================================

APPLICATION PAGES

==================================================

1. LANDING PAGE

Create a professional SaaS landing page.

Sections:

Hero Section:

Explain:

CreditNarrate AI helps lending teams create credit proposals faster using AI-assisted analysis.

Problem Section:

Explain:

Traditional credit proposal preparation is:

- Manual

- Time consuming

- Difficult to standardise

Solution Section:

Explain:

CreditNarrate AI helps credit teams:

- Analyse borrower financial information

- Generate proposal drafts

- Identify risks

- Review recommendations

How It Works:

Show workflow:

1. Upload borrower information

2. Analyse financial data

3. Generate proposal draft

4. Review risks

5. Finalise proposal

Target Users:

Display:

- Banks

- Credit unions

- Alternative lenders

- Credit teams

==================================================

2. REGISTER PAGE

Create account registration page.

Store registration information in Firebase Firestore.

No Firebase Authentication.

==================================================

3. LOGIN PAGE

Create login page.

Implement custom Firestore-based login.

After successful login redirect to dashboard.

==================================================

4. DASHBOARD

Create the main credit officer dashboard.

Use mock data.

Display:

Overview Cards:

- Active Credit Proposals

- Pending Reviews

- Completed Proposals

- Risk Alerts

Recent Borrower Applications table:

Columns:

- Borrower Name

- Industry

- Loan Amount

- Status

- Risk Level

Quick Actions:

Buttons:

- Create New Proposal

- Review Drafts

- View Analytics

==================================================

5. NEW CREDIT PROPOSAL PAGE

Purpose:

Allow credit officers to start a borrower assessment.

Fields:

- Borrower Name

- Company Name

- Industry

- Loan Amount Requested

- Loan Purpose

Button:

Start Analysis

After submission show mock analysis workflow.

==================================================

6. DOCUMENT UPLOAD PAGE

Create simulated document upload experience.

No real document processing.

Display example uploaded files:

- Financial Statement.pdf

- Management Accounts.xlsx

- Credit Report.pdf

Show processing completed status.

==================================================

7. FINANCIAL ANALYSIS DASHBOARD

Use mock financial data.

Display:

Revenue Trends:

Show revenue growth over multiple years.

Financial Ratios:

Display:

- Debt Ratio

- Current Ratio

- Interest Coverage Ratio

- DSCR

Financial Summary:

Example:

"Company shows stable revenue growth with moderate debt exposure."

==================================================

8. AI CREDIT PROPOSAL DRAFT PAGE

This is the main product demonstration page.

Create an AI-generated proposal interface using mock content.

Sections:

Company Overview

Financial Summary

Risk Assessment

Lending Recommendation

The design should look like an AI-assisted credit documentation system.

==================================================

9. RISK DASHBOARD

Create risk review interface.

Display:

Risk Flags:

Examples:

- High debt exposure

- Declining profit margins

- Market dependency

Each risk should include:

- Risk title

- Severity

- Explanation

Data Verification Section:

Show financial consistency checks.

Example:

Financial Data:

Revenue: £7M

Proposal:

Revenue: £7M

Status:

Verified

==================================================

10. PORTFOLIO COMPARISON PAGE

Simulate comparison against previous lending cases.

Use mock data.

Display:

- Similar borrowers

- Previous loan amounts

- Risk profiles

- Lending patterns

==================================================

11. REVIEW WORKSPACE

Create a human review interface.

Purpose:

Allow credit officers to review AI-generated proposals.

Features:

- Proposal document view

- Editable sections

- Comments area

- Approval button

No real collaboration system required.

==================================================

12. FINAL PROPOSAL PAGE

Display completed credit proposal.

Sections:

- Borrower overview

- Financial analysis

- Risk assessment

- Lending recommendation

Buttons:

- Export PDF (UI only)

- Submit Proposal (UI only)

No backend required.

==================================================

13. ANALYTICS DASHBOARD

Use mock data.

Display:

- Number of proposals generated

- Time saved

- Risk categories identified

- Proposal activity

==================================================

NAVIGATION

==================================================

After login create sidebar navigation:

- Dashboard

- New Proposal

- Financial Analysis

- AI Proposal

- Risk Dashboard

- Portfolio Comparison

- Review Workspace

- Analytics

==================================================

UI REQUIREMENTS

==================================================

Design style:

- Enterprise fintech SaaS

- Professional dashboards

- Clean tables

- Cards

- Charts

- Responsive layout

Avoid:

- Consumer-style design

- Excessive animations

- Unnecessary components

==================================================

DO NOT BUILD

==================================================

Do NOT build:

- Admin panel

- Admin dashboard

- Real AI integration

- Machine learning models

- OCR document processing

- Banking integrations

- Payment system

- Real lending decision engine

- Real borrower database

- Real-time collaboration

- Enterprise permission management

- Complex backend systems

==================================================

FINAL MVP EXPECTATION

==================================================

The final application should demonstrate:

A credit officer can:

1. Register and login

2. Access dashboard

3. Create borrower assessment

4. View financial analysis

5. Review AI-generated proposal

6. Check risk alerts

7. Compare lending cases

8. Review and finalise proposal

Only user authentication data should be stored in Firebase.

Everything else should run using frontend mock data.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/36d4b0ad-7e69-4419-af88-2b5962ec403d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
