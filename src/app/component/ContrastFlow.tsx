"use client"

import { useEffect, useRef, useState } from "react"
import ScrollReveal from "./ScrollReveal"

export default function ContrastFlow() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
        setScrollY(scrollProgress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className="w-full max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
          <span className="text-white">Con</span>
          <span
            className="text-blue-400 transition-all duration-1000"
            style={{
              fontSize: `${3 + scrollY * 2}rem`,
              textShadow: `0 0 ${scrollY * 30}px rgba(59, 130, 246, 0.5)`,
            }}
          >
            trast
          </span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal delay={200}>
          <div className="space-y-8">
            <div className="transition-all duration-1000" style={{ transform: `scale(${1 + scrollY * 0.1})` }}>
              <h3 className="text-3xl font-light text-gray-300 mb-4">Light Weight</h3>
              <h3 className="text-3xl font-bold text-white mb-4">Bold Weight</h3>
              <h3 className="text-3xl font-black text-blue-400">Black Weight</h3>
            </div>

            <div className="space-y-4">
              <p
                className="text-lg text-gray-400 transition-all duration-1000"
                style={{ opacity: 0.5 + scrollY * 0.5 }}
              >
                Contrast creates visual hierarchy and guides attention through strategic differences in:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Font weights and sizes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Color and brightness
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full" />
                  Spacing and positioning
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl transition-all duration-1000"
            style={{
              transform: `translateY(${-scrollY * 20}px) rotateY(${scrollY * 5}deg)`,
              boxShadow: `0 ${scrollY * 20}px ${scrollY * 40}px rgba(0, 0, 0, 0.3)`,
            }}
          >
            <h4 className="text-2xl font-bold text-white mb-4">Live Example</h4>
            <div className="space-y-4">
              <h5 className="text-4xl font-bold text-blue-400">LARGE TITLE</h5>
              <h6 className="text-xl font-medium text-gray-300">Medium Subtitle</h6>
              <p className="text-sm text-gray-500">Small supporting text</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
