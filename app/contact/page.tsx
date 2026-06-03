'use client'

import { useState } from 'react'
import { Linkedin, Instagram, MessageCircle } from 'lucide-react'

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
    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-4">
            <span className="text-balance">Get in Touch</span>
          </h1>
          <p className="text-lg text-foreground/70">We&apos;d love to hear from you. Reach out with questions, feedback, or collaboration opportunities.</p>
        </div>

        {/* Email Contact Info */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-6">Email</h2>
          <div className="space-y-4 text-lg">
            <a href="mailto:shawnxachen11@gmail.com" className="inline-block text-accent hover:text-accent/80 transition-colors">
              shawnxachen11@gmail.com
            </a>
            <br />
            <a href="mailto:shawn@youthforinnocence.org" className="inline-block text-accent hover:text-accent/80 transition-colors">
              shawn@youthforinnocence.org
            </a>
          </div>
        </div>

        {/* Social Connect */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-6">Connect</h2>
          <div className="flex gap-4">
            <button className="flex size-12 items-center justify-center rounded-full border-2 border-accent/40 text-accent hover:border-accent hover:bg-accent/5 transition-all">
              <Linkedin className="size-5" />
            </button>
            <button className="flex size-12 items-center justify-center rounded-full border-2 border-accent/40 text-accent hover:border-accent hover:bg-accent/5 transition-all">
              <Instagram className="size-5" />
            </button>
            <button className="flex size-12 items-center justify-center rounded-full border-2 border-accent/40 text-accent hover:border-accent hover:bg-accent/5 transition-all">
              <MessageCircle className="size-5" />
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border-t border-border/30 pt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Send a Message</h2>

          {submitted ? (
            <div className="rounded-lg bg-accent/5 border border-accent/20 p-6 text-center">
              <p className="text-lg font-semibold text-accent mb-2">Thank you!</p>
              <p className="text-foreground/70">We&apos;ll get back to you as soon as possible.</p>
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
        </div>
      </div>
    </section>
  )
}
