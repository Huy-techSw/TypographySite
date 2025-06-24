"use client"

import { useState } from "react"

export default function ContrastDemo() {
  const [selectedDemo, setSelectedDemo] = useState("size")

  const demos = {
    size: {
      title: "Size Contrast",
      content: (
        <div className="space-y-6">
          <h1 className="text-6xl font-bold">Large Heading</h1>
          <h2 className="text-3xl font-semibold">Medium Subheading</h2>
          <p className="text-lg">Regular body text that provides context and detailed information.</p>
          <p className="text-sm text-gray-600">Small caption or metadata text.</p>
        </div>
      ),
    },
    weight: {
      title: "Weight Contrast",
      content: (
        <div className="space-y-6">
          <h1 className="text-4xl font-light">Light Weight Heading</h1>
          <h2 className="text-4xl font-normal">Regular Weight Heading</h2>
          <h3 className="text-4xl font-bold">Bold Weight Heading</h3>
          <h4 className="text-4xl font-black">Black Weight Heading</h4>
        </div>
      ),
    },
    color: {
      title: "Color Contrast",
      content: (
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-600">Primary Color</h1>
          <h2 className="text-4xl font-bold text-gray-900">Dark Text</h2>
          <h3 className="text-4xl font-bold text-gray-500">Medium Gray</h3>
          <h4 className="text-4xl font-bold text-red-500">Accent Color</h4>
        </div>
      ),
    },
    style: {
      title: "Style Contrast",
      content: (
        <div className="space-y-6">
          <h1 className="text-4xl font-bold font-serif">Serif Heading</h1>
          <h2 className="text-4xl font-bold font-sans">Sans-serif Heading</h2>
          <p className="text-lg font-serif italic">Italic serif body text for emphasis and elegance.</p>
          <p className="text-lg font-mono">Monospace text for code or technical content.</p>
        </div>
      ),
    },
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(demos).map(([key, demo]) => (
          <button
            key={key}
            onClick={() => setSelectedDemo(key)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedDemo === key ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {demo.title}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 min-h-[300px]">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          {demos[selectedDemo as keyof typeof demos].title} Example
        </h3>
        {demos[selectedDemo as keyof typeof demos].content}
      </div>
    </div>
  )
}
