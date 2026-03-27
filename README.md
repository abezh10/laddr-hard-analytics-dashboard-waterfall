# Analytics Dashboard Waterfall

- Category: Debug / Performance Bugs
- Difficulty: Hard

## Contains
- `client/src/pages/AnalyticsPage.tsx`
- `client/src/hooks/useAnalyticsData.ts`
- `server/routes/analytics.ts`
- `server/services/analyticsService.ts`
- `package.json`

## Prompt
The analytics dashboard is correct but slow because of client-side request sequencing and redundant backend work. Improve the loading strategy without removing metrics or rewriting the architecture.

## Likely Change Dirs
- `client/src/pages`
- `client/src/hooks`
- `server/routes`
- `server/services`
