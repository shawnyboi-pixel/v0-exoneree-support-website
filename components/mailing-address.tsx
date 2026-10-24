export function MailingAddress({ className = '' }: { className?: string }) {
  return (
    <address className={`not-italic text-sm leading-relaxed text-foreground/60 ${className}`}>
      <span className="block font-semibold uppercase tracking-wider text-foreground/80">
        Mail / PO Box
      </span>
      <span className="block">The Ide Project</span>
      <span className="block">6600 Trail Bluff Dr.</span>
    </address>
  )
}
