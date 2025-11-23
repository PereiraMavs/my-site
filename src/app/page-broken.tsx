import React from 'react'
import ScholarMetrics from '@/components/ScholarMetrics'

export default function ProfessionalHomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Subtle Background Accent */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              SNP
            </a>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#education" className="text-slate-700 hover:text-blue-600 transition-colors">Education</a>
              <a href="#experience" className="text-slate-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#research" className="text-slate-700 hover:text-blue-600 transition-colors">Research</a>
              <a href="#publications" className="text-slate-700 hover:text-blue-600 transition-colors">Publications</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                  Shovon Niverd<br />
                  <span className="text-blue-600">Pereira</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-600 font-semibold">
                  PhD Researcher in Explainable AI
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Computer Science PhD candidate at UT Arlington with 3+ years of industry experience 
                  at Samsung R&D. Specializing in interpretable machine learning, surrogate models, 
                  and adversarial robustness.
                </p>
              </div>
              
              <div className="flex gap-4 flex-wrap pt-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg font-medium"
                >
                  Get In Touch
                </a>
                <a 
                  href="#publications" 
                  className="px-8 py-3.5 border-2 border-slate-300 text-slate-900 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-medium"
                >
                  View Research
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-slate-600 mt-1">Years Industry</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600 mt-1">Citations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-slate-600 mt-1">Publications</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-slate-400 rounded-3xl transform rotate-3"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/shovon.jpg"
                    alt="Shovon Niverd Pereira"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Education</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">PhD in Computer Science</h3>
                  <p className="text-blue-600 font-medium mb-2">University of Texas at Arlington</p>
                  <a 
                    href="https://sercatuta-lei.github.io/team/" 
                    className="text-blue-600 hover:underline text-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Software Engineering Research Center →
                  </a>
                </div>
                <div className="text-slate-600 font-medium mt-4 md:mt-0">2022 - Present</div>
              </div>
              <p className="text-slate-700 mb-6">GPA: 3.7/4.0</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures & Algorithms', 'Distributed Systems', 'Data Analysis & Modelling', 'Machine Learning', 'Compilers', 'Advanced Software Engineering', 'Computational Models & Algorithms'].map(course => (
                      <span key={course} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">PhD Milestones</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { name: 'Diagnostic Evaluation', status: 'completed' },
                      { name: 'Comprehensive Exam', status: 'completed' },
                      { name: 'Coursework', status: 'completed' },
                      { name: 'Dissertation Proposal', status: 'in-progress' }
                    ].map(milestone => (
                      <div key={milestone.name} className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-slate-200">
                        <div className={`w-2.5 h-2.5 rounded-full ${milestone.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                        <span className="text-slate-700 flex-1">{milestone.name}</span>
                        <span className={`text-xs font-medium ${milestone.status === 'completed' ? 'text-green-600' : 'text-blue-600'}`}>
                          {milestone.status === 'completed' ? '✓' : 'In Progress'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Bachelor of Science</h3>
                  <p className="text-blue-600 font-medium mb-2">Military Institute of Science and Technology</p>
                  <p className="text-slate-700">Computer Science and Engineering • GPA: 3.37/4.0</p>
                </div>
                <div className="text-slate-600 font-medium mt-4 md:mt-0">2016 - 2019</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Experience</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Sr. Software Engineer',
                company: 'Samsung Research and Development Institute',
                location: 'Bangladesh',
                period: 'Feb 2020 - July 2022',
                logo: '/icons8-samsung-50.png',
                tags: ['Android', 'Kotlin'],
                points: [
                  'Developed Samsung Account application serving millions of users globally',
                  'Led development of terms & conditions, remote sign-in, and profile status modules',
                  'Optimized resource usage for low-end devices through research initiatives',
                  'Contributed to API design and application architecture'
                ]
              },
              {
                title: 'Graduate Research Assistant',
                company: "Dean's Office",
                location: 'UT Arlington',
                period: 'Summer 2024',
                logo: '/uta-the-university-of-texas-at-arlington-seeklogo-2.svg',
                tags: ['Research', 'Academic Administration'],
                points: [
                  'Conducted research projects under Dean's office supervision',
                  'Assisted with academic administrative tasks and initiatives',
                  'Collaborated on institutional research and development projects'
                ]
              },
              {
                title: 'Graduate Teaching Assistant',
                company: 'Department of Computer Science and Engineering',
                location: 'UT Arlington',
                period: 'Sep 2022 - Present',
                logo: '/uta-the-university-of-texas-at-arlington-seeklogo-2.svg',
                tags: ['Object-oriented Software Engineering', 'Distributed Systems', 'Machine Learning', 'Assembly Language'],
                points: [
                  'Prepare course materials and exams for bachelor and masters students',
                  'Grade quizzes, assignments, and final exams',
                  'Deliver lectures on behalf of course instructor when required',
                  'Guide and evaluate students on various projects'
                ]
              }
            ].map((job, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img src={job.logo} alt={job.company} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                      <p className="text-slate-600 text-sm">{job.location}</p>
                    </div>
                  </div>
                  <div className="text-slate-600 font-medium mt-4 md:mt-0">{job.period}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-slate-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Research</h2>
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium mb-6">
              Current Research
            </span>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Constructing Good Surrogate Models for Machine Learning
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Understanding and interpreting the decision-making process of black-box machine learning models 
              is often challenging, making their predictions less transparent. As ML models are increasingly 
              adopted in sensitive domains like healthcare and finance, ensuring trustworthy and accountable 
              decision-making is critical. This project aims to use surrogate models—simpler, interpretable 
              models that approximate the behavior of complex black-box systems—to improve transparency.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Explainable AI', 'Surrogate Models', 'Adversarial Attacks'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Publications</h2>
          
          <div className="mb-12">
            <ScholarMetrics />
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: 'Blockchain-based digital record-keeping in land administration system',
                authors: 'S Niverd Pereira, N Tasnim, R Sunny Rizon, M Nazrul Islam',
                venue: 'Proceedings of International Joint Conference on Advances in Computational Intelligence: IJCACI, 2021',
                link: 'https://link.springer.com/chapter/10.1007/978-981-16-0586-4_35'
              },
              {
                title: 'Multi-channel Approach Towards Digitizing the Land Management System of Bangladesh',
                authors: 'Shovon Niverd Pereira, Noshin Tasnim, M Shahir Rahman, Sanjida Nasreen Tumpa, Md Mahboob Karim, Rabius Sunny Rizon, Nabila Shahnaz Khan, Ruhul Ambia Remon',
                venue: '2018 IEEE International WIE Conference on Electrical and Computer Engineering, 2018',
                link: 'https://ieeexplore.ieee.org/abstract/document/8783017'
              }
            ].map((pub, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{pub.title}</h3>
                <p className="text-slate-700 mb-2">
                  <span className="font-semibold">Authors:</span> {pub.authors.split('Shovon Niverd Pereira').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="font-bold text-blue-600">Shovon Niverd Pereira</span>}
                    </React.Fragment>
                  ))}
                </p>
                <p className="text-blue-600 mb-4 italic">{pub.venue}</p>
                <a 
                  href={pub.link} 
                  className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Publication →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            Interested in collaboration or have questions about my research?
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '/icons8-gmail-50.png', label: 'Email', link: 'mailto:niverdpereira@gmail.com', text: 'niverdpereira@gmail.com' },
              { icon: '/icons8-linkedin-50.png', label: 'LinkedIn', link: 'https://www.linkedin.com/in/shovon-niverd-pereira/', text: 'Connect' },
              { icon: '/icons8-github-50.png', label: 'GitHub', link: 'https://github.com/PereiraMavs', text: 'View Code' },
              { icon: '/icons8-google-scholar-50.png', label: 'Google Scholar', link: 'https://scholar.google.com/citations?hl=en&authuser=1&user=Kokbc-oAAAAJ', text: 'Publications' }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target={contact.link.startsWith('mailto') ? undefined : '_blank'}
                rel={contact.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="bg-slate-800 hover:bg-slate-700 rounded-2xl p-6 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <img src={contact.icon} alt={contact.label} className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">{contact.label}</h3>
                <p className="text-slate-400 text-sm">{contact.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Shovon Niverd Pereira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
