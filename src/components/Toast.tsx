import { CloseIcon } from '@salt-ds/icons'
import {
  Button,
  Text,
  Toast as SaltToast,
  ToastContent,
  type ValidationStatus
} from '@salt-ds/core'
import { useState } from 'react'

const Toast = (props: {
  status: ValidationStatus
  text: string
  subText: string
}) => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <SaltToast
      status={props.status}
      style={{
        width: 260,
        margin: 'auto auto',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <ToastContent>
        <Text>
          <strong>{props.text}</strong>
        </Text>
        <div>{props.subText}.</div>
      </ToastContent>
      <Button
        appearance="transparent"
        aria-label="Dismiss"
        onClick={() => setIsVisible(false)}
      >
        <CloseIcon aria-hidden />
      </Button>
    </SaltToast>
  )
}

export default Toast
