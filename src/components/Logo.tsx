import './Logo.css'
import logoSvg from '../assets/logo.svg'
import { FlexItem, FlowLayout } from '@salt-ds/core'

const Logo = () => {
  return (
    <FlowLayout gap={0} className="Logo" align="center">
      <FlexItem>
        <img src={logoSvg} alt="Logo" />
      </FlexItem>

      <FlexItem>
        <p>SentinelStream</p>
      </FlexItem>
    </FlowLayout>
  )
}

export default Logo
