import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import FeatureGrid from './components/FeatureGrid'
import AutomationSection from './components/AutomationSection'
import Templates from './components/Templates'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Hero with Spline background */}
      <Hero />

      {/* Partner/stack logos */}
      <Logos />

      {/* Core product value */}
      <FeatureGrid />

      {/* Managed automation services */}
      <AutomationSection />

      {/* Templates marketplace */}
      <Templates />

      {/* Pricing plans */}
      <Pricing />

      {/* Primary call to action */}
      <CTA />

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 ring-1 ring-white/20" />
              <span className="text-white font-semibold tracking-tight">AIBrain</span>
            </div>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} AIBrain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
