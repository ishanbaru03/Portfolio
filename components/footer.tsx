import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4">Ishaan Baru</h3>
            <p className="text-muted-foreground">
              Full Stack Developer
              <br />
              Data Scientist
            </p>
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ishanbaru03"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ishn1"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ishanbaru33@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© {(new Date()).getFullYear()} Ishaan Baru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

