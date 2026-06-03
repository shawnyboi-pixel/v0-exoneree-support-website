'use client'

import { useState } from 'react'
import { Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-4">
            <span className="text-balance">Get in Touch</span>
          </h1>
          <p className="text-lg text-foreground/70">We&apos;d love to hear from you. Reach out to us with questions, feedback, or collaboration opportunities.</p>
        </div>

        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Email Cards */}
          <Card className="border-border/60">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Primary Email</h3>
                  <a href="mailto:shawnxachen11@gmail.com" className="text-accent hover:text-accent/80 transition-colors break-all">
                    shawnxachen11@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Organization Email</h3>
                  <a href="mailto:shawn@youthforinnocence.org" className="text-accent hover:text-accent/80 transition-colors break-all">
                    shawn@youthforinnocence.org
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-border/60">
            <CardContent className="pt-8">
              <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <button className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                  <Linkedin className="size-6" />
                </button>
                <button className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                  <Instagram className="size-6" />
                </button>
                <button className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                  <MessageCircle className="size-6" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="border-border/60">
          <CardContent className="pt-8 md:pt-10">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>

            {submitted ? (
              <div className="rounded-lg bg-green-50/80 border border-green-200/60 p-6 text-center">
                <p className="text-lg font-semibold text-green-900 mb-2">Thank you for reaching out!</p>
                <p className="text-green-800">We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-background hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
