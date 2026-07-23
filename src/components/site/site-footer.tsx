import { Camera, Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { BookingDialog } from './booking-dialog'
import { Brand } from './brand'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Brand />
          <p>Travel with purpose. Leave a positive footprint.</p>
        </div>
        <div className="footer-contact">
          <a href="mailto:info@redcarabao.com">
            <Mail />
            info@redcarabao.com
          </a>
          <a href="https://wa.me/639952350304">
            <MessageCircle />
            +63 995 235 0304
          </a>
          <a href="https://instagram.com/redcarabao">
            <Camera />
            Instagram
          </a>
        </div>
        <BookingDialog />
      </div>
      <Separator />
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Red Carabao Philippines, Inc.</span>
        <span>
          <a href="https://www.redcarabao.com/travel-guide">Terms & Conditions</a> ·{' '}
          <a href="https://www.redcarabao.com/copy-of-terms-conditions">Privacy Policy</a> ·{' '}
          <Link to="/about-us">Contact</Link>
        </span>
      </div>
    </footer>
  )
}
