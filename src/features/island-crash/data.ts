import beachCamp from '@/assets/red-carabao/home/beach-camp.webp'
import campTable from '@/assets/red-carabao/home/camp-table.webp'
import coast from '@/assets/red-carabao/home/coast.webp'
import hero from '@/assets/red-carabao/island-crash/hero.webp'

export const islandCrash = {
  hero,
  bbqImage: campTable,
  campImage: beachCamp,
  hostImage: coast,
  itinerary: [
    {
      title: 'Find the quiet coves',
      copy: 'Island Crash is a one-day escape to remote beach coves in Coron—time for clear water, island exploration, and good company away from the usual rush.',
    },
    {
      title: 'Share a Filipino BBQ',
      copy: 'Every Island Crash includes a simple shared BBQ lunch with plenty of vegetarian options when requested. Guests are welcome to bring beers and snacks to share.',
    },
    {
      title: 'Unwind at Camp Carabao',
      copy: 'Feel at home at the private base camp, where Tagbanua families welcome the group into the real rhythms of island life.',
    },
  ],
} as const
