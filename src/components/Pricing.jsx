export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Scale as you automate more of your business.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">Starter</p>
            <p className="mt-2 text-4xl font-semibold text-white">$0</p>
            <p className="text-slate-400 text-sm">Up to 2 agents, 500 tasks/mo</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Visual builder</li>
              <li>• Basic templates</li>
              <li>• Community support</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-200">Get started</button>
          </div>

          <div className="rounded-2xl border border-indigo-400/30 bg-gradient-to-b from-indigo-500/10 to-white/5 p-6 ring-1 ring-inset ring-indigo-400/20">
            <p className="text-sm text-slate-300">Pro</p>
            <p className="mt-2 text-4xl font-semibold text-white">$49</p>
            <p className="text-slate-400 text-sm">Unlimited agents, 10k tasks/mo</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Advanced tools</li>
              <li>• Team workspace</li>
              <li>• Priority support</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-200">Start Pro trial</button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">Managed</p>
            <p className="mt-2 text-4xl font-semibold text-white">$999+</p>
            <p className="text-slate-400 text-sm">Done-for-you automations</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Dedicated engineer</li>
              <li>• Custom integrations</li>
              <li>• White-label options</li>
            </ul>
            <button className="mt-6 w-full rounded-lg border border-white/15 bg-white/5 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10">Talk to sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
