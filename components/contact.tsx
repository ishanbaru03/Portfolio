"use client"

// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  // const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  // const { toast } = useToast()

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setFormStatus("sending")

  //   const formData = new FormData(e.currentTarget)
  //   const data = {
  //     name: formData.get("name"),
  //     email: formData.get("email"),
  //     message: formData.get("message"),
  //   }

  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })

  //     if (response.ok) {
  //       setFormStatus("success")
  //       toast({
  //         title: "Message sent successfully!",
  //         description: "We'll get back to you soon.",
  //       })
  //       ;(e.target as HTMLFormElement).reset()
  //     } else {
  //       throw new Error("Failed to send message")
  //     }
  //   } catch (error) {
  //     setFormStatus("error")
  //     toast({
  //       title: "Failed to send message",
  //       description: "Please try again later.",
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setFormStatus("idle")
  //   }
  // }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        {/* <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea id="message" name="message" rows={4} required />
          </div> */}
          {/* <Button type="submit" disabled={formStatus === "sending"} className="w-full">
            {formStatus === "sending" ? "Sending..." : "Send Message"}
          </Button> */}
        {/* </form> */}
      </div>
    </section>
  )
}

