import { motion } from 'framer-motion'

export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$0', blurb: 'Up to 2 agents, 500 tasks/mo', cta: 'Get started', highlight: false, features: ['Visual builder','Basic templates','Community support'] },
    { name: 'Pro', price: '$49', blurb: 'Unlimited agents, 10k tasks/mo', cta: 'Start Pro trial', highlight: true, features: ['Advanced tools','Team workspace','Priority support'] },
    { name: 'Managed', price: '$999+', blurb: 'Done-for-you automations', cta: 'Talk to sales', highlight: false, features: ['Dedicated engineer','Custom integrations','White-label options'] },
  ]

  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Scale as you automate more of your business.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${t.highlight ? 'border-indigo-400/30 bg-gradient-to-b from-indigo-500/10 to-white/5 ring-1 ring-inset ring-indigo-400/20' : 'border-white/10 bg-white/5'} rounded-2xl border p-6`}
            >
              <p className="text-sm text-slate-300">{t.name}</p>
              <p className="mt-2 text-4xl font-semibold text-white">{t.price}</p>
              <p className="text-slate-400 text-sm">{t.blurb}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {t.features.map((f) => (<li key={f}>• {f}</li>))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-semibold ${t.highlight ? 'bg-white text-slate-900 hover:bg-slate-200' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`}>{t.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
