import { Link } from 'react-router-dom'
import brandLogo from '@/assets/brand/red-carabao-logo.svg'

export function Brand() {
  return <Link to="/" className="brand" aria-label="Red Carabao home"><img src={brandLogo} alt="Red Carabao" width="505" height="493" /></Link>
}
