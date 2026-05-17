import { ExternalLink, ShoppingCart, UtensilsCrossed, BookOpen, TreePine, Church, Bus, Heart, GraduationCap, Smartphone } from 'lucide-react'
import {
  Card,
  CardContent,
} from '@/components/ui/card'

interface ResourceItem {
  name: string
  detail: string
  url?: string
}

const resources: ResourceItem[] = [
  // Affordable Stores
  { name: 'Aldi', detail: 'Lowest grocery prices in Dallas. Bring your own bags.', url: 'https://www.aldi.us/store/aldi/storefront' },
  { name: 'Save-A-Lot', detail: 'Discount chain with South & East Dallas locations.', url: 'https://savealot.com/' },
  { name: 'Walmart Neighborhood Market', detail: 'Groceries with price-match and EBT benefits.', url: 'https://www.walmart.com/' },
  { name: 'Family Dollar & Dollar Tree', detail: 'Essentials and household items across Dallas.', url: 'https://www.familydollar.com/combostores' },
  { name: 'Fiesta Mart', detail: 'Affordable produce and meat with weekly specials.', url: 'https://www.fiestamart.com/' },
  // Food Assistance
  { name: 'North Texas Food Bank', detail: 'Find nearest food pantry through their network.', url: 'https://ntfb.org/' },
  { name: "Brother Bill's Helping Hand", detail: 'Free food, clothing & essentials on Elm St.', url: 'https://bbhh.org/' },
  { name: 'SNAP Benefits', detail: 'Apply through Your Texas Benefits or 2-1-1.', url: 'https://www.hhs.texas.gov/services/food/snap-food-benefits' },
  // Transit
  { name: 'DART Reduced Fare', detail: 'Low-income passes at half price for Dallas transit.', url: 'https://www.dart.org/fare/general-fares-and-overview/reduced-fares' },
  // Libraries
  { name: 'J. Erik Jonsson Central Library', detail: 'Downtown hub with computers, career center & classes.', url: 'https://www.dallaslibrary.org/central-library' },
  { name: 'Library Workforce Programs', detail: 'Resume workshops & job coaching at branches.', url: 'https://www.tsl.texas.gov/ldn/workforcedevelopment-jobseekerresources' },
  // Parks
  { name: 'White Rock Lake Park', detail: 'Free 9.3-mile trail, fishing & peaceful space.', url: 'https://www.dallasparks.org/235/White-Rock-Lake' },
  // Education
  { name: 'Literacy Instruction for Texas (LIFT)', detail: 'Free GED prep, ESL & computer skills.', url: 'https://www.idealist.org/en/nonprofit/0b542974dff643f4954ca657f3673c2d-lift-literacy-instruction-for-texas-dallas' },
  // Internet
  { name: 'Affordable Connectivity Program', detail: 'Federal subsidy for low-income broadband access.', url: 'https://www.fcc.gov/broadbandbenefit' },
]

export function GetHelpNow() {
  return (
    <section id="get-help" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Daily Life Resources
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Practical Resources Across Dallas
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Affordable groceries, transit, libraries, and community programs to help you rebuild.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <Card key={item.name} className="border-border/60 transition-all hover:shadow-sm">
              <CardContent className="pt-6">
                <h3 className="mb-2 text-sm font-semibold text-foreground">{item.name}</h3>
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                  >
                    Learn More
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/general-resources"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-md"
          >
            View All Resources
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
