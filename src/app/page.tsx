import React from 'react'
import Image from 'next/image'

export default function HomePage() {
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
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="text-xl sm:text-2xl font-bold text-pink-700">SP</div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm sm:text-base">
          <a href="#about" className="text-purple-600 hover:text-pink-600 transition-colors">About</a>
          <a href="#education" className="text-purple-600 hover:text-pink-600 transition-colors">Education</a>
          <a href="#experience" className="text-purple-600 hover:text-pink-600 transition-colors">Experience</a>
          <a href="#research" className="text-purple-600 hover:text-pink-600 transition-colors">Research</a>
          <a href="#contact" className="text-purple-600 hover:text-pink-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-900 mb-4 leading-tight">
                Shovon Niverd Pereira
              </h1>
              <p className="text-lg sm:text-xl text-purple-700 mb-6 lg:mb-8">
                Software Engineer & Researcher
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                I'm passionate about software development, artificial intelligence, 
                and cutting-edge research. Currently pursuing my Master's in Computer Science 
                with a focus on machine learning and data science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a 
                  href="#contact" 
                  className="bg-pink-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors text-center"
                >
                  Get In Touch
                </a>
                <a 
                  href="#research" 
                  className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-center"
                >
                  View Research
                </a>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-pink-300 to-purple-600 rounded-full flex items-center justify-center p-2">
                  {/* Profile photo */}
                  <div className="w-60 h-60 sm:w-68 sm:h-68 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-white">
                    <Image
                      src="/shovon.jpg"
                      alt="Shovon Niverd Pereira"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover"
                      priority
                    />
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
                <h3 className="text-xl font-semibold text-purple-800">Ph.D. in Computer Science and Engineering</h3>
                <span className="text-pink-700">2022 - Ongoing</span>
              </div>
              <p className="text-purple-600 mb-2">The University of Texas at Arlington</p>
              <p className="text-gray-700">Software Engineering for AI • GPA: 3.7/4.0</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-pink-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-purple-800">Bachelor of Science</h3>
                <span className="text-pink-700">2016 - 2019</span>
              </div>
              <p className="text-purple-600 mb-2">Military Institute of Science and Technology</p>
              <p className="text-gray-700">Computer Science and Engineering • GPA: 3.37/4.0</p>
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
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src="/icons8-samsung-50.png"
                      alt="Samsung"
                      width={32}
                      height={32}
                      className="w-8 h-8 opacity-80"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800">Sr. Software Engineer</h3>
                    <p className="text-lg font-bold text-pink-700">Samsung Research and Development Institute</p>
                  </div>
                </div>
                <span className="text-purple-600">Feb 2020 - July 2022</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium border border-purple-300">Android</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium border border-pink-300">Kotlin</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Developed Samsung Account application as a part of Android Application team</li>
                <li>• Led the development of terms & condition, remote sign in, profile status module</li>
                <li>• Worked on several other modules such as sign out, API and app architecture</li>
                <li>• Worked as part of a research team to minimize resource usage of Samsung Account in low-end devices</li>
                <li>• Samsung Account is being used globally as the principal account and eco-system manager for Samsung devices</li>
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src="/uta-the-university-of-texas-at-arlington-seeklogo-2.svg"
                      alt="UTA"
                      width={32}
                      height={32}
                      className="w-8 h-8 opacity-80"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800">Graduate Teaching Assistant</h3>
                    <p className="text-lg font-bold text-pink-700">Department of Computer Science and Engineering</p>
                    <p className="text-purple-600">The University of Texas at Arlington</p>
                  </div>
                </div>
                <span className="text-purple-600">September 2022 - Ongoing</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium border border-rose-300">Object-oriented Software Engineering</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-300">Distributed Systems</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-300">Machine Learning</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium border border-orange-300">Assembly Language</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Prepare course material and exams for bachelor and masters level students</li>
                <li>• Grade quizzes and final exams</li>
                <li>• Deliver lectures on behalf of course instructor when required</li>
                <li>• Guide and evaluate students on various projects</li>
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
              <h3 className="text-xl font-bold text-purple-900 mb-4 leading-tight">Blockchain-based digital record-keeping in land administration system</h3>
              <div className="mb-3">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Authors:</span>
                <p className="text-purple-700 font-medium mt-1"><span className="bg-pink-100 px-2 py-1 rounded font-bold text-pink-800">S Niverd Pereira</span>, N Tasnim, R Sunny Rizon, M Nazrul Islam</p>
              </div>
              <p className="text-purple-600 mb-4 font-medium italic">Proceedings of International Joint Conference on Advances in Computational Intelligence: IJCACI, 2021</p>
              <p className="text-gray-700 mb-6 leading-relaxed">In this work, a blockchain-based framework is proposed to develop a land administration system. The proposed framework was simulated in Ethereum blockchain platform.</p>
              <a href="https://link.springer.com/chapter/10.1007/978-981-16-0586-4_35" className="inline-flex items-center bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer">
                📖 View Publication
              </a>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4 leading-tight">Multi-channel Approach Towards Digitizing the Land Management System of Bangladesh</h3>
              <div className="mb-3">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Authors:</span>
                <p className="text-purple-700 font-medium mt-1"><span className="bg-pink-100 px-2 py-1 rounded font-bold text-pink-800">Shovon Niverd Pereira</span>, Noshin Tasnim, M Shahir Rahman, Sanjida Nasreen Tumpa, Md Mahboob Karim, Rabius Sunny Rizon, Nabila Shahnaz Khan, Ruhul Ambia Remon</p>
              </div>
              <p className="text-purple-600 mb-4 font-medium italic">2018 IEEE International WIE Conference on Electrical and Computer Engineering, 2018</p>
              <p className="text-gray-700 mb-6 leading-relaxed">This paper introduces a cloud based multi-channel approach to synchronize various aspects of land management to improve the current paper-based system into a faster and efficient one.</p>
              <a href="https://ieeexplore.ieee.org/abstract/document/8783017" className="inline-flex items-center bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors font-semibold" target="_blank" rel="noopener noreferrer">
                📖 View Publication
              </a>
            </div>

            {/* Placeholder for publications */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-200 opacity-60">
              <div className="text-center text-gray-500">
                <p>Add more publications here</p>
                <p className="text-sm mt-2">Edit in src/app/page.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-900 mb-6 lg:mb-8">Let's Connect</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 lg:mb-12 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, research collaborations, or innovative projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="bg-pink-200 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Image
                  src="/icons8-gmail-50.png"
                  alt="Email"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </div>
              <h3 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Email</h3>
              <a href="mailto:niverdpereira@gmail.com" className="text-pink-700 hover:underline text-xs sm:text-sm break-all">
                niverdpereira@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="bg-blue-200 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Image
                  src="/icons8-linkedin-50.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </div>
              <h3 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/shovon-niverd-pereira/" className="text-pink-700 hover:underline text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Image
                  src="/icons8-github-50.png"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </div>
              <h3 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">GitHub</h3>
              <a href="https://github.com/PereiraMavs" className="text-pink-700 hover:underline text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
            <div className="text-center">
              <div className="bg-green-200 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Image
                  src="/icons8-google-scholar-50.png"
                  alt="Google Scholar"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </div>
              <h3 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Google Scholar</h3>
              <a href="https://scholar.google.com/citations?hl=en&authuser=1&user=Kokbc-oAAAAJ" className="text-pink-700 hover:underline text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
                View Publications
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
