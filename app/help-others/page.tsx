export default function HelpOthersPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Make an Impact
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Connect with organizations, volunteer your time, and help individuals successfully reenter society.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-lg bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
              <span className="text-xl font-bold text-blue-600">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Partner Organizations</h3>
            <p className="text-slate-600 mb-6">
              Explore verified organizations working in reentry support, housing, employment, and legal aid.
            </p>
            <a href="/organizations" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              Browse Organizations →
            </a>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-100 mb-4">
              <span className="text-xl font-bold text-emerald-600">📋</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Volunteer Opportunities</h3>
            <p className="text-slate-600 mb-6">
              Find ways to contribute your skills and time to support individuals on their reentry journey.
            </p>
            <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer">
              View Opportunities →
            </button>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex size-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
              <span className="text-xl font-bold text-purple-600">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Start an Initiative</h3>
            <p className="text-slate-600 mb-6">
              Launch your own reentry support program or partnership with Ide Project.
            </p>
            <a href="/contact" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
              Get in Touch →
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-4 text-center py-12 border-t border-slate-200">
          <div>
            <div className="text-3xl font-bold text-slate-900">150+</div>
            <p className="text-slate-600 mt-2">Organizations</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">5K+</div>
            <p className="text-slate-600 mt-2">People Helped</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">40+</div>
            <p className="text-slate-600 mt-2">States</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">500+</div>
            <p className="text-slate-600 mt-2">Volunteers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
