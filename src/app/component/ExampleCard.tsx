import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ExampleCardProps {
  title: string
  description: string
  image: string
  category: string
  features: string[]
}

export default function ExampleCard({ title, description, image, category, features }: ExampleCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full mt-6 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium">
          View Details
        </button>
      </div>
    </div>
  )
}
