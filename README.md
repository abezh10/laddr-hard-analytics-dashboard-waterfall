# Analytics Dashboard Waterfall

- Category: Debug
- Topic: Performance Bugs
- Difficulty: Hard

## Overview
This sample repository is set up for a hard debug exercise in the performance bugs track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to trace the current behavior and fix the underlying defect.

## Exercise Summary
The analytics dashboard is correct but slow because of client-side request sequencing and redundant backend work. Improve the loading strategy without removing metrics or rewriting the architecture.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `client/src/hooks/useAnalyticsData.ts`
- `client/src/pages/AnalyticsPage.tsx`
- `package.json`
- `server/routes/analytics.ts`
- `server/services/analyticsService.ts`

## Likely Change Areas
- `client/src/hooks`
- `client/src/pages`
- `server/routes`
- `server/services`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
