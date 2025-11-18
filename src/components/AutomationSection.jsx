import { motion } from 'framer-motion'

export default function AutomationSection() {
  return (
    <section id="automation" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Managed Automation Services</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-4 text-slate-300">Let our team build, monitor, and optimize your automations. We partner with you or your agency to implement high-impact systems with SLAs and ongoing improvements.</motion.p>
            <motion.ul initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 space-y-3 text-slate-300 text-sm">
              {['Dedicated automation engineer','Quarterly system reviews','White-label implementation for agencies','Priority support and on-call coverage'].map((t) => (
                <motion.li key={t} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>• {t}</motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { k: 'KPI', v: '+38%', s: 'Lead response speed' },
                { k: 'Time saved', v: '22h/wk', s: 'Ops team' },
                { k: 'NPS', v: '72', s: 'Automation projects' },
                { k: 'Coverage', v: '24/7', s: 'Monitoring' },
              ].map((card, i) => (
                <motion.div key={card.k} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }} className="rounded-xl bg-black/30 p-4 border border-white/10">
                  <p className="text-slate-400">{card.k}</p>
                  <p className="text-white text-xl font-semibold">{card.v}</p>
                  <p className="text-slate-400 text-xs">{card.s}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
