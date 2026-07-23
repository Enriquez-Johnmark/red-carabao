import beachCamp from '@/assets/red-carabao/home/beach-camp.webp'
import campTable from '@/assets/red-carabao/home/camp-table.webp'
import coast from '@/assets/red-carabao/home/coast.webp'
import coronMeal from '@/assets/red-carabao/home/coron-meal.webp'
import riceMission from '@/assets/red-carabao/home/rice-mission.webp'
import cna from '@/assets/red-carabao/press/cna.jpg'
import cnn from '@/assets/red-carabao/press/cnn.webp'
import remoteLands from '@/assets/red-carabao/press/remote-lands.jpg'
import vice from '@/assets/red-carabao/press/vice.png'

export const homeMedia = {
  video: '/media/red-carabao/coron.mp4',
  poster: coronMeal,
  islandCrash: coast,
  mission: beachCamp,
  riceMission,
} as const

export const pressMarks = [
  { name: 'VICE', image: vice, width: 300, height: 95 },
  { name: 'Channel NewsAsia', image: cna, width: 790, height: 790 },
  { name: 'Remote Lands', image: remoteLands, width: 597, height: 158 },
  { name: 'CNN', image: cnn, width: 1000, height: 705 },
] as const

export const islandGallery = [
  { image: coast, alt: 'A coastline seen from above near Coron Island', width: 1600, height: 1067 },
  {
    image: campTable,
    alt: 'Guests sharing food at a Red Carabao island camp',
    width: 1600,
    height: 1065,
  },
  {
    image: beachCamp,
    alt: 'Red Carabao guests gathered by a beach camp',
    width: 1600,
    height: 1066,
  },
] as const

export const faqs = [
  [
    'Can I come solo?',
    'Yes. Red Carabao welcomes curious solo travelers and friends; shared meals and small groups make meeting people feel natural.',
  ],
  [
    'What is Island Crash?',
    'It is a one-day Coron escape to remote coves, a shared Filipino BBQ, and time with Tagbanua hosts at Camp Carabao.',
  ],
  [
    'How do future trips work?',
    'The next application experience is being prepared. For now, explore the journey and keep Coron on your horizon.',
  ],
] as const
