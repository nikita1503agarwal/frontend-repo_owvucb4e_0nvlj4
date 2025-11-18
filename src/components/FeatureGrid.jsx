import { Zap, Database, Bot, Workflow, Store, Shield } from 'lucide-react'

export default function FeatureGrid() {
  const features = [
    { icon: Database, title: 'Unified Knowledge', desc: 'Ingest documents, CRM, support tickets, spreadsheets, and third-party APIs into one searchable brain.' },
    { icon: Workflow, title: 'Process Orchestration', desc: 'Map business processes into repeatable workflows executed by AI agents with human-in-the-loop.' },
    { icon: Bot, title: 'Autonomous Agents', desc: 'Deploy reasoning agents that read, decide, and act across your tools.' },
    { icon: Zap, title: 'Managed Automation', desc: 'Our team builds and maintains automations for you — or use self-serve builder.' },
    { icon: Store, title: 'Template Marketplace', desc: 'Launch niche systems in minutes. Buy, sell, and remix templates for any vertical.' },
    { icon: Shield, title: 'Enterprise-Grade', desc: 'Role-based access, audit logs, and SOC2-ready controls out of the box.' },
  ]

  return (
    <section id="product" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Build systems that think and do</h2>
          <p className="mt-3 text-slate-300">Everything you need to connect data, define processes, and ship AI automations that compound.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-white/20 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                <Icon className="text-white" size={18} />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-sm text-slate-300 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
