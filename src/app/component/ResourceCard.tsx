import type { LucideIcon } from "lucide-react"
import { Download } from "lucide-react"

interface ResourceCardProps {
  title: string
  description: string
  type: string
  icon: LucideIcon
  size: string
  downloads: string
}

export default function ResourceCard({ title, description, type, icon: Icon, size, downloads }: ResourceCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-blue-600/20 p-3 rounded-lg">
          <Icon className="text-blue-400" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <span className="text-sm text-blue-400 font-medium">{type}</span>
        </div>
      </div>

      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>{size}</span>
        <span>{downloads} downloads</span>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2 group-hover:scale-105 transform duration-200">
        <Download size={16} />
        Download Free
      </button>
    </div>
  )
}
