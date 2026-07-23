import beachCamp from '@/assets/red-carabao/home/beach-camp.webp'
import campTable from '@/assets/red-carabao/home/camp-table.webp'
import coast from '@/assets/red-carabao/home/coast.webp'
import riceMission from '@/assets/red-carabao/home/rice-mission.webp'

export const aboutContent = {
  heroImage: coast,
  hostsImage: beachCamp,
  campImage: campTable,
  riceImage: riceMission,
  contact: {
    address: ['National Highway, Barangay V', 'Coron, Palawan 5316'],
    hours: 'MON, WED, FRI | 17:00 to 20:00 PHILIPPINE TIME',
    whatsapp: '+63 995 235 0304',
    whatsappUrl: 'https://wa.me/639952350304',
    email: 'info@redcarabao.com',
  },
} as const
