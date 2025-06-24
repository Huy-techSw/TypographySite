"use client"

import { useState } from "react"

export default function HierarchyDemo() {
  const [showHierarchy, setShowHierarchy] = useState(true)

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setShowHierarchy(!showHierarchy)}
          className={`px-6 py-2 rounded-full transition-colors ${
            showHierarchy ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {showHierarchy ? "Hide Hierarchy" : "Show Hierarchy"}
        </button>
        <span className="text-sm text-gray-600">Toggle to see the difference hierarchy makes</span>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200">
        {showHierarchy ? (
          <article className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">The Future of Web Design</h1>
            <p className="text-lg text-gray-600 mb-8">Published on March 15, 2024 • 5 min read</p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Introduction to Modern Trends</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Web design continues to evolve at a rapid pace, with new technologies and user expectations driving
              innovation in how we create digital experiences.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Key Technologies Shaping the Future</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              From AI-powered design tools to advanced CSS capabilities, the landscape is changing dramatically.
            </p>

            <h4 className="text-lg font-medium text-gray-700 mb-2">Artificial Intelligence Integration</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI is revolutionizing how designers approach problem-solving and creative workflows.
            </p>
          </article>
        ) : (
          <article className="space-y-4">
            <p className="text-base text-gray-700">The Future of Web Design</p>
            <p className="text-base text-gray-700">Published on March 15, 2024 • 5 min read</p>
            <p className="text-base text-gray-700">Introduction to Modern Trends</p>
            <p className="text-base text-gray-700">
              Web design continues to evolve at a rapid pace, with new technologies and user expectations driving
              innovation in how we create digital experiences.
            </p>
            <p className="text-base text-gray-700">Key Technologies Shaping the Future</p>
            <p className="text-base text-gray-700">
              From AI-powered design tools to advanced CSS capabilities, the landscape is changing dramatically.
            </p>
            <p className="text-base text-gray-700">Artificial Intelligence Integration</p>
            <p className="text-base text-gray-700">
              AI is revolutionizing how designers approach problem-solving and creative workflows.
            </p>
          </article>
        )}
      </div>
    </div>
  )
}
