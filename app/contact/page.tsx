'use client'

import { useState } from 'react'
import { Linkedin, Instagram, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('[v0] Contact form error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Info */}
          <div className="lg:col-span-1">
            <div className="mb-12 animate-fade-in-up">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
                <span className="text-balance">Get in Touch</span>
              </h1>
              <p className="text-base text-foreground/70 leading-relaxed">{`We'd love to hear from you. Reach out with questions, feedback, or collaboration opportunities.`}</p>
            </div>

            {/* Email Contact Info */}
            <div className="mb-12">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-6">Email</h2>
              <div className="space-y-4">
                <a href="mailto:shawnxachen11@gmail.com" className="block text-accent hover:text-accent/80 transition-colors py-2">
                  shawnxachen11@gmail.com
                </a>
                <a href="mailto:shawn@youthforinnocence.org" className="block text-accent hover:text-accent/80 transition-colors py-2">
                  shawn@youthforinnocence.org
                </a>
              </div>
            </div>

            {/* Social Connect */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-6">Connect</h2>
              <div className="flex gap-4">
                <button className="flex size-12 md:size-14 items-center justify-center rounded-full border-2 border-accent/40 text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-110 active:scale-95">
                  <Linkedin className="size-6 md:size-7" />
                </button>
                <button className="flex size-12 md:size-14 items-center justify-center rounded-full border-2 border-accent/40 text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-110 active:scale-95">
                  <Instagram className="size-6 md:size-7" />
                </button>
                <button className="flex size-12 md:size-14 items-center justify-center rounded-full border-2 border-accent/40 text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-110 active:scale-95">
                  <MessageCircle className="size-6 md:size-7" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="border-l-0 md:border-l border-border/30 md:pl-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Send a Message</h2>

              {submitted ? (
                <div className="rounded-lg bg-accent/5 border border-accent/20 p-6 text-center">
                  <p className="text-lg font-semibold text-accent mb-2">Thank you!</p>
                  <p className="text-foreground/70">{`We'll get back to you as soon as possible.`}</p>
                </div>
              ) : error ? (
                <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-6 text-center">
                  <p className="text-lg font-semibold text-destructive mb-2">Error</p>
                  <p className="text-foreground/70">{error}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={(e) => {
                          setTimeout(() => {
                            e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
                          }, 100)
                        }}
                        required
                        className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 md:py-4 text-base md:text-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all min-h-[48px]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={(e) => {
                          setTimeout(() => {
                            e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
                          }, 100)
                        }}
                        required
                        className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 md:py-4 text-base md:text-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all min-h-[48px]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={(e) => {
                        setTimeout(() => {
                          e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }, 100)
                      }}
                      required
                      className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 md:py-4 text-base md:text-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all min-h-[48px]"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={(e) => {
                        setTimeout(() => {
                          e.target.scrollIntoView({ behavior: 'smooth', block: 'end' })
                        }, 100)
                      }}
                      required
                      rows={8}
                      className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 md:py-4 text-base md:text-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent resize-none transition-all min-h-[120px]"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg text-background hover:bg-accent/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg active:scale-95 min-h-[48px] w-full md:w-auto"
                  >
                    {isLoading ? (
                      <>
                        <div className="size-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-20 md:py-28 lg:py-32 border-t border-border/30">
        {/* Founders Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Our Team - Founders</h2>
            <p className="text-foreground/60">Meet the passionate advocates building The Ide Project</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Shawn Chen - Founder */}
            <div className="group rounded-lg border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              <div className="mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4DEBE52B-B88F-4E52-AF59-C0E66F43DA52_1_201_a-Cpmtg1MXY9l3Qoi7lWmGFIa4MiPqeg.jpeg"
                  alt="Shawn Chen"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Shawn Chen</h3>
                  <p className="text-sm font-semibold text-accent">Founder</p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  Based in Dallas, Texas. A passionate advocate for wrongful conviction justice with 2 years of direct volunteer experience. Shawn founded The Ide Project to provide exonerees with the resources and support they need to rebuild their lives successfully.
                </p>
              </div>
            </div>

            {/* Vajra Vanukuri - Co-founder and Web Designer */}
            <div className="group rounded-lg border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              <div className="mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm font-medium">
                    Image placeholder
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Vajra Vanukuri</h3>
                  <p className="text-sm font-semibold text-accent">Co-founder and Web Designer</p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  Based in San Francisco, California. Passionate about leveraging technology to support wrongful conviction advocacy and exoneree reentry. Vajra brings technical expertise in Java, Python, HTML, and multiple other programming languages to build The Ide Project&apos;s digital platform for impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="border-t border-border/30 pt-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Board of Directors</h2>
            <p className="text-foreground/60">Guiding our mission and impact</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Board member placeholder */}
            <div className="group rounded-lg border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              <div className="mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm font-medium">
                    Image placeholder
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Board Member Name</h3>
                  <p className="text-sm font-semibold text-accent">Board Position</p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  Coming soon. Board member information and bio will be added here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
