"use client"

import ScrollReveal from "./ScrollReveal"

export default function HierarchyFlow() {
  const levels = [
    { level: "H1", size: "text-6xl", text: "Primary Heading", color: "text-red-400" },
    { level: "H2", size: "text-4xl", text: "Secondary Heading", color: "text-orange-400" },
    { level: "H3", size: "text-2xl", text: "Tertiary Heading", color: "text-yellow-400" },
    { level: "H4", size: "text-xl", text: "Quaternary Heading", color: "text-green-400" },
    { level: "P", size: "text-base", text: "Body Text Content", color: "text-blue-400" },
  ]

  return (
    <>
      {levels.map((item, index) => (
        <div key={item.level} className="min-w-screen h-screen flex items-center justify-center px-12">
          <div className="text-center max-w-4xl">
            <ScrollReveal delay={index * 100}>
              <div className="mb-8">
                <span className="text-sm text-gray-500 uppercase tracking-wider">{item.level}</span>
                <h2 className={`${item.size} ${item.color} font-bold mb-4`}>{item.text}</h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Typography hierarchy creates order and guides readers through content systematically. Each level
                  serves a specific purpose in the information architecture.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-2">01</div>
                    <div className="text-sm text-gray-400">Structure</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-2">02</div>
                    <div className="text-sm text-gray-400">Priority</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-2">03</div>
                    <div className="text-sm text-gray-400">Flow</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-2">04</div>
                    <div className="text-sm text-gray-400">Clarity</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      ))}
    </>
  )
}
