import { betterAuth } from 'better-auth'
import { pool } from '@/lib/db'
import { nextCookies } from 'better-auth/next-js'

export const auth = betterAuth({
  database: pool,
  baseURL:
    process.env.BETTER_AUTH_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.V0_RUNTIME_URL || 'http://localhost:3000'),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false,
  },
  plugins: [nextCookies()],
  trustedOrigins: [
    ...(process.env.V0_RUNTIME_URL ? [process.env.V0_RUNTIME_URL] : []),
    ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),
    ...(process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? [`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`]
      : []),
    // Allow localhost for development
    'http://localhost:3000',
    'http://localhost:3001',
    // For v0 preview environments
    ...(process.env.NODE_ENV === 'development'
      ? [
          'http://localhost',
          'http://localhost:80',
          'http://localhost:443',
          // The v0 preview iframe is served from a per-sandbox subdomain
          // (e.g. https://sb-xxxxxxxx.vercel.run), which does not match
          // V0_RUNTIME_URL. Trust the whole sandbox/preview domain pattern.
          'https://*.vercel.run',
          'https://*.v0.build',
        ]
      : []),
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  ...(process.env.NODE_ENV === 'development'
    ? {
        advanced: {
          // In dev (v0 preview iframe), force cross-site cookies so the
          // session cookie is stored by the browser.
          defaultCookieAttributes: {
            sameSite: 'none' as const,
            secure: true,
          },
        },
      }
    : {}),
})
