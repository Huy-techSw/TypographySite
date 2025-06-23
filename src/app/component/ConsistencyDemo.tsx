"use client"

import { useState } from "react"

export default function ConsistencyDemo() {
  const [isConsistent, setIsConsistent] = useState(true)

  const consistentStyles = {
    h1: "text-3xl font-bold text-gray-900 mb-4",
    h2: "text-2xl font-semibold text-gray-800 mb-3",
    h3: "text-xl font-medium text-gray-700 mb-2",
    p: "text-base text-gray-600 mb-4 leading-relaxed",
    button: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
  }

  const inconsistentStyles = {
    h1: "text-4xl font-light text-red-500 mb-2 font-serif",
    h2: "text-lg font-black text-purple-600 mb-6 uppercase tracking-wide",
    h3: "text-2xl font-normal text-green-700 mb-1 italic",
    p: "text-sm text-gray-800 mb-8 leading-tight font-mono",
    button: "bg-orange-400 text-black px-8 py-1 rounded-full border-2 border-pink-300",
  }

  const styles = isConsistent ? consistentStyles : inconsistentStyles

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setIsConsistent(!isConsistent)}
          className={`px-6 py-2 rounded-full transition-colors ${
            isConsistent ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {isConsistent ? "Consistent Design" : "Inconsistent Design"}
        </button>
        <span className="text-sm text-gray-600">Toggle to see the impact of consistency</span>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200">
        <h1 className={styles.h1}>Welcome to Our Platform</h1>
        <p className={styles.p}>Discover amazing features and tools designed to help you succeed in your projects.</p>

        <h2 className={styles.h2}>Getting Started</h2>
        <p className={styles.p}>Follow these simple steps to begin your journey with our comprehensive platform.</p>

        <h3 className={styles.h3}>Step 1: Create Your Account</h3>
        <p className={styles.p}>Sign up for a free account to access all features and start building immediately.</p>

        <button className={styles.button}>Get Started Now</button>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            {isConsistent
              ? "Notice how the consistent typography creates a professional, easy-to-read layout."
              : "See how inconsistent typography creates visual chaos and reduces readability."}
          </p>
        </div>
      </div>
    </div>
  )
}
