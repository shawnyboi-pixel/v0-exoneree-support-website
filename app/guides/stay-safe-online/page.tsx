'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GuideQASection } from '@/components/guide-qa-section'

export default function StaySafeOnlineGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/60 bg-secondary/30 sticky top-0 z-40">
        <div className="mx-auto max-w-4xl px-4 py-4 lg:px-8">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-3 lg:text-5xl">
            Staying Safe Online
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            By The Ide Project | Updated June 1st, 2026
          </p>
          <p className="text-lg text-muted-foreground">
            Privacy and security best practices for social media, email, and the internet
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Quick Summary</h2>
          <p className="text-foreground/80 mb-4">
            The internet is powerful, but you need to protect yourself. Predators, scammers, and bad actors are always looking for victims. Learn what to share and what to protect.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>• Never share your full name, address, or phone number publicly</li>
            <li>• Use strong, unique passwords for every account</li>
            <li>• Be careful what you post—it can be used against you</li>
            <li>• Don't click links from people you don't know</li>
            <li>• If something feels wrong, trust your instincts and stop</li>
          </ul>
        </section>

        {/* Section 1: What NOT to Share */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Never Share This Information Online</h2>
          
          <p className="text-foreground/80 mb-6">
            Once you share something on the internet, it can be copied, saved, and used by anyone. Be strategic about what goes online.
          </p>

          <div className="space-y-4">
            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ Your Full Legal Name</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Use a nickname or first name only on social media. Your full legal name can be connected to your criminal record through searches.
                </p>
                <p className="text-xs text-foreground/70"><strong>Better:</strong> "Michael J." instead of "Michael James Patterson"</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ Your Address or Neighborhood</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Never post your home address, not even just the city. Bad actors can find you, harass you, or harm your family.
                </p>
                <p className="text-xs text-foreground/70"><strong>Red flag:</strong> Checking in at your home on location services, posting "moving to [address]," or frequent posts from the same location.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ Your Phone Number or Email</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Predators use this to contact you, hack you, or sell your info to marketers and scammers.
                </p>
                <p className="text-xs text-foreground/70"><strong>Exception:</strong> Only to people you know and trust, and only through direct message (not public comments).</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ Your Social Security Number, Passwords, or Financial Info</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  NEVER. This is identity theft waiting to happen. No legitimate person will ask for this online.
                </p>
                <p className="text-xs text-foreground/70"><strong>Real talk:</strong> If anyone asks for this, they're scamming you. Block them immediately.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ Your Criminal History or Mugshot</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Employers, landlords, and dates will see this. Even joking about your past can harm your opportunities.
                </p>
                <p className="text-xs text-foreground/70"><strong>Why:</strong> Once posted, it spreads everywhere. Future employers and landlords will find it and use it against you.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ Your Location (Live Updates)</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Never post "just got to work" with a check-in, or stream yourself at your job. Predators can find and follow you.
                </p>
                <p className="text-xs text-foreground/70"><strong>Safer:</strong> Post photos AFTER you leave a place, with location services turned off.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ Photos of Your Identification</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Never post photos of your passport, driver's license, SSN card, etc. People use these to commit identity theft.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ Details About Your Kids or Family</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Their real names, schools, schedules, or photos. Predators use this information to harm families.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Privacy Settings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Protect Your Privacy: Settings You MUST Change</h2>

          <h3 className="text-2xl font-bold text-foreground mb-4">Facebook Privacy Settings</h3>
          <div className="space-y-3 mb-6">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">1. Make your profile private</strong>
              <p className="text-sm text-foreground/80 mt-2">Settings → Privacy → "Who can see your posts?" → "Friends Only"</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">2. Turn off location services</strong>
              <p className="text-sm text-foreground/80 mt-2">Settings → Apps and Websites → Location → Off</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">3. Limit who can message you</strong>
              <p className="text-sm text-foreground/80 mt-2">Settings → Privacy → "Who can contact you?" → "Friends Only"</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">4. Turn off "Find your friends"</strong>
              <p className="text-sm text-foreground/80 mt-2">Settings → Privacy → "Want to prevent someone from contacting you?" → yes</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Instagram Privacy Settings</h3>
          <div className="space-y-3 mb-6">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">1. Make your account private</strong>
              <p className="text-sm text-foreground/80 mt-2">Settings → Privacy → Account Privacy → Private</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">2. Turn off location tagging</strong>
              <p className="text-sm text-foreground/80 mt-2">Settings → Privacy → Allow Others to Tag You → Off</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">3. Disable story sharing</strong>
              <p className="text-sm text-foreground/80 mt-2">Settings → Privacy → Story → "Close Friends Only"</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Google Safety</h3>
          <div className="space-y-3">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">1. Manage your search results</strong>
              <p className="text-sm text-foreground/80 mt-2">Go to myactivity.google.com and review what Google has stored about you</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">2. Delete old posts and photos</strong>
              <p className="text-sm text-foreground/80 mt-2">Search "remove from search" to request Google remove old mugshots or articles</p>
            </div>
          </div>
        </section>

        {/* Section 3: Passwords */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Strong Passwords: Your First Line of Defense</h2>

          <p className="text-foreground/80 mb-6">
            A weak password means someone can hack into your account, steal your identity, or impersonate you.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">How to Create a Strong Password</h3>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <strong className="text-green-900 dark:text-green-200">✓ At least 12 characters long</strong>
                <p className="text-sm text-foreground/80 mt-1">The longer, the better. 16+ is ideal.</p>
              </div>
              <div>
                <strong className="text-green-900 dark:text-green-200">✓ Mix of UPPERCASE and lowercase</strong>
              </div>
              <div>
                <strong className="text-green-900 dark:text-green-200">✓ Numbers and symbols (!@#$%)</strong>
              </div>
              <div>
                <strong className="text-green-900 dark:text-green-200">✓ Nothing personal (not your name, birthday, address)</strong>
              </div>
              <div>
                <strong className="text-green-900 dark:text-green-200">✓ Unique—don't reuse passwords</strong>
                <p className="text-sm text-foreground/80 mt-1">If one account gets hacked, the others are safe.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Examples of Weak vs. Strong Passwords</h3>
          <div className="space-y-3 mb-6">
            <div className="flex gap-4">
              <div className="flex-1 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
                <p className="text-sm text-red-900 dark:text-red-200 font-semibold mb-2">❌ WEAK</p>
                <ul className="text-xs text-foreground/80 space-y-1">
                  <li>• password123</li>
                  <li>• iloveyou</li>
                  <li>• 12345678</li>
                  <li>• myname1990</li>
                </ul>
              </div>
              <div className="flex-1 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-200 font-semibold mb-2">✓ STRONG</p>
                <ul className="text-xs text-foreground/80 space-y-1">
                  <li>• TrG#9mL$2xK@wQp!</li>
                  <li>• Blue$Sun42!Lamp%9</li>
                  <li>• Dancing!Clouds#8X2v</li>
                  <li>• P@ssw0rd!Secure2024$</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Use a Password Manager</h3>
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
            <p className="text-foreground/80 mb-3">
              A password manager stores all your passwords securely. You only have to remember one master password.
            </p>
            <ul className="space-y-2 text-foreground/80 text-sm">
              <li><strong>Free options:</strong> Bitwarden, LastPass (free version)</li>
              <li><strong>What they do:</strong> Generate strong passwords, remember them, auto-fill websites</li>
              <li><strong>Cost:</strong> Usually free or $10-15/year</li>
              <li><strong>Security:</strong> Your passwords are encrypted—even the company can't see them</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Phishing & Scams */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Phishing Scams: How to Spot Them</h2>

          <p className="text-foreground/80 mb-6">
            Phishing is when scammers pretend to be a company you trust (Facebook, your bank, Amazon) to trick you into giving them info or money.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">Red Flags: Don't Click These Links</h3>
          <div className="space-y-3">
            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">🚩 "Click here to verify your account"</h4>
                <p className="text-sm text-foreground/80">Real companies don't ask you to verify via email links. Go directly to the website by typing the address yourself.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">🚩 "Your account will be closed unless you update payment"</h4>
                <p className="text-sm text-foreground/80">Urgency is a red flag. Hackers use fear to make you act without thinking.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">🚩 Links that don't match the website</h4>
                <p className="text-sm text-foreground/80">Email says "facebook.com" but the link goes to "faeebook.com" or "facebook-verify.net". Hover over the link to see the real URL.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">🚩 Poor grammar or spelling errors</h4>
                <p className="text-sm text-foreground/80">Real companies use professional language. Scammers often have typos ("clck here", "conifrm").</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">🚩 "You won a prize!" (that you didn't enter)</h4>
                <p className="text-sm text-foreground/80">If you didn't enter a contest, you can't win. Period.</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">If You Click a Phishing Link</h3>
          <ol className="space-y-3 text-foreground/80">
            <li><strong>1. Don't panic</strong> — Just clicking isn't enough. They need you to enter information.</li>
            <li><strong>2. Don't enter any information</strong> — Close the page immediately.</li>
            <li><strong>3. Change your password</strong> — Even if you didn't enter it, change it from a safe device.</li>
            <li><strong>4. Contact the company directly</strong> — Call the customer service number from their official website, not the email.</li>
            <li><strong>5. Report to the company</strong> — Forward the phishing email to their fraud/abuse team.</li>
          </ol>
        </section>

        {/* Section 5: Who to Trust */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Who to Trust Online (And Who NOT To)</h2>

          <h3 className="text-2xl font-bold text-foreground mb-4">✓ SAFE: People and accounts you actually know</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border mb-6">
            <p className="text-foreground/80">Friends, family, official company accounts (with verified badges), organizations you've worked with.</p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">❌ DANGER: People trying to get you to do these things</h3>
          <div className="space-y-3">
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
              <strong className="text-red-900 dark:text-red-200">Asking for passwords or personal info</strong>
              <p className="text-sm text-foreground/80 mt-1">Block them immediately. Real companies never ask for this online.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
              <strong className="text-red-900 dark:text-red-200">Asking you to send money or gift cards</strong>
              <p className="text-sm text-foreground/80 mt-1">Always a scam. Block and report them.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
              <strong className="text-red-900 dark:text-red-200">Asking you to download files or click sketchy links</strong>
              <p className="text-sm text-foreground/80 mt-1">These are malware traps. They can steal everything on your device.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p4">
              <strong className="text-red-900 dark:text-red-200">Being overly friendly very quickly</strong>
              <p className="text-sm text-foreground/80 mt-1">Predators build relationships to exploit you. Real trust takes time.</p>
            </div>
          </div>
        </section>

        {/* Section 6: If You're Targeted */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">You're Being Targeted or Harassed—What to Do</h2>

          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 1: Block Them</strong>
              <p className="text-sm text-foreground/80 mt-2">On every platform (Facebook, Instagram, Snapchat, Twitter, etc.). This prevents them from seeing your posts or contacting you.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 2: Report Them</strong>
              <p className="text-sm text-foreground/80 mt-2">Use the platform's reporting feature. Facebook, Instagram, and Twitter take harassment seriously.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 3: Don't Engage</strong>
              <p className="text-sm text-foreground/80 mt-2">Don't respond, argue, or defend yourself. Harassers feed on reactions. Silence is the best response.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 4: Save Evidence</strong>
              <p className="text-sm text-foreground/80 mt-2">Screenshot threatening messages. Keep records in case you need to involve police.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 5: Talk to Someone</strong>
              <p className="text-sm text-foreground/80 mt-2">If you're being harassed because of your past, reach out to an exoneree organization or counselor. You're not alone.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 6: Involve Police if Threatened</strong>
              <p className="text-sm text-foreground/80 mt-2">If threats of violence, go to the police with your evidence. This is a crime.</p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-border/60">
          <Link href="/guides" className="text-accent hover:text-accent/80 transition-colors font-medium">
            ← Back to All Guides
          </Link>
          <span className="text-sm text-muted-foreground">By The Ide Project | Updated June 1st, 2026</span>
        </div>

        {/* Q&A Section */}
        <GuideQASection
          guideTitle="Staying Safe Online"
          guideId="stay-safe-online"
        />
      </article>
    </main>
  )
}
