import { motion } from 'framer-motion'

export default function Templates() {
  const templates = [
    { name: 'SaaS Onboarding Concierge', tag: 'Product', price: '$59' },
    { name: 'Agency Intake + Scope', tag: 'Agency', price: '$79' },
    { name: 'Lead Qualifier + Booker', tag: 'Sales', price: '$49' },
    { name: 'CS Triage + Resolution', tag: 'Support', price: '$69' },
    { name: 'Revenue Ops Assistant', tag: 'RevOps', price: '$89' },
    { name: 'Ecom Post-Purchase', tag: 'Ecommerce', price: '$39' },
  ]

  return (
    <section id="templates" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Template Store</h2>
          <p className="mt-3 text-slate-300">Start faster with prebuilt systems for your niche. Buy, customize, or sell your own.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs rounded-full bg-white/10 border border-white/10 px-2 py-1 text-slate-300">{t.tag}</span>
                <span className="text-white text-sm font-semibold">{t.price}</span>
              </div>
              <h3 className="text-white font-semibold">{t.name}</h3>
              <p className="text-slate-300 text-sm mt-2">Launch with best-practice prompts, tools, and workflows configured.</p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-lg bg-white text-slate-900 px-3 py-2 text-xs font-semibold hover:bg-slate-200">Preview</button>
                <button className="rounded-lg border border-white/15 bg-white/5 text-white px-3 py-2 text-xs font-semibold hover:bg-white/10">Use template</button>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
