import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Heart, Shield, DollarSign, Phone, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare and Insurance Guide | The IDE Project',
  description:
    'Access to healthcare, insurance options, Medicaid, ACP, mental health services, and dental care for exonerees in Texas.',
}

interface Resource {
  name: string
  description: string
  url?: string
  phone?: string
}

export default function HealthcarePage() {
  const medicaidResources: Resource[] = [
    {
      name: 'Your Texas Benefits (YTB)',
      description:
        'The official Texas portal for applying for Medicaid and CHIP. You can apply online, by mail, or in person at your local Health and Human Services office. Most applications are processed within 30 days. Eligibility is based on income, household size, and citizenship status.',
      url: 'https://www.yourtexasbenefits.com/Learn/Home',
    },
    {
      name: '2-1-1 Texas',
      description:
        'Call or text 2-1-1 free, 24/7, to get help applying for Medicaid or to find out if you qualify. Bilingual specialists can walk you through the process over the phone.',
      url: 'https://www.211texas.org/',
      phone: '2-1-1',
    },
    {
      name: 'Community Health Centers',
      description:
        'If you are waiting for Medicaid to process or do not qualify, Federally Qualified Health Centers (FQHCs) across Dallas provide sliding-scale healthcare based on your income.',
      url: 'https://findahealthcenter.hrsa.gov/',
    },
  ]

  const acpResources: Resource[] = [
    {
      name: 'Affordable Connectivity Program (ACP)',
      description:
        'Federal program providing up to $30/month subsidy for broadband internet for eligible low-income households. Some internet providers offer additional discounts, making service free or very cheap. Check your eligibility and apply through the FCC website.',
      url: 'https://www.fcc.gov/broadbandbenefit',
    },
    {
      name: 'Lifeline Program',
      description:
        'Federal assistance program providing $9.25/month discount on phone or internet service for qualifying low-income individuals. You may qualify for both Lifeline and ACP. Apply through your phone or internet provider.',
      url: 'https://www.lifelinesupport.org/',
    },
    {
      name: 'Emergency Broadband Benefit (EBB)',
      description:
        'If you enrolled in the original Emergency Broadband Benefit before May 2024, you may still be receiving that benefit. Check your provider to see if it carries over or if you can transition to ACP.',
      url: 'https://www.fcc.gov/broadbandbenefit',
    },
  ]

  const insuranceResources: Resource[] = [
    {
      name: 'Texas Health Insurance',
      description:
        'Official state portal for health insurance information and options. You can compare plans and see what you may qualify for based on income.',
      url: 'https://www.healthinsurance.org/texas/',
    },
    {
      name: 'Medicaid & CHIP in Texas',
      description:
        'If you earn below the federal poverty line or have certain disabilities, you likely qualify for free Texas Medicaid. Texas has expanded coverage for certain groups. Check eligibility requirements at the HHSC website.',
      url: 'https://www.hhs.texas.gov/services/health/medicaid-chip',
    },
    {
      name: 'Healthcare.gov',
      description:
        'Federal marketplace for health insurance. Open Enrollment typically runs November-January, but life events (like release from incarceration) can trigger Special Enrollment Periods. You may qualify for tax credits to reduce premiums.',
      url: 'https://www.healthcare.gov/',
    },
  ]

  const mentalHealthResources: Resource[] = [
    {
      name: 'Metrocare Services',
      description:
        'Largest mental health and substance abuse provider in North Texas. Offers psychiatric services, counseling, crisis intervention, and addiction treatment on a sliding scale. No one is turned away for inability to pay.',
      url: 'https://www.metrocareservices.org/',
      phone: '(214) 670-6000',
    },
    {
      name: 'Dallas County Community Mental Health Centers',
      description:
        'Network of publicly funded mental health clinics across Dallas County offering counseling, medication management, and crisis services. Sliding-scale fees based on income.',
      url: 'https://www.dallascounty.org/departments/dchhs/public-health/alcohol-substance/mental-health-resources.php',
    },
    {
      name: 'NAMI Dallas (National Alliance on Mental Illness)',
      description:
        'Peer-led support groups for people with mental illness and their families. Free support groups and educational programs. May also have exoneree-specific or trauma-specific groups.',
      url: 'https://namidallas.org/',
    },
    {
      name: 'Crisis Text Line',
      description:
        'Free crisis support available 24/7. Text HOME to 741741 to connect with a trained counselor. Confidential and available even if you don\'t have insurance.',
      phone: 'Text HOME to 741741',
    },
    {
      name: '988 Suicide & Crisis Lifeline',
      description:
        'Free, confidential support available 24/7 for anyone experiencing suicidal thoughts or emotional distress. Call or text 988.',
      phone: '988',
    },
  ]

  const dentalResources: Resource[] = [
    {
      name: 'Parkland Dental Clinics',
      description:
        'Dallas County public health system offers dental services on a sliding scale. Emergency dental care available at main location. Call to schedule or inquire about emergency appointments.',
      url: 'https://www.parklandhealth.org/',
      phone: '(214) 645-0911',
    },
    {
      name: 'Community Dental Programs',
      description:
        'Several community health centers in Dallas offer dental services on sliding scales. Some also offer dental schools where students perform procedures under supervision at reduced cost.',
      url: 'https://findahealthcenter.hrsa.gov/',
    },
    {
      name: 'Texas Tech School of Dentistry',
      description:
        'Dental school in Dallas (El Paso campus) where students provide affordable dental care under faculty supervision. Services are significantly reduced in cost compared to private dentists.',
      url: 'https://ttuhscep.edu/sdm/',
    },
  ]

  return (
    <>
      <PageHeader
        label="Healthcare Resources"
        title="Healthcare & Insurance After Exoneration"
        description="Accessing healthcare without insurance or financial resources is one of the biggest challenges exonerees face. This page explains your options and connects you with affordable care."
      />

      {/* Medicaid & CHIP Section */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Medicaid & CHIP: Free or Low-Cost Insurance
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Texas Medicaid provides free or low-cost health insurance to people with low income. Most exonerees qualify. Here is how to apply and what you need to know.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {medicaidResources.map((resource) => (
              <Card key={resource.name} className="border-border/60 transition-all hover:shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {resource.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                      >
                        Learn More
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                    {resource.phone && (
                      <a
                        href={`tel:${resource.phone}`}
                        className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-all hover:bg-accent/20"
                      >
                        <Phone className="size-3" />
                        {resource.phone}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <div className="mb-2 flex items-start gap-3">
              <AlertCircle className="mt-0.5 size-5 shrink-0 text-blue-600" />
              <h3 className="font-semibold text-blue-900">
                Texas Medicaid Eligibility Quick Facts
              </h3>
            </div>
            <ul className="ml-8 space-y-1 text-sm text-blue-800">
              <li>
                • Income limit: Generally below ~$1,331/month for a single adult
              </li>
              <li>• No work requirement in Texas</li>
              <li>
                • Covers doctor visits, hospital care, prescriptions, and preventive care
              </li>
              <li>
                • Apply online at Your Texas Benefits or call 2-1-1 for assistance
              </li>
              <li>• Processing usually takes 30 days</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Internet & Phone Assistance */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Affordable Internet & Phone: ACP & Lifeline
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Internet and phone service are essential. The federal government offers programs to make them affordable for low-income people. Many exonerees qualify.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {acpResources.map((resource) => (
              <Card key={resource.name} className="border-border/60">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {resource.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Learn More
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6">
            <div className="mb-2 flex items-start gap-3">
              <AlertCircle className="mt-0.5 size-5 shrink-0 text-amber-700" />
              <h3 className="font-semibold text-amber-900">
                How to Apply for ACP
              </h3>
            </div>
            <ol className="ml-8 space-y-2 text-sm text-amber-800">
              <li>1. Check eligibility at fcc.gov/acp</li>
              <li>2. Enroll online at the ACP website</li>
              <li>
                3. Choose an eligible internet provider (most major providers participate)
              </li>
              <li>4. Your subsidy is applied to your monthly bill</li>
              <li>5. Some providers offer additional discounts on top of ACP</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Health Insurance Options */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Health Insurance Options
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            If you don't qualify for Medicaid, there are other insurance paths. Some exonerees qualify for premium subsidies through the federal marketplace, making coverage affordable.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {insuranceResources.map((resource) => (
              <Card key={resource.name} className="border-border/60">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {resource.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Learn More
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Mental Health & Counseling Services
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Experiencing trauma, anxiety, and depression after wrongful conviction is normal. Professional mental health support is available and often free or low-cost in Dallas.
          </p>

          <div className="space-y-4 mb-8">
            <div className="rounded-lg border border-border/60 bg-card p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Understanding Exoneree Trauma
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Years of wrongful imprisonment creates complex trauma that differs from typical PTSD. You may experience identity confusion, trust issues, difficulty processing time, physical health impacts, and deep anger at the system. This is not weakness. It is a normal response to abnormal injustice. Professional trauma-informed therapy can help you process and heal.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {mentalHealthResources.map((resource) => (
              <Card key={resource.name} className="border-border/60">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {resource.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Visit Website
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                    {resource.phone && (
                      <a
                        href={`tel:${resource.phone.split(' ')[0]}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Phone className="size-3.5" />
                        {resource.phone}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Care */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Dental Care
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Dental care is often overlooked but critical to your health and confidence. Many exonerees have dental damage from stress, poor prison conditions, or lack of care during incarceration. Affordable options exist in Dallas.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dentalResources.map((resource) => (
              <Card key={resource.name} className="border-border/60">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {resource.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Learn More
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                  {resource.phone && (
                    <a
                      href={`tel:${resource.phone}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Phone className="size-3.5" />
                      {resource.phone}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Care Info */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Heart className="mx-auto mb-4 size-8 text-primary-foreground" />
          <h2 className="mb-4 font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
            Your Health Matters
          </h2>
          <p className="mb-6 text-base leading-relaxed text-primary-foreground/80">
            You survived the impossible. Taking care of your physical and mental
            health is not a luxury—it is essential to your healing and rebuilding.
            Whether it is getting a physical exam, mental health counseling, dental
            work, or just having someone to talk to, reach out. Help is available
            and often free or very affordable in Dallas.
          </p>
          <a
            href="https://www.metrocareservices.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 font-semibold text-primary transition-all hover:bg-primary-foreground/90 hover:shadow-md"
          >
            Contact Metrocare Services
            <ExternalLink className="size-4" />
          </a>
        </div>
      </section>
    </>
  )
}
