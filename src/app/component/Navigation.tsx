"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const principles = [
  { name: "Home", href: "/" },
  { name: "Contrast", href: "/contrast" },
  { name: "Hierarchy", href: "/hierarchy" },
  { name: "Consistency", href: "/consistency" },
  { name: "Balance", href: "/balance" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Typography Principles
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {principles.map((principle) => (
              <Link
                key={principle.name}
                href={principle.href}
                className={`transition-colors hover:text-blue-600 ${
                  pathname === principle.href ? "text-blue-600 font-medium" : "text-gray-700"
                }`}
              >
                {principle.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {principles.map((principle) => (
              <Link
                key={principle.name}
                href={principle.href}
                className={`block py-2 transition-colors hover:text-blue-600 ${
                  pathname === principle.href ? "text-blue-600 font-medium" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {principle.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
