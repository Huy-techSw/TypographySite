"use client"

import { useState } from "react"
import { RefreshCw, Download } from "lucide-react"

const fontPairs = [
  { heading: "Playfair Display", body: "Source Sans Pro", category: "Serif + Sans" },
  { heading: "Montserrat", body: "Merriweather", category: "Sans + Serif" },
  { heading: "Oswald", body: "Open Sans", category: "Display + Sans" },
  { heading: "Lora", body: "Nunito Sans", category: "Serif + Sans" },
  { heading: "Poppins", body: "Inter", category: "Sans + Sans" },
  { heading: "Crimson Text", body: "Work Sans", category: "Serif + Sans" },
]

export default function FontPairTester() {
  const [currentPair, setCurrentPair] = useState(0)
  const [customText, setCustomText] = useState("The quick brown fox jumps over the lazy dog")
  const [headingText, setHeadingText] = useState("Beautiful Typography")

  const nextPair = () => {
    setCurrentPair((prev) => (prev + 1) % fontPairs.length)
  }

  const exportCSS = () => {
    const pair = fontPairs[currentPair]
    const css = `/* Font Pairing: ${pair.category} */
.heading {
  font-family: '${pair.heading}', serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.body {
  font-family: '${pair.body}', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}`

    const blob = new Blob([css], { type: "text/css" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${pair.heading.toLowerCase().replace(/\s+/g, "-")}-${pair.body.toLowerCase().replace(/\s+/g, "-")}.css`
    a.click()
    URL.revokeObjectURL(url)
  }

  const pair = fontPairs[currentPair]

  return (
    <div className="bg-gray-900 rounded-2xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-purple-400">Font Pair Tester</h2>
        <div className="flex gap-4">
          <button
            onClick={nextPair}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <RefreshCw size={16} />
            Next Pair
          </button>
          <button
            onClick={exportCSS}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <Download size={16} />
            Export CSS
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Heading Text</label>
            <input
              type="text"
              value={headingText}
              onChange={(e) => setHeadingText(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Body Text</label>
            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white resize-none"
            />
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4">Current Pairing</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Heading:</span>
                <span className="font-semibold">{pair.heading}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Body:</span>
                <span className="font-semibold">{pair.body}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Category:</span>
                <span className="text-purple-400">{pair.category}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {fontPairs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPair(index)}
                className={`h-8 rounded ${
                  index === currentPair ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
                } transition-colors`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white text-black p-8 rounded-xl">
          <h1
            className="mb-6"
            style={{
              fontFamily: `'${pair.heading}', serif`,
              fontSize: "2.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {headingText}
          </h1>
          <p
            style={{
              fontFamily: `'${pair.body}', sans-serif`,
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            {customText}
          </p>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3
              className="text-lg mb-2"
              style={{
                fontFamily: `'${pair.heading}', serif`,
                fontWeight: 600,
              }}
            >
              Subheading Example
            </h3>
            <p
              className="text-sm text-gray-600"
              style={{
                fontFamily: `'${pair.body}', sans-serif`,
              }}
            >
              This demonstrates how the font pairing works across different text sizes and weights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
