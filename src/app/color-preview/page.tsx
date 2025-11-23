import React from 'react'

export default function ColorPreviewPage() {
  const schemes = [
    {
      name: "Deep Ocean (Current)",
      primary: "bg-blue-700",
      primaryText: "text-blue-700",
      secondary: "bg-slate-900",
      accent: "bg-cyan-500",
      accentText: "text-cyan-500",
      background: "bg-slate-50",
      description: "Professional, trustworthy, academic"
    },
    {
      name: "Sky Breeze",
      primary: "bg-sky-500",
      primaryText: "text-sky-500",
      secondary: "bg-blue-600",
      accent: "bg-cyan-400",
      accentText: "text-cyan-400",
      background: "bg-blue-50",
      description: "Light, airy, refreshing"
    },
    {
      name: "Soft Mint",
      primary: "bg-emerald-500",
      primaryText: "text-emerald-500",
      secondary: "bg-teal-600",
      accent: "bg-green-400",
      accentText: "text-green-400",
      background: "bg-emerald-50",
      description: "Fresh, calming, natural"
    },
    {
      name: "Lavender Dream",
      primary: "bg-violet-500",
      primaryText: "text-violet-500",
      secondary: "bg-purple-600",
      accent: "bg-fuchsia-400",
      accentText: "text-fuchsia-400",
      background: "bg-purple-50",
      description: "Creative, elegant, sophisticated"
    },
    {
      name: "Peachy Warm",
      primary: "bg-orange-400",
      primaryText: "text-orange-400",
      secondary: "bg-rose-500",
      accent: "bg-pink-400",
      accentText: "text-pink-400",
      background: "bg-orange-50",
      description: "Warm, friendly, inviting"
    },
    {
      name: "Cloud Nine",
      primary: "bg-slate-400",
      primaryText: "text-slate-400",
      secondary: "bg-gray-600",
      accent: "bg-blue-300",
      accentText: "text-blue-300",
      background: "bg-slate-50",
      description: "Soft, neutral, modern"
    },
    {
      name: "Coral Reef",
      primary: "bg-teal-400",
      primaryText: "text-teal-400",
      secondary: "bg-cyan-600",
      accent: "bg-sky-300",
      accentText: "text-sky-300",
      background: "bg-cyan-50",
      description: "Tropical, vibrant, energetic"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Professional Color Schemes
          </h1>
          <p className="text-lg text-slate-600">
            Preview different color palettes for your portfolio website
          </p>
          <a href="/" className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Home
          </a>
        </div>

        <div className="grid gap-8">
          {schemes.map((scheme, index) => (
            <div key={index} className={`${scheme.background} rounded-2xl shadow-xl p-8 border border-slate-200`}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{scheme.name}</h2>
                <p className="text-slate-600 italic">{scheme.description}</p>
              </div>

              {/* Color Swatches */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <div className={`${scheme.primary} h-20 rounded-lg shadow-md mb-2`}></div>
                  <p className="text-sm font-medium text-slate-700">Primary</p>
                </div>
                <div>
                  <div className={`${scheme.secondary} h-20 rounded-lg shadow-md mb-2`}></div>
                  <p className="text-sm font-medium text-slate-700">Secondary</p>
                </div>
                <div>
                  <div className={`${scheme.accent} h-20 rounded-lg shadow-md mb-2`}></div>
                  <p className="text-sm font-medium text-slate-700">Accent</p>
                </div>
                <div>
                  <div className={`${scheme.background} h-20 rounded-lg shadow-md mb-2 border-2 border-slate-300`}></div>
                  <p className="text-sm font-medium text-slate-700">Background</p>
                </div>
              </div>

              {/* Sample Components */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className={`text-xl font-bold ${scheme.primaryText} mb-2`}>
                    Sample Heading
                  </h3>
                  <p className="text-slate-600 mb-4">
                    This is how your content would look with this color scheme. 
                    The combination creates a professional and cohesive design.
                  </p>
                  <div className="flex gap-3">
                    <button className={`${scheme.primary} text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                      Primary Button
                    </button>
                    <button className={`${scheme.accent} text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                      Accent Button
                    </button>
                  </div>
                </div>

                {/* Stats Card Sample */}
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className={`text-2xl font-bold ${scheme.primaryText} mb-1`}>15+</div>
                      <div className="text-sm text-slate-600">Publications</div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${scheme.accentText} mb-1`}>3</div>
                      <div className="text-sm text-slate-600">Years</div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${scheme.primaryText} mb-1`}>AI/ML</div>
                      <div className="text-sm text-slate-600">Focus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Which color scheme do you prefer? Let me know and I'll apply it to your site!
          </p>
          <a href="/" className="inline-block text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
