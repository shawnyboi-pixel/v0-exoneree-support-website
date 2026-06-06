'use client'

import { usePathname } from 'next/navigation'
import { SiteFooter } from './site-footer'

export function FooterWrapper() {
  const pathname = usePathname()
  const isHelpOthersPage = pathname === '/help-others'

  // Don't show the warm brown footer on help-others page
  if (isHelpOthersPage) {
    return null
  }

  return <SiteFooter />
}
