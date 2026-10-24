import { BookOpen, HeartHandshake, Newspaper, MessagesSquare } from 'lucide-react'

const pillars = [
  {
    icon: BookOpen,
    title: 'Fun, low-stakes articles',
    description:
      'Our articles cover everyday curiosities and hobbies, the kind of topics that are easy to pick up, enjoyable to read, and a great way for students to write and share.',
  },
  {
    icon: HeartHandshake,
    title: 'Simple support to exonerees',
    description:
      'We keep help straightforward: clear, friendly resources and a place to ask questions, without the paperwork or jargon.',
  },
  {
    icon: Newspaper,
    title: 'News for exonerees',
    description:
      'We gather and share news that matters to exonerees and the people who support them, all in one easy-to-follow place.',
  },
  {
    icon: MessagesSquare,
    title: 'Technical innovation',
    description:
      'We build messaging systems and data collection tools that help us stay connected with exonerees and understand how to serve them better.',
  },
]

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="scroll-mt-20 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">What we do</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg text-pretty">
            Four ways The Ide Project supports exonerees and the community around them.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg md:p-8"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground md:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
