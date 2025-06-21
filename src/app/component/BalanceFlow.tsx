"use client"

import { useEffect, useRef, useState } from "react"
import ScrollReveal from "./ScrollReveal"

export default function BalanceFlow() {
  const [tilt, setTilt] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
        setTilt(Math.sin(scrollProgress * Math.PI * 2) * 5)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className="w-full max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-orange-400">Balance</h2>
      </ScrollReveal>

      <div className="relative">
        <ScrollReveal delay={200}>
          <div
            className="flex items-center justify-center mb-16 transition-all duration-1000"
            style={{ transform: `rotate(${tilt}deg)` }}
          >
            <div className="w-64 h-2 bg-gray-600 rounded-full relative">
              <div className="absolute top-1/2 left-1/2 w-4 h-8 bg-orange-400 rounded transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute -top-8 left-8 w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center text-black font-bold">
                Heavy
              </div>
              <div className="absolute -top-6 right-8 w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center text-black font-bold text-sm">
                Light
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={400}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Visual Equilibrium</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Balance in typography isn't just about symmetry. It's about creating visual stability through thoughtful
                arrangement of elements, considering their visual weight, position, and relationship to whitespace.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-orange-400 rounded" />
                  <span className="text-gray-300">Symmetrical Balance</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-blue-400 rounded-full" />
                  <span className="text-gray-300">Asymmetrical Balance</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-pink-400 rounded-full" />
                  <span className="text-gray-300">Radial Balance</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-800 p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h4 className="text-4xl font-bold text-white mb-2">Perfect</h4>
                  <p className="text-gray-400">Typography</p>
                </div>

                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <h5 className="text-xl font-semibold text-orange-400">Left</h5>
                    <p className="text-sm text-gray-400">Content</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full mx-auto mb-2" />
                    <p className="text-xs text-gray-500">Center</p>
                  </div>

                  <div className="text-right">
                    <h5 className="text-xl font-semibold text-pink-400">Right</h5>
                    <p className="text-sm text-gray-400">Content</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
