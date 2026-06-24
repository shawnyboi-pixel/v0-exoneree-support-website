import { headers } from 'next/headers'

const requestCounts = new Map<string, { count: number; resetTime: number }>()

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of requestCounts.entries()) {
    if (value.resetTime < now) {
      requestCounts.delete(key)
    }
  }
}, 60 * 60 * 1000)

export async function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
  const now = Date.now()
  const key = `rate-limit:${identifier}`

  let record = requestCounts.get(key)

  if (!record || record.resetTime < now) {
    // Reset or create new record
    record = {
      count: 1,
      resetTime: now + windowMs,
    }
    requestCounts.set(key, record)
    return {
      allowed: true,
      remaining: limit - 1,
      resetTime: record.resetTime,
    }
  }

  record.count++

  return {
    allowed: record.count <= limit,
    remaining: Math.max(0, limit - record.count),
    resetTime: record.resetTime,
  }
}

export async function getClientIp(): Promise<string> {
  const headersList = await headers()
  return (
    headersList.get('x-forwarded-for')?.split(',')[0].trim() ||
    headersList.get('x-real-ip') ||
    'unknown'
  )
}

// Detect suspicious patterns
export function detectSuspiciousActivity(email: string, name?: string): boolean {
  const suspiciousPatterns = [
    /\d{6,}/, // Too many consecutive digits
    /(.)\1{5,}/, // Same character repeated 6+ times
    /admin|test|bot|spam|fake|noreply|localhost|127\.0/i,
    /[!@#$%^&*]{3,}/, // Multiple special characters in a row
  ]

  const checkString = `${email}${name || ''}`.toLowerCase()

  return suspiciousPatterns.some((pattern) => pattern.test(checkString))
}
