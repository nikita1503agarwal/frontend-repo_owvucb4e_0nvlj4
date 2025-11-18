export default function Logos() {
  const logos = ['Notion', 'Slack', 'HubSpot', 'GDrive', 'Salesforce', 'Zapier']
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm text-slate-400 mb-6">Connect to your entire stack</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center text-slate-300">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
