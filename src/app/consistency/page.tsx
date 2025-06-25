import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import ConsistencyDemo from "../component/ConsistencyDemo"

export default function ConsistencyPage() {
  return (
    <div className="pt-16">
      <section className="principle-section max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="principle-title text-balance">Consistency</h1>
          <p className="principle-description text-gray-600">
            Consistency in typography creates a cohesive visual language that builds trust and improves user experience.
            It involves maintaining uniform patterns in font choices, sizing, spacing, and styling throughout a design
            system.
          </p>
        </div>

        <div className="interactive-demo">
          <h2 className="text-2xl font-bold mb-8">Interactive Demonstration</h2>
          <ConsistencyDemo />
        </div>

        <div className="grid md:grid-cols-2 gap-12 my-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-700">Elements of Consistency</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">Font Families</h4>
                <p className="text-gray-600">Limit to 2-3 font families maximum and use them systematically.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">Scale System</h4>
                <p className="text-gray-600">Use a consistent type scale for all headings and body text.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">Spacing Rules</h4>
                <p className="text-gray-600">Maintain consistent line heights and margins throughout.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-700">Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  ✓
                </span>
                <div>
                  <strong>Professional Appearance:</strong> Creates polished, trustworthy designs
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  ✓
                </span>
                <div>
                  <strong>Better Usability:</strong> Users learn patterns and navigate more easily
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  ✓
                </span>
                <div>
                  <strong>Faster Development:</strong> Reusable styles speed up design and development
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-12 border-t border-gray-200">
          <Link
            href="/hierarchy"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Previous: Hierarchy
          </Link>
          <Link
            href="/balance"
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            Next: Balance
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
