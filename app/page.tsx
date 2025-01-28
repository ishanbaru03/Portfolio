import About from "@/components/about"
import Footer from "@/components/footer"
import Header from "@/components/haeder"
import Hero from "@/components/hero"
import Services from "@/components/services"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}

