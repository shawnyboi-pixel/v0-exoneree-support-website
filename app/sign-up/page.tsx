import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { AuthForm } from '@/components/auth-form'

export default async function SignUpPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect('/')
  
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-background">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Join the Community</h1>
          <p className="text-foreground/60">Create your Ide Project account to get started</p>
        </div>
        
        <AuthForm mode="sign-up" />
        
        <div className="mt-6 text-center">
          <p className="text-foreground/60">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-accent hover:text-accent/80 font-semibold transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
