'use client'

import { usePathname } from 'next/navigation'
import { SiteFooter } from './site-footer'
import { MailingAddress } from './mailing-address'

export function FooterWrapper() {
  const pathname = usePathname()
  const isHelpOthersPage = pathname === '/help-others'

  // The help-others page has its own themed footer, so only keep the mailing address there.
  if (isHelpOthersPage) {
    return (
      <div className="bg-background px-6 py-6 text-center">
        <MailingAddress />
      </div>
    )
  }

  return <SiteFooter />
}
