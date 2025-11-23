import React from 'react'
import ScholarMetrics from '@/components/ScholarMetrics'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-300 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-blue-400 bg-clip-text text-transparent">
              SNP
            </a>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#about" className="text-slate-600 hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="text-slate-600 hover:text-blue-400 transition-colors">Education</a>
              <a href="#research" className="text-slate-600 hover:text-blue-400 transition-colors">Research</a>
              <a href="#publications" className="text-slate-600 hover:text-blue-400 transition-colors">Publications</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-slate-900 mb-4">
                  Shouon Nath Pallab
                </h1>
                <p className="text-xl text-slate-500 font-medium mb-6">
                  PhD Candidate in Computer Science
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Researching AI-driven solutions for sustainability and health equity at Georgia State University. 
                  Passionate about using technology to address real-world challenges.
                </p>
                <div className="flex gap-4">
                  <a href="mailto:spallab1@student.gsu.edu" className="bg-slate-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-600 transition-colors">
                    Contact Me
                  </a>
                  <a href="https://scholar.google.com/citations?user=T7f9CiEAAAAJ" target="_blank" rel="noopener noreferrer" className="border border-slate-300 text-slate-600 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                    Google Scholar
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-500 mb-1">15+</div>
                      <div className="text-sm text-slate-600">Publications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">3</div>
                      <div className="text-sm text-slate-600">Years Research</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-500 mb-1">AI/ML</div>
                      <div className="text-sm text-slate-600">Specialization</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">GSU</div>
                      <div className="text-sm text-slate-600">PhD Program</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">PhD in Computer Science</h3>
                  <span className="text-slate-600">2023 - Present</span>
                </div>
                <p className="text-slate-500 font-medium mb-2">Georgia State University</p>
                <p className="text-slate-600">Focus: AI for Sustainability and Health Equity</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">MS in Computer Science</h3>
                  <span className="text-slate-600">2021 - 2023</span>
                </div>
                <p className="text-slate-500 font-medium mb-2">Georgia State University</p>
                <p className="text-slate-600">GPA: 3.8/4.0</p>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Research Interests</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Machine Learning</h3>
                <p className="text-slate-600">Deep learning, neural networks, and AI applications</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainability</h3>
                <p className="text-slate-600">AI-driven solutions for environmental challenges</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">💚</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Health Equity</h3>
                <p className="text-slate-600">Technology for improved healthcare access</p>
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Publications & Metrics</h2>
            <ScholarMetrics />
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              Interested in collaboration or have questions about my research? Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:spallab1@student.gsu.edu" className="text-blue-300 hover:text-blue-200 transition-colors">
                spallab1@student.gsu.edu
              </a>
              <span className="hidden sm:inline text-slate-400">|</span>
              <a href="https://scholar.google.com/citations?user=T7f9CiEAAAAJ" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                Google Scholar Profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
