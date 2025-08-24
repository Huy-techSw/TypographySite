"use client"

import { useState } from "react"

export default function LineHeightCalculator() {
  const [fontSize, setFontSize] = useState(16)
  const [lineHeight, setLineHeight] = useState(1.5)

  const recommendations = [
    { type: "Headings", min: 1.1, max: 1.3, optimal: 1.2 },
    { type: "Body Text", min: 1.4, max: 1.6, optimal: 1.5 },
    { type: "Small Text", min: 1.3, max: 1.5, optimal: 1.4 },
    { type: "Display", min: 1.0, max: 1.2, optimal: 1.1 },
  ]

  const getRecommendation = () => {
    if (fontSize >= 32) return recommendations[3] // Display
    if (fontSize >= 20) return recommendations[0] // Headings
    if (fontSize >= 14) return recommendations[1] // Body
    return recommendations[2] // Small
  }

  const currentRec = getRecommendation()
  const isOptimal = lineHeight >= currentRec.min && lineHeight <= currentRec.max

  return (
    <div className="bg-gray-900 rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-8 text-yellow-400">Line Height Calculator</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Font Size (px)</label>
            <input
              type="range"
              min="12"
              max="72"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-2xl font-bold mt-2">{fontSize}px</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Line Height</label>
            <input
              type="range"
              min="1"
              max="2.5"
              step="0.1"
              value={lineHeight}
              onChange={(e) => setLineHeight(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-2xl font-bold mt-2">{lineHeight}</div>
          </div>

          <div className={`p-4 rounded-lg ${isOptimal ? "bg-green-900" : "bg-red-900"}`}>
            <h4 className="font-semibold mb-2">{isOptimal ? "✓ Good Line Height" : "⚠ Needs Adjustment"}</h4>
            <p className="text-sm">
              For {currentRec.type.toLowerCase()}, recommended range is {currentRec.min} - {currentRec.max}
            </p>
            <p className="text-sm mt-1">Optimal: {currentRec.optimal}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Quick Presets</h4>
            <div className="grid grid-cols-2 gap-2">
              {recommendations.map((rec) => (
                <button
                  key={rec.type}
                  onClick={() => setLineHeight(rec.optimal)}
                  className="p-2 bg-gray-700 rounded text-sm hover:bg-gray-600 transition-colors"
                >
                  {rec.type}
                  <br />
                  <span className="text-yellow-400">{rec.optimal}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Live Preview</h3>
          <div
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: lineHeight,
            }}
            className="mb-6"
          >
            Typography is the art and technique of arranging type to make written language legible, readable, and
            appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths,
            line-spacing, and letter-spacing, and adjusting the space between pairs of letters.
          </div>

          <div className="text-sm text-gray-600 space-y-2">
            <div>Font Size: {fontSize}px</div>
            <div>
              Line Height: {lineHeight} ({Math.round(fontSize * lineHeight)}px)
            </div>
            <div>Leading: {Math.round(fontSize * lineHeight - fontSize)}px</div>
          </div>
        </div>
      </div>
    </div>
  )
}
