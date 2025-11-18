export default function AutomationSection() {
  return (
    <section id="automation" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Managed Automation Services</h2>
            <p className="mt-4 text-slate-300">Let our team build, monitor, and optimize your automations. We partner with you or your agency to implement high-impact systems with SLAs and ongoing improvements.</p>
            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              <li>• Dedicated automation engineer</li>
              <li>• Quarterly system reviews</li>
              <li>• White-label implementation for agencies</li>
              <li>• Priority support and on-call coverage</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-black/30 p-4 border border-white/10">
                <p className="text-slate-400">KPI</p>
                <p className="text-white text-xl font-semibold">+38%</p>
                <p className="text-slate-400 text-xs">Lead response speed</p>
              </div>
              <div className="rounded-xl bg-black/30 p-4 border border-white/10">
                <p className="text-slate-400">Time saved</p>
                <p className="text-white text-xl font-semibold">22h/wk</p>
                <p className="text-slate-400 text-xs">Ops team</p>
              </div>
              <div className="rounded-xl bg-black/30 p-4 border border-white/10">
                <p className="text-slate-400">NPS</p>
                <p className="text-white text-xl font-semibold">72</p>
                <p className="text-slate-400 text-xs">Automation projects</p>
              </div>
              <div className="rounded-xl bg-black/30 p-4 border border-white/10">
                <p className="text-slate-400">Coverage</p>
                <p className="text-white text-xl font-semibold">24/7</p>
                <p className="text-slate-400 text-xs">Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
