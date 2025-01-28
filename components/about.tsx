import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "Html", level: 100 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 85 },
  { name: "SQL", level: 85 },
]

const qualifications = [
  {
    year: "2023-2025",
    degree: "Master of Computer Application",
    institution: "Model Institute of Engineering and Technology",
  },
  {
    year: "2023-2025",
    degree: "Master of Arts (History)",
    institution: "Indra Gandhi National Open University",
  },
  {
    year: "2019-2023",
    degree: "Bachelor of Science",
    institution: "Indira Gandhi National Open University",
  },
]

const certifications = [
  {
    name: "IBM AI/ML Minor Degree",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ILL8Z2XFE73F",
  },
  {
    name: "Google DATA ANALYTICS",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FS7RIOHTU353",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

        <div className="mb-16 animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000 animate-growWidth"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="relative border-l-2 border-muted-foreground pl-8 ml-4">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="mb-8 relative animate-slideInLeft"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary"></div>
                <div className="text-sm text-primary font-semibold">{qual.year}</div>
                <div className="text-xl font-medium">{qual.degree}</div>
                <div className="text-muted-foreground">{qual.institution}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <div className="text-lg font-medium text-primary">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">View Certificate →</div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

