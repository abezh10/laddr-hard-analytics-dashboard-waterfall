export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Debug / Performance Bugs</p>
          <h1 className="mt-2 text-3xl font-semibold">Analytics Dashboard Waterfall</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">The analytics dashboard is correct but slow because of client-side request sequencing and redundant backend work. Improve the loading strategy without removing metrics or rewriting the architecture.</p>
        </header>
      <section className="rounded-xl border border-dashed border-slate-300 p-4">
        <h2 className="text-lg font-medium">Starter preview</h2>
        <p className="mt-2 text-sm text-slate-600">
          This page is wired up with a lightweight placeholder so the challenge opens with a visible surface instead of a blank screen.
        </p>
      </section>
      </div>
    </main>
  );
}
