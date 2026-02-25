import './Logo.css'
import logoSvg from '../assets/logo.svg'
import { FlowLayout } from '@salt-ds/core'

const Logo = () => {
  return (
    <FlowLayout gap={0} className="Logo" align="center">
      <img src={logoSvg} alt="Logo" />
      <p>SentinelStream</p>
    </FlowLayout>
  )
}

export default Logo
