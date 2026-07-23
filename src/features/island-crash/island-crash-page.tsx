import { Coffee, Compass, UtensilsCrossed, Waves } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BookingDialog } from '@/components/site/booking-dialog'
import { islandCrash } from './data'

const icons = [Waves, UtensilsCrossed, Compass]

export function IslandCrashPage() {
  return (
    <main id="content" className="destination-page">
      <section className="expedition-hero">
        <img
          src={islandCrash.hero}
          alt="A boat on the water near Coron Island"
          width="1800"
          height="1203"
          fetchPriority="high"
        />
        <div className="expedition-shade" />
        <div className="expedition-hero-copy">
          <p className="route-label">One day · Coron, Palawan</p>
          <Badge>Red Carabao signature</Badge>
          <h1>
            Island <em>Crash.</em>
          </h1>
          <p>
            One day in remote beach coves, shared over good food and a deeper way into Coron Island.
          </p>
          <BookingDialog />
        </div>
      </section>
      <section className="expedition-intro page-section">
        <div className="section-kicker">
          <span>01</span>
          <p>What’s an Island Crash?</p>
        </div>
        <div className="introduction-grid">
          <h2>
            Not island-hopping.
            <br />
            <em>Island listening.</em>
          </h2>
          <div className="prose-stack">
            <p>
              Island Crash is a one-day escape to remote beach coves in Coron, blending island
              exploration with meaningful encounters with local Tagbanua culture.
            </p>
            <p>
              Trips are exclusive and application-only to help preserve the dignity of the
              experience and protect culture from overtourism.
            </p>
          </div>
        </div>
      </section>
      <section className="day-section">
        <div className="day-image">
          <img
            src={islandCrash.bbqImage}
            alt="A shared Filipino BBQ prepared at an island camp"
            width="1600"
            height="1065"
            loading="lazy"
          />
        </div>
        <div className="day-copy">
          <p className="route-label">The day, in three movements</p>
          <ol>
            {islandCrash.itinerary.map((item, index) => {
              const Icon = icons[index]
              return (
                <li key={item.title}>
                  <Icon />
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.copy}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
      <section className="camp-section page-section">
        <div className="camp-copy">
          <p className="route-label">The island hosts</p>
          <h2>
            Make yourself
            <br />
            <em>at home.</em>
          </h2>
          <p>
            As a group, guests paddle to neighboring beaches to meet and learn from the families who
            call this island home. Tagbanua hosts share weaving and coffee traditions with curious
            visitors.
          </p>
          <div className="coffee-note">
            <Coffee /> A day built around real connection, not a checklist.
          </div>
          <BookingDialog label="Ask about a future Island Crash" />
        </div>
        <img
          src={islandCrash.campImage}
          alt="Guests gathered with Red Carabao hosts at Camp Carabao"
          width="1600"
          height="1066"
          loading="lazy"
        />
      </section>
      <section className="destination-closing">
        <img
          src={islandCrash.hostImage}
          alt="A quiet stretch of Coron coastline"
          width="1600"
          height="1067"
          loading="lazy"
        />
        <div>
          <p className="route-label">A different kind of access</p>
          <h2>
            Come curious.
            <br />
            <em>Leave connected.</em>
          </h2>
          <Separator />
          <p>
            There are no dates or booking forms here yet—only a clear invitation to understand the
            journey before the next applications open.
          </p>
        </div>
      </section>
    </main>
  )
}
