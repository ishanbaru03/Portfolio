"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ModeToggle } from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background backdrop-blur supports-[backdrop-filter]:bg-background sticky top-0 z-50 w-full border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Portfolio</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground/60 hover:text-foreground">
                Home
              </a>
              <a href="#about" className="text-foreground/60 hover:text-foreground">
                About
              </a>
              <a href="#services" className="text-foreground/60 hover:text-foreground">
                Services
              </a>
              <a
                href="https://github.com/ishanbaru03?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground"
              >
                Projects
              </a>
              <a href="#contact" className="text-foreground/60 hover:text-foreground">
                Contact
              </a>
            </div>
            <ModeToggle />
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-foreground/60 hover:text-foreground">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 text-foreground/60 hover:text-foreground">
              About
            </a>
            <a href="#services" className="block px-3 py-2 text-foreground/60 hover:text-foreground">
              Services
            </a>
            <a
              href="https://github.com/ishanbaru03?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground"
            >
              Projects
            </a>
            <a href="#contact" className="block px-3 py-2 text-foreground/60 hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

