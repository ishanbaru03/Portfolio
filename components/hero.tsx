import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fadeIn">
            <h1 className="text-5xl font-bold mb-4">Ishaan Baru</h1>
            <p className="text-xl text-muted-foreground mb-8">
              I&apos;m a full-stack developer with a knack for crafting innovative solutions, blending HTML, CSS, and
              JavaScript with Python and data analytics to bring bold ideas to life.
            </p>
            <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
          <div className="flex-1 animate-fadeInRight">
            <Image
              src="/pic.png"
              alt="Profile"
              width={256}
              height={256}
              className="rounded-full mx-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

