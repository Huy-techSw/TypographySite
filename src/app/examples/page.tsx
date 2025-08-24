import ExampleCard from "../component/ExampleCard"
import ScrollReveal from "../component/ScrollReveal"

const examples = [
  {
    title: "Modern Blog Layout",
    description: "Clean, readable typography perfect for content-focused websites",
    image: "/placeholder.svg?height=300&width=400",
    category: "Blog",
    features: ["Optimal line length", "Clear hierarchy", "Comfortable reading"],
  },
  {
    title: "Corporate Website",
    description: "Professional typography that builds trust and authority",
    image: "/placeholder.svg?height=300&width=400",
    category: "Corporate",
    features: ["Conservative fonts", "Strong contrast", "Consistent spacing"],
  },
  {
    title: "Creative Portfolio",
    description: "Expressive typography that showcases personality and creativity",
    image: "/placeholder.svg?height=300&width=400",
    category: "Creative",
    features: ["Display fonts", "Dynamic sizing", "Artistic layouts"],
  },
  {
    title: "E-commerce Product",
    description: "Clear, scannable typography optimized for conversion",
    image: "/placeholder.svg?height=300&width=400",
    category: "E-commerce",
    features: ["Product hierarchy", "Price emphasis", "CTA clarity"],
  },
  {
    title: "News Publication",
    description: "Editorial typography designed for long-form reading",
    image: "/placeholder.svg?height=300&width=400",
    category: "Editorial",
    features: ["Serif body text", "Multiple columns", "Caption styling"],
  },
  {
    title: "Mobile App Interface",
    description: "Touch-friendly typography optimized for small screens",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile",
    features: ["Large touch targets", "High contrast", "Minimal hierarchy"],
  },
]

export default function ExamplesPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Real-World Examples</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how typography principles are applied in different contexts and industries
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <ScrollReveal key={example.title} delay={index * 100}>
              <ExampleCard {...example} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Want to Submit Your Example?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Share your typography work with the community and help others learn from real-world applications.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Submit Example
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
