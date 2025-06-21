import Link from "next/link";
import BalanceDemo from "../component/BalanceDemo";
import { ArrowLeft } from "lucide-react";


export default function BalancePage() {
  return (
    <div className="pt-16">
      <section className="principle-section max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="principle-title text-balance">Balance</h1>
          <p className="principle-description text-gray-600">
            Balance in typography refers to the visual equilibrium achieved through the thoughtful arrangement of text,
            whitespace, and other design elements. It creates harmony and makes content more pleasant and easier to
            consume.
          </p>
        </div>

        <div className="interactive-demo">
          <h2 className="text-2xl font-bold mb-8">Interactive Demonstration</h2>
          <BalanceDemo />
        </div>

        <div className="grid md:grid-cols-3 gap-8 my-16">
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-orange-900">Symmetrical</h3>
            <p className="text-orange-800">Equal visual weight on both sides of a central axis.</p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-orange-900">Asymmetrical</h3>
            <p className="text-orange-800">Different elements balanced through strategic placement.</p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🌊</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-orange-900">Radial</h3>
            <p className="text-orange-800">Elements arranged around a central focal point.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl my-16">
          <h3 className="text-2xl font-bold mb-6 text-orange-900">Achieving Visual Balance</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-800">Techniques</h4>
              <ul className="space-y-3 text-orange-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  Use whitespace strategically to create breathing room
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  Balance heavy elements with lighter counterparts
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  Consider visual weight of different font sizes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  Align elements to create visual connections
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-800">Common Mistakes</h4>
              <ul className="space-y-3 text-orange-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  Cramming too much content without breathing room
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  Ignoring the visual weight of different elements
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  Creating layouts that feel top-heavy or lopsided
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  Neglecting mobile balance considerations
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-12 border-t border-gray-200">
          <Link
            href="/consistency"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Previous: Consistency
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}