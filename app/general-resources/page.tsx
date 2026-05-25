import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent } from '@/components/ui/card'
import {
  ExternalLink,
  ShoppingCart,
  UtensilsCrossed,
  BookOpen,
  TreePine,
  Church,
  Bus,
  Heart,
  GraduationCap,
  Smartphone,
  Ticket,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'General Resources for Daily Life | The IDE Project',
  description:
    'Affordable stores, food pantries, libraries, parks, churches, and community events in Dallas to help exonerees with reintegration.',
}

interface TipCategory {
  title: string
  icon: React.ElementType
  description: string
  items: {
    name: string
    detail: string
    url?: string
  }[]
}

const categories: TipCategory[] = [
  {
    title: 'Affordable Grocery Stores',
    icon: ShoppingCart,
    description:
      'Stretching every dollar matters. These stores consistently offer the lowest prices in the Dallas area.',
    items: [
      {
        name: 'Aldi',
        detail:
          'Multiple Dallas locations. Known for the lowest grocery prices in the area with quality store-brand products. Bring your own bags and a quarter for the cart.',
        url: 'https://www.aldi.us/store/aldi/storefront',
      },
      {
        name: 'Save-A-Lot',
        detail:
          'Discount grocery chain with locations in South and East Dallas. Great for basics like bread, canned goods, and produce at reduced prices.',
        url: 'https://savealot.com/',
      },
      {
        name: 'Walmart Neighborhood Market',
        detail:
          'Smaller-format Walmart stores focused on groceries. Price-match policy and Walmart+ EBT SNAP benefits can stretch your food budget further.',
        url: 'https://www.walmart.com/',
      },
      {
        name: 'Family Dollar & Dollar Tree',
        detail:
          'Good for household essentials, cleaning supplies, and basic pantry items. Multiple locations across Dallas, especially in underserved neighborhoods.',
        url: 'https://www.familydollar.com/combostores',
      },
      {
        name: 'Fiesta Mart',
        detail:
          'Affordable produce and meat with several Dallas locations. Weekly specials often include deeply discounted fruits and vegetables.',
        url: 'https://www.fiestamart.com/',
      },
    ],
  },
  {
    title: 'Food Assistance & Pantries',
    icon: UtensilsCrossed,
    description:
      'No one should go hungry while rebuilding. These organizations provide free food with no judgment.',
    items: [
      {
        name: 'North Texas Food Bank',
        detail:
          'The largest hunger relief organization in North Texas, distributing food through a network of 500+ partner agencies. Use their website to find the nearest food pantry to your location.',
        url: 'https://ntfb.org/',
      },
      {
        name: "Brother Bill's Helping Hand",
        detail:
          'Located at 3906 Elm St, Dallas. Provides food, clothing, and household essentials. Walk-ins welcome during operating hours.',
        url: 'https://bbhh.org/',
      },
      {
        name: 'SNAP Benefits (Lone Star Card)',
        detail:
          'The Texas equivalent of food stamps. Apply through Your Texas Benefits or by calling 2-1-1. Processing typically takes 30 days.',
        url: 'https://www.hhs.texas.gov/services/food/snap-food-benefits',
      },
      {
        name: 'CitySquare',
        detail:
          'Faith-based nonprofit fighting poverty in Dallas through food distribution, community health, and workforce development programs.',
        url: 'https://www.citysquare.org/',
      },
    ],
  },
  {
    title: 'Coupons & Discounts',
    icon: Ticket,
    description:
      'Every little bit helps. These programs and tools can reduce your everyday expenses.',
    items: [
      {
        name: 'DART Reduced Fare Program',
        detail:
          'Dallas Area Rapid Transit offers reduced-fare passes for qualifying low-income individuals. A monthly local pass drops from $96 to $48. Apply at any DART customer service location with proof of income.',
        url: 'https://www.dart.org/fare/general-fares-and-overview/reduced-fares',
      },
      {
        name: 'Texas 2-1-1',
        detail:
          'Dial 2-1-1 from any phone for a free referral service that connects you with local discounts, utility assistance programs, and community resources. Available 24/7.',
        url: 'https://www.211texas.org/',
      },
    ],
  },
  {
    title: 'Public Libraries',
    icon: BookOpen,
    description:
      'Libraries are more than books. They offer free internet, printing, job search help, and community programs.',
    items: [
      {
        name: 'Dallas Public Library System',
        detail:
          'The Dallas Public Library has 30 branches across the city. A free library card gets you access to computers, Wi-Fi, printing, e-books, job databases, and GED study materials. No ID required for a temporary card.',
        url: 'https://dallaslibrary.org/',
      },
      {
        name: 'J. Erik Jonsson Central Library',
        detail:
          '1515 Young St, Downtown Dallas. The flagship location with the most resources: computer labs, career center, financial literacy workshops, and community meeting spaces.',
        url: 'https://www.dallaslibrary.org/central-library',
      },
      {
        name: 'Library Workforce Programs',
        detail:
          'Many branches host free resume workshops, computer skills classes, and one-on-one career coaching sessions. Check the Dallas Public Library events calendar for schedules.',
        url: 'https://www.tsl.texas.gov/ldn/workforcedevelopment-jobseekerresources',
      },
    ],
  },
  {
    title: 'Parks & Recreation',
    icon: TreePine,
    description:
      'Getting outside and being part of a community matters. Dallas has extensive free parks and recreation programs.',
    items: [
      {
        name: 'Dallas Parks & Recreation',
        detail:
          'Over 400 parks and 35,000 acres of open space. Many parks have free walking trails, basketball courts, exercise stations, and picnic areas. Recreation centers offer low-cost fitness programs.',
        url: 'https://www.dallasparks.org/',
      },
      {
        name: 'White Rock Lake Park',
        detail:
          '1,015-acre park around a scenic lake with a 9.3-mile paved trail, fishing piers, and picnic grounds. Completely free. A peaceful place to clear your head.',
        url: 'https://www.dallasparks.org/235/White-Rock-Lake',
      },
      {
        name: 'Klyde Warren Park',
        detail:
          'Downtown Dallas park with free fitness classes, outdoor games, food trucks, and regular community events. Check their calendar for free yoga, tai chi, and live music.',
        url: 'https://www.klydewarrenpark.org/',
      },
    ],
  },
  {
    title: 'Churches & Faith Communities',
    icon: Church,
    description:
      'Faith-based organizations often provide wraparound support including meals, clothing, mentoring, and community connection.',
    items: [
      {
        name: 'Wilshire Baptist Church',
        detail:
          '4316 Abrams Rd, Dallas. Active community outreach programs including a food pantry, clothing ministry, and support groups. Welcoming to all regardless of background.',
        url: 'https://www.wilshirebc.org/',
      },
      {
        name: 'Oak Cliff Bible Fellowship',
        detail:
          '1808 W Camp Wisdom Rd, Dallas. Led by Dr. Tony Evans, this church runs extensive community development programs including Project Turnaround for individuals re-entering society.',
        url: 'https://www.ocbfchurch.org/',
      },
      {
        name: 'Catholic Charities Dallas',
        detail:
          'Provides immigration assistance, financial coaching, food pantry access, and disaster relief services. You do not need to be Catholic to receive help.',
        url: 'https://www.ccdallas.org/',
      },
    ],
  },
  {
    title: 'Public Transit',
    icon: Bus,
    description:
      'Getting around Dallas without a car is possible. Here is how the transit system works.',
    items: [
      {
        name: 'DART (Dallas Area Rapid Transit)',
        detail:
          'Bus and light rail system covering Dallas and 12 surrounding cities. A single ride is $3, day pass is $6, and monthly local pass is $96 ($48 with reduced fare). The GoPass app lets you buy tickets on your phone.',
        url: 'https://www.dart.org/',
      },
      {
        name: 'GoPass Mobile App',
        detail:
          'Purchase DART tickets, passes, and GoLink rides directly from your phone. Works even without a credit card in some cases. Available on iOS and Android.',
        url: 'https://www.dart.org/gopass',
      },
    ],
  },
  {
    title: 'Healthcare & Wellness',
    icon: Heart,
    description:
      'Access to healthcare is critical during reintegration. These resources can help if you do not have insurance.',
    items: [
      {
        name: 'Parkland Health',
        detail:
          'Dallas County public hospital system providing healthcare regardless of ability to pay. Financial assistance programs available. Emergency room at 5201 Harry Hines Blvd.',
        url: 'https://www.parklandhealth.org/',
      },
      {
        name: 'Community Health Centers',
        detail:
          'Federally qualified health centers across Dallas offer sliding-scale fees based on income. Services include primary care, dental, and behavioral health.',
        url: 'https://findahealthcenter.hrsa.gov/',
      },
      {
        name: 'Metrocare Services',
        detail:
          'Largest mental health provider in North Texas. Offers counseling, psychiatric services, and crisis intervention on a sliding scale. No one is turned away for inability to pay.',
        url: 'https://www.metrocareservices.org/',
      },
    ],
  },
  {
    title: 'Education & GED Programs',
    icon: GraduationCap,
    description:
      'Whether you want to finish a GED or explore college, Dallas has accessible programs.',
    items: [
      {
        name: 'Dallas College (Community College)',
        detail:
          'Seven campuses across Dallas County offering affordable degree programs, vocational training, and continuing education. Financial aid and tuition waivers available for qualifying students.',
        url: 'https://www.dallascollege.edu/',
      },
      {
        name: 'Literacy Instruction for Texas (LIFT)',
        detail:
          'Free adult education and literacy programs including GED preparation, ESL classes, and basic computer skills at multiple Dallas locations.',
        url: 'https://www.idealist.org/en/nonprofit/0b542974dff643f4954ca657f3673c2d-lift-literacy-instruction-for-texas-dallas',
      },
      {
        name: 'Goodwill Job Training',
        detail:
          'Free career training programs in healthcare, IT, and skilled trades through Goodwill Industries of Dallas. Programs include certification prep and job placement assistance.',
        url: 'https://www.goodwilldallas.org/',
      },
    ],
  },
  {
    title: 'Phone & Internet Access',
    icon: Smartphone,
    description:
      'A phone number and internet connection are essential for job applications, housing searches, and staying connected.',
    items: [
      {
        name: 'Lifeline Program',
        detail:
          'Federal program providing a $9.25 monthly discount on phone or internet service for qualifying low-income individuals. Apply through your carrier or at LifelineSupport.org.',
        url: 'https://www.lifelinesupport.org/',
      },
      {
        name: 'Affordable Connectivity Program (ACP)',
        detail:
          'Federal program providing discounted high-speed internet for eligible low-income households. Benefits vary by provider but typically include $30-$75/month subsidies.',
        url: 'https://www.fcc.gov/broadbandbenefit',
      },
      {
        name: 'Dallas Public Library Wi-Fi',
        detail:
          'All 30 library branches offer free Wi-Fi and computer access during operating hours. Some branches also loan Wi-Fi hotspots for home use.',
        url: 'https://dallaslibrary.org/',
      },
    ],
  },
]

export default function GeneralResourcesPage() {
  return (
    <>
      <PageHeader
        label="Practical Resources"
        title="General Resources for Daily Life in Dallas"
        description="Rebuilding a life means figuring out the everyday stuff: where to buy groceries, how to get around, where to find free resources. This page is built for you."
      />

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground">
            After years away, the everyday world can feel overwhelming. Prices
            have changed, stores have moved, and entire systems work
            differently. This page collects verified, Dallas-specific resources
            to help you navigate daily life without overspending or getting
            lost in bureaucracy.
          </p>

          <div className="flex flex-col gap-16">
            {categories.map((cat) => (
              <div key={cat.title} id={cat.title.toLowerCase().replace(/\s+/g, '-')}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <cat.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                      {cat.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item) => (
                    <Card
                      key={item.name}
                      className="border-border/60 transition-all hover:shadow-sm"
                    >
                      <CardContent className="flex h-full flex-col pt-5">
                        <h3 className="mb-2 text-base font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {item.detail}
                        </p>
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                          >
                            Learn More
                            <ExternalLink className="size-3" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
