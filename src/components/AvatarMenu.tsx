import './AvatarMenu.css'
import { Link } from 'react-router'
import {
  Overlay,
  Avatar,
  OverlayPanel,
  OverlayPanelContent,
  Tooltip,
  useId,
  OverlayTrigger,
  StackLayout,
  Button,
  NavigationItem
} from '@salt-ds/core'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const AvatarMenu = () => {
  const authContext = useContext(AuthContext)
  const id = useId()

  return (
    <Overlay>
      <Tooltip content={'Account'}>
        <OverlayTrigger>
          <Avatar
            name={`${authContext?.user?.firstName} ${authContext?.user?.lastName}`}
            size={1.5}
            className="avatar"
          />
        </OverlayTrigger>
      </Tooltip>

      <OverlayPanel aria-labelledby={id}>
        <OverlayPanelContent>
          <StackLayout style={{ textAlign: 'center', padding: '1rem' }}>
            <Link to="/profile">Profile</Link>

            <Button sentiment="accented" appearance="bordered">
              Logout
            </Button>
          </StackLayout>
        </OverlayPanelContent>
      </OverlayPanel>
    </Overlay>
  )
}

export default AvatarMenu
