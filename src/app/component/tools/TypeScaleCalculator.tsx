"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

const presetRatios = [
  { name: "Minor Second", ratio: 1.067 },
  { name: "Major Second", ratio: 1.125 },
  { name: "Minor Third", ratio: 1.2 },
  { name: "Major Third", ratio: 1.25 },
  { name: "Perfect Fourth", ratio: 1.333 },
  { name: "Augmented Fourth", ratio: 1.414 },
  { name: "Perfect Fifth", ratio: 1.5 },
  { name: "Golden Ratio", ratio: 1.618 },
]

export default function TypeScaleCalculator() {
  const [baseSize, setBaseSize] = useState(16)
  const [ratio, setRatio] = useState(1.25)
  const [steps, setSteps] = useState(6)
  const [copied, setCopied] = useState(false)

  const generateScale = () => {
    const scale = []
    for (let i = -2; i <= steps - 3; i++) {
      const size = Math.round(baseSize * Math.pow(ratio, i))
      scale.push({
        step: i,
        size,
        rem: Math.round((size / 16) * 100) / 100,
        name: getStepName(i),
      })
    }
    return scale.reverse()
  }

  const getStepName = (step: number) => {
    const names = {
      3: "H1 / Display",
      2: "H2 / Title",
      1: "H3 / Subtitle",
      0: "Body / Base",
      "-1": "Small",
      "-2": "Caption",
    }
    return names[step as keyof typeof names] || `Step ${step}`
  }

  const copyCSS = async () => {
    const scale = generateScale()
    const css = scale
      .map((item) => `.text-${item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")} { font-size: ${item.rem}rem; }`)
      .join("\n")

    await navigator.clipboard.writeText(css)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scale = generateScale()

  return (
    <div className="bg-gray-900 rounded-2xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-green-400">Type Scale Calculator</h2>
        <button
          onClick={copyCSS}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy CSS"}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Base Size (px)</label>
            <input
              type="number"
              value={baseSize}
              onChange={(e) => setBaseSize(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              min="12"
              max="24"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Scale Ratio</label>
            <input
              type="number"
              value={ratio}
              onChange={(e) => setRatio(Number(e.target.value))}
              step="0.001"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              min="1.1"
              max="2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Preset Ratios</label>
            <div className="grid grid-cols-1 gap-2">
              {presetRatios.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setRatio(preset.ratio)}
                  className={`text-left p-3 rounded-lg transition-colors ${
                    Math.abs(ratio - preset.ratio) < 0.001
                      ? "bg-green-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <div className="font-medium">{preset.name}</div>
                  <div className="text-sm opacity-75">{preset.ratio}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white text-black p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Type Scale Preview</h3>
            <div className="space-y-4">
              {scale.map((item) => (
                <div key={item.step} className="flex items-baseline gap-4">
                  <div className="w-24 text-sm text-gray-500 font-mono">
                    {item.size}px / {item.rem}rem
                  </div>
                  <div style={{ fontSize: `${item.size}px`, lineHeight: 1.2 }} className="font-semibold">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4">Sample Content</h4>
              <div style={{ fontSize: `${scale[0].size}px` }} className="font-bold mb-4">
                Main Heading
              </div>
              <div style={{ fontSize: `${scale[1].size}px` }} className="font-semibold mb-3">
                Section Title
              </div>
              <div style={{ fontSize: `${scale[3].size}px` }} className="mb-4 leading-relaxed">
                This is body text that demonstrates how the type scale works in practice. The consistent ratio creates
                visual harmony throughout the design.
              </div>
              <div style={{ fontSize: `${scale[4].size}px` }} className="text-gray-600">
                Small text for captions and metadata
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
