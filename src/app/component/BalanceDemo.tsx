"use client"

import { useState } from "react"

export default function BalanceDemo() {
  const [balanceType, setBalanceType] = useState("balanced")

  const layouts = {
    balanced: {
      title: "Well-Balanced Layout",
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Beautiful Typography</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This layout demonstrates proper balance through strategic use of whitespace&apos; appropriate sizing&apos; and
              thoughtful placement of elements.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Visual Element</span>
          </div>
        </div>
      ),
    },
    unbalanced: {
      title: "Unbalanced Layout",
      content: (
        <div className="min-h-[400px]">
          <div className="text-left mb-2">
            <h2 className="text-5xl font-black text-purple-600 mb-1">HUGE OVERWHELMING TITLE</h2>
            <p className="text-xs text-gray-400 leading-tight mb-1">
              tiny cramped text that's hard to read and creates visual tension
            </p>
            <button className="bg-red-600 text-white px-2 py-1 text-xs rounded">Button</button>
          </div>
          <div className="bg-yellow-200 w-full h-48 mb-2"></div>
          <div className="bg-green-200 w-1/4 h-32 ml-auto"></div>
          <p className="text-2xl font-bold text-orange-600 text-right mt-1">Random large text at the bottom</p>
        </div>
      ),
    },
    asymmetrical: {
      title: "Asymmetrical Balance",
      content: (
        <div className="min-h-[400px] relative">
          <div className="absolute top-0 left-0 w-1/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Asymmetrical Design</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              This layout uses asymmetrical balance where different sized elements are strategically placed to create
              visual equilibrium.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-medium">Large Visual</span>
          </div>
          <div className="absolute bottom-0 left-1/4 w-1/4 h-20 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-green-600 text-sm">Medium</span>
          </div>
          <div className="absolute bottom-0 right-8 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-orange-600 text-xs">Small</span>
          </div>
        </div>
      ),
    },
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(layouts).map(([key, layout]) => (
          <button
            key={key}
            onClick={() => setBalanceType(key)}
            className={`px-4 py-2 rounded-full transition-colors ${
              balanceType === key ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {layout.title}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          {layouts[balanceType as keyof typeof layouts].title}
        </h3>
        {layouts[balanceType as keyof typeof layouts].content}
      </div>
    </div>
  )
}
