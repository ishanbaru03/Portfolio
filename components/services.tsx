import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Web Development",
    description: "Full-stack web development using modern technologies",
    icon: "🌐",
  },
  {
    title: "DATA ANALYTICS",
    description: "Deliver data-driven solutions that improve efficiency and drive growth.",
    icon: "📱",
  },
  {
    title: "DATA SCIENCE",
    description: "Providing data-driven solutions to complex business challenges.",
    icon: "📊",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

