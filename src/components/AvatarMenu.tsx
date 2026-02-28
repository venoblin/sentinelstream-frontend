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
  Button
} from '@salt-ds/core'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Toast from './Toast'
import { load } from '../utils'

const AvatarMenu = () => {
  const authContext = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const id = useId()

  const handleLogout = async () => {
    try {
      await load(authContext?.logoutUser(), setIsLoading)
    } catch {
      setIsError(true)
    }
  }

  return (
    <Overlay>
      {isError && (
        <Toast
          status="error"
          text="Couldn't log out"
          subText="Please try again later"
        />
      )}

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

            <Button
              sentiment="accented"
              appearance="bordered"
              onClick={handleLogout}
            >
              {isLoading ? 'Logging out...' : 'Logout'}
            </Button>
          </StackLayout>
        </OverlayPanelContent>
      </OverlayPanel>
    </Overlay>
  )
}

export default AvatarMenu
