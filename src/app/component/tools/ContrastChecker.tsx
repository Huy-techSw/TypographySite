"use client"

import { useState, useEffect } from "react"
import { Copy, Check } from "lucide-react"

export default function ContrastChecker() {
  const [foreground, setForeground] = useState("#ffffff")
  const [background, setBackground] = useState("#000000")
  const [contrastRatio, setContrastRatio] = useState(21)
  const [copied, setCopied] = useState(false)

  const getLuminance = (hex: string) => {
    const rgb = Number.parseInt(hex.slice(1), 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff

    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  const getContrastRatio = (color1: string, color2: string) => {
    const lum1 = getLuminance(color1)
    const lum2 = getLuminance(color2)
    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)
    return (brightest + 0.05) / (darkest + 0.05)
  }

  useEffect(() => {
    const ratio = getContrastRatio(foreground, background)
    setContrastRatio(Math.round(ratio * 100) / 100)
  }, [foreground, background])

  const getGrade = () => {
    if (contrastRatio >= 7) return { grade: "AAA", color: "text-green-400" }
    if (contrastRatio >= 4.5) return { grade: "AA", color: "text-yellow-400" }
    if (contrastRatio >= 3) return { grade: "AA Large", color: "text-orange-400" }
    return { grade: "Fail", color: "text-red-400" }
  }

  const copyColors = async () => {
    await navigator.clipboard.writeText(
      `Foreground: ${foreground}\nBackground: ${background}\nContrast: ${contrastRatio}:1`,
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const grade = getGrade()

  return (
    <div className="bg-gray-900 rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Contrast Checker</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Foreground Color</label>
            <div className="flex gap-4">
              <input
                type="color"
                value={foreground}
                onChange={(e) => setForeground(e.target.value)}
                className="w-16 h-12 rounded-lg border-2 border-gray-700"
              />
              <input
                type="text"
                value={foreground}
                onChange={(e) => setForeground(e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Background Color</label>
            <div className="flex gap-4">
              <input
                type="color"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="w-16 h-12 rounded-lg border-2 border-gray-700"
              />
              <input
                type="text"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Contrast Ratio</h3>
              <button
                onClick={copyColors}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="text-4xl font-bold mb-2">{contrastRatio}:1</div>
            <div className={`text-lg font-semibold ${grade.color}`}>{grade.grade}</div>
          </div>
        </div>

        <div className="space-y-6">
          <div
            className="p-8 rounded-xl min-h-[200px] flex items-center justify-center"
            style={{ backgroundColor: background, color: foreground }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Sample Text</h3>
              <p className="text-lg mb-4">This is how your text will look with these colors.</p>
              <p className="text-sm">Small text example for readability testing.</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4">WCAG Guidelines</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>AAA (7:1)</span>
                <span className={contrastRatio >= 7 ? "text-green-400" : "text-gray-500"}>
                  {contrastRatio >= 7 ? "✓ Pass" : "✗ Fail"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>AA (4.5:1)</span>
                <span className={contrastRatio >= 4.5 ? "text-green-400" : "text-gray-500"}>
                  {contrastRatio >= 4.5 ? "✓ Pass" : "✗ Fail"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>AA Large (3:1)</span>
                <span className={contrastRatio >= 3 ? "text-green-400" : "text-gray-500"}>
                  {contrastRatio >= 3 ? "✓ Pass" : "✗ Fail"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
