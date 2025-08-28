export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Doodles */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {/* Computer and Tech Doodles */}
        <div className="absolute top-20 left-10 text-6xl text-pink-600 transform rotate-12">💻</div>
        <div className="absolute top-40 right-20 text-4xl text-purple-400 transform -rotate-12">🤖</div>
        <div className="absolute top-60 left-1/4 text-5xl text-rose-500 transform rotate-45">⚙️</div>
        <div className="absolute top-80 right-1/3 text-3xl text-pink-500 transform -rotate-30">🧠</div>
        <div className="absolute top-32 right-10 text-4xl text-rose-400 transform rotate-20">📊</div>
        
        <div className="absolute top-96 left-20 text-5xl text-purple-400 transform -rotate-15">🔬</div>
        <div className="absolute top-1/2 right-16 text-4xl text-pink-500 transform rotate-30">📱</div>
        <div className="absolute top-3/4 left-1/3 text-6xl text-rose-500 transform -rotate-45">⚡</div>
        <div className="absolute bottom-40 right-1/4 text-4xl text-pink-600 transform rotate-60">🎯</div>
        <div className="absolute bottom-60 left-16 text-5xl text-purple-400 transform -rotate-20">💡</div>
        
        <div className="absolute bottom-80 right-12 text-3xl text-rose-400 transform rotate-15">🚀</div>
        <div className="absolute bottom-96 left-1/2 text-4xl text-pink-500 transform -rotate-60">📈</div>
        <div className="absolute top-1/3 left-12 text-5xl text-rose-500 transform rotate-75">🔧</div>
        <div className="absolute bottom-1/3 right-8 text-4xl text-purple-400 transform -rotate-30">⚗️</div>
        <div className="absolute top-2/3 right-1/2 text-3xl text-pink-600 transform rotate-45">🔍</div>
        
        {/* Additional scattered doodles */}
        <div className="absolute top-1/4 right-1/4 text-4xl text-purple-400 transform rotate-90">💾</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl text-rose-500 transform -rotate-75">🖥️</div>
        <div className="absolute top-3/4 left-8 text-3xl text-pink-500 transform rotate-30">📡</div>
        <div className="absolute bottom-20 right-1/3 text-4xl text-rose-400 transform -rotate-45">⌨️</div>
        <div className="absolute top-52 left-1/2 text-5xl text-purple-400 transform rotate-60">🖱️</div>
      </div>

      {/* Navigation */}
              <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-pink-700">SP</div>
          <div className="space-x-6">
            <a href="#about" className="text-purple-600 hover:text-pink-600 transition-colors">About</a>
            <a href="#education" className="text-purple-600 hover:text-pink-600 transition-colors">Education</a>
            <a href="#experience" className="text-purple-600 hover:text-pink-600 transition-colors">Experience</a>
            <a href="#research" className="text-purple-600 hover:text-pink-600 transition-colors">Research</a>
            <a href="#contact" className="text-purple-600 hover:text-pink-600 transition-colors">Contact</a>
          </div>
        </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-pink-900 mb-4">
                Shovon Niverd Pereira
              </h1>
              <p className="text-xl text-purple-700 mb-8">
                Software Engineer & Researcher
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
                I'm passionate about software development, artificial intelligence, 
                and cutting-edge research. Currently pursuing my Master's in Computer Science 
                with a focus on machine learning and data science.
              </p>
              <div className="flex gap-4 mb-8">
                <a 
                  href="#contact" 
                  className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Get In Touch
                </a>
                <a 
                  href="#research" 
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                >
                  View Research
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                                <div className="w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-600 rounded-full flex items-center justify-center">
                  {/* Profile photo placeholder */}
                  <div className="w-72 h-72 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-6xl text-slate-400 dark:text-slate-500">📸</span>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full">
                      Add your photo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {/* Add your actual education details here */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-pink-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-purple-800">Master's/Bachelor's Degree</h3>
                <span className="text-pink-700">Year - Year</span>
              </div>
              <p className="text-purple-600 mb-2">University Name</p>
              <p className="text-gray-700">Major/Field of Study • GPA: X.X/4.0</p>
            </div>
            
            {/* Add more education entries as needed */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-pink-200 opacity-60">
              <div className="text-center text-gray-500">
                <p>Add your education details here</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {/* Add your actual job history here */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800">Job Title</h3>
                  <p className="text-pink-700">Company Name</p>
                </div>
                <span className="text-purple-600">Start Date - End Date</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Key achievement or responsibility</li>
                <li>• Another important contribution</li>
                <li>• Technologies used: React, Node.js, etc.</li>
              </ul>
            </div>

            {/* Placeholder for additional experience */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-200 opacity-60">
              <div className="text-center text-gray-500">
                <p>Add your work experience here</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">Research & Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your research projects here */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Research Project Title</h3>
              <p className="text-gray-600 mb-4">Brief description of your research focus and methodology.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-sm">ML</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">AI</span>
              </div>
            </div>

            {/* Placeholder cards */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-200 opacity-60">
              <div className="text-center text-gray-500">
                <p>Add your research projects</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-rose-200 opacity-60">
              <div className="text-center text-gray-500">
                <p>Add more projects</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">Publications</h2>
          <div className="space-y-6">
            {/* Add your publications here */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Publication Title</h3>
              <p className="text-purple-600 mb-2">Authors: <span className="font-medium">Your Name</span>, Co-author Names</p>
              <p className="text-purple-600 mb-2">Conference/Journal Name, Year</p>
              <p className="text-gray-700 mb-4">Brief abstract or description of the publication.</p>
              <a href="#" className="text-pink-700 hover:underline">View Publication →</a>
            </div>

            {/* Placeholder for publications */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-200 opacity-60">
              <div className="text-center text-gray-500">
                <p>Add your publications here</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-900 mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-700 mb-12">
            I'm always interested in discussing new opportunities, research collaborations, or innovative projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Email</h3>
              <a href="mailto:niverdpereira@gmail.com" className="text-pink-700 hover:underline">
                niverdpereira@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/shovon-niverd-pereira/" className="text-pink-700 hover:underline">
                linkedin.com/in/shovon-niverd-pereira
              </a>
            </div>
            <div className="text-center">
              <div className="bg-rose-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐙</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">GitHub</h3>
              <a href="https://github.com/PereiraMavs" className="text-pink-700 hover:underline">
                github.com/PereiraMavs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-pink-200">
        <div className="max-w-6xl mx-auto text-center text-purple-600">
          <p>&copy; 2025 Shovon Niverd Pereira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
