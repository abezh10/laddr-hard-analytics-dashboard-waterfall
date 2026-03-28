export const starteranalyticsServiceItems = [
  { id: "starter-1", label: "Sample analytics service record", status: "draft" },
  { id: "starter-2", label: "Another analytics service record", status: "ready" },
];

export async function loadanalyticsServicePreview() {
  return Promise.resolve(starteranalyticsServiceItems);
}

export async function saveanalyticsServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The analytics service workflow is intentionally unfinished in Analytics Dashboard Waterfall.",
  });
}
