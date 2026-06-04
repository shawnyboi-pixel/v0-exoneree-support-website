export default function ExplorePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Discover Our Mission
          </h1>
          <p className="text-lg text-amber-100 max-w-2xl">
            Learn about the Ide Project and the resources available to support successful reentry.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {/* About Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 mb-6">
            About Ide Project
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white border border-amber-200 p-8">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Our Vision</h3>
              <p className="text-amber-800 leading-relaxed">
                A world where individuals who have experienced wrongful conviction receive comprehensive, compassionate support as they rebuild their lives and reconnect with society.
              </p>
            </div>
            <div className="rounded-lg bg-white border border-orange-200 p-8">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Our Mission</h3>
              <p className="text-orange-800 leading-relaxed">
                Connect exonerees nationwide with verified reentry support organizations, housing resources, job training programs, and community advocacy to ensure a successful transition home.
              </p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 mb-6">
            What We Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Resource 1 */}
            <div className="rounded-lg bg-white border border-amber-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">📚</div>
              <h3 className="font-semibold text-amber-900 mb-2">Guides & Tutorials</h3>
              <p className="text-amber-800 text-sm">
                Step-by-step guides covering financial planning, job search, housing, legal rights, and daily life skills.
              </p>
            </div>

            {/* Resource 2 */}
            <div className="rounded-lg bg-white border border-orange-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="font-semibold text-orange-900 mb-2">Organization Directory</h3>
              <p className="text-orange-800 text-sm">
                Access to verified organizations providing housing, employment, legal aid, mental health support, and more.
              </p>
            </div>

            {/* Resource 3 */}
            <div className="rounded-lg bg-white border border-rose-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-semibold text-rose-900 mb-2">Q&A Community</h3>
              <p className="text-rose-800 text-sm">
                Ask questions and learn from others' experiences. Get real answers from real people who understand the journey.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-lg bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 p-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-amber-900 mb-8">
            By The Numbers
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-orange-600">10K+</div>
              <p className="text-amber-900 mt-2">People Supported</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">200+</div>
              <p className="text-amber-900 mt-2">Resources Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">50+</div>
              <p className="text-amber-900 mt-2">States Covered</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/guides"
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
          >
            Explore Resources
          </a>
        </div>
      </div>
    </section>
  )
}
