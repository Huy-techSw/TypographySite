import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ContrastDemo from "../component/ContrastDemo"

export default function ContrastPage() {
  return (
    <div className="pt-16">
      <section className="principle-section max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="principle-title text-balance">Contrast</h1>
          <p className="principle-description text-gray-600">
            Contrast is the difference between design elements that makes them stand out from one another. In
            typography, contrast helps create visual interest, improve readability, and guide the reader's attention to
            the most important information.
          </p>
        </div>

        <div className="interactive-demo">
          <h2 className="text-2xl font-bold mb-8">Interactive Demonstration</h2>
          <ContrastDemo />
        </div>

        <div className="grid md:grid-cols-2 gap-12 my-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Types of Contrast</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <strong>Size Contrast:</strong> Using different font sizes to create hierarchy
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <strong>Weight Contrast:</strong> Mixing light, regular, and bold weights
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <strong>Color Contrast:</strong> Using different colors for emphasis
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <strong>Style Contrast:</strong> Combining serif and sans-serif fonts
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Best Practices</h3>
            <ul className="space-y-3">
              <li>• Ensure sufficient color contrast for accessibility</li>
              <li>• Use contrast purposefully, not randomly</li>
              <li>• Maintain readability while creating visual interest</li>
              <li>• Test contrast ratios for WCAG compliance</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-12 border-t border-gray-200">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to Home
          </Link>
          <Link
            href="/hierarchy"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Next: Hierarchy
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
