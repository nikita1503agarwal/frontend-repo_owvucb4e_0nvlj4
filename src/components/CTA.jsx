export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-rose-500/15 p-10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_80%_-20%,rgba(99,102,241,0.25),transparent),radial-gradient(500px_250px_at_20%_120%,rgba(236,72,153,0.20),transparent)]" />
          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Bring your AI Brain to life</h3>
              <p className="mt-3 text-slate-300">Connect data, map processes, and deploy agents in minutes.</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="#" className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-200">Create workspace</a>
                <a href="#" className="rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10">Book demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
