export const analyticsRoute = {
  path: "/analytics",
  method: "GET",
};

export function handleAnalytics() {
  return {
    ok: true,
    route: "analytics",
    message: "Starter route for Analytics Dashboard Waterfall",
  };
}
