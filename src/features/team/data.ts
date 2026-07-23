import aldrich from '@/assets/red-carabao/team/aldrich.webp'
import benjie from '@/assets/red-carabao/team/benjie.webp'
import guides from '@/assets/red-carabao/team/guides.webp'
import hosts from '@/assets/red-carabao/team/hosts.webp'
import robert from '@/assets/red-carabao/team/robert.webp'
import tagbanua from '@/assets/red-carabao/team/tagbanua.webp'
import volunteers from '@/assets/red-carabao/team/volunteers.webp'

export const teamMembers = [
  { name: 'Tagbanua Family', role: 'Island Hosts', image: tagbanua, alt: 'Tagbanua hosts together on Coron Island', width: 1200, height: 900, profile: 'Their story will be shared here with their approval.' },
  { name: 'Captain Benjie', role: 'Licensed Boat Captain', image: benjie, alt: 'Captain Benjie on the water in Coron', width: 1200, height: 900, profile: 'A profile from the water is coming soon.' },
  { name: 'Aldrich', role: 'Director', image: aldrich, alt: 'Aldrich from Red Carabao', width: 1200, height: 900, profile: 'A personal note from Aldrich is forthcoming.' },
  { name: 'Our Guides', role: 'Experienced Leads', image: guides, alt: 'Red Carabao guides in Coron', width: 1200, height: 900, profile: 'Guide stories will be added here soon.' },
  { name: 'Hosts', role: 'Island Hosts', image: hosts, alt: 'Red Carabao island hosts together', width: 1200, height: 900, profile: 'More of the people behind each welcome, soon.' },
  { name: 'Volunteers', role: 'Community Crew', image: volunteers, alt: 'Red Carabao volunteers on Coron Island', width: 1200, height: 900, profile: 'Volunteer profiles will be shared here soon.' },
  { name: 'Robert', role: 'Boat Crew', image: robert, alt: 'Robert from the Red Carabao boat crew', width: 1200, height: 900, profile: 'A profile from Robert is coming soon.' },
] as const

export const teamContact = {
  address: ['National Highway, Barangay V', 'Coron, Palawan 5316'],
  hours: 'MON, WED, FRI | 17:00 to 20:00 PHILIPPINE TIME',
  whatsapp: '+63 995 235 0304',
  whatsappUrl: 'https://wa.me/639952350304',
  email: 'info@redcarabao.com',
} as const
