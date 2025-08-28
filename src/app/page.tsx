export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Shovon Niverd Pereira
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Education</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#research" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Research</a>
              <a href="#publications" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Publications</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Software Engineer &
                <span className="text-blue-600 dark:text-blue-400"> Researcher</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Passionate about creating innovative solutions through technology. 
                I specialize in full-stack development, research, and building scalable applications 
                that make a meaningful impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Get In Touch
                </a>
                <a 
                  href="#publications" 
                  className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View Publications
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  {/* Placeholder for profile photo */}
                  <div className="w-72 h-72 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-6xl text-slate-400 dark:text-slate-500">📸</span>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full">
                      Add your photo here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {/* Add your actual education details here */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Master's/Bachelor's Degree</h3>
                <span className="text-slate-600 dark:text-slate-400">Year - Year</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-2">University Name</p>
              <p className="text-slate-700 dark:text-slate-300">Major/Field of Study • GPA: X.X/4.0</p>
            </div>
            
            {/* Add more education entries as needed */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 opacity-60">
              <div className="text-center text-slate-500 dark:text-slate-400">
                <p>Add your education details here</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {/* Add your actual job history here */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Job Title</h3>
                  <p className="text-blue-600 dark:text-blue-400">Company Name</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400">Start Date - End Date</span>
              </div>
              <ul className="text-slate-700 dark:text-slate-300 space-y-2">
                <li>• Key achievement or responsibility</li>
                <li>• Another important contribution</li>
                <li>• Technologies used: React, Node.js, etc.</li>
              </ul>
            </div>

            {/* Placeholder for additional experience */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 opacity-60">
              <div className="text-center text-slate-500 dark:text-slate-400">
                <p>Add your work experience here</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Research & Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your research projects here */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Research Project Title</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Brief description of your research focus and methodology.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">ML</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">AI</span>
              </div>
            </div>

            {/* Placeholder cards */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 opacity-60">
              <div className="text-center text-slate-500 dark:text-slate-400">
                <p>Add your research projects</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 opacity-60">
              <div className="text-center text-slate-500 dark:text-slate-400">
                <p>Add more projects</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Publications</h2>
          <div className="space-y-6">
            {/* Add your publications here */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Publication Title</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">Authors: <span className="font-medium">Your Name</span>, Co-author Names</p>
              <p className="text-slate-600 dark:text-slate-400 mb-2">Conference/Journal Name, Year</p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Brief abstract or description of the publication.</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Publication →</a>
            </div>

            {/* Placeholder for publications */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 opacity-60">
              <div className="text-center text-slate-500 dark:text-slate-400">
                <p>Add your publications here</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Let's Connect</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            I'm always interested in discussing new opportunities, research collaborations, or innovative projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
              <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                your.email@example.com
              </a>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 dark:text-blue-400 hover:underline">
                linkedin.com/in/yourprofile
              </a>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐙</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">GitHub</h3>
              <a href="https://github.com/yourusername" className="text-blue-600 dark:text-blue-400 hover:underline">
                github.com/yourusername
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Shovon Niverd Pereira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
