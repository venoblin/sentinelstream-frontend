import type { RouteType } from '../types'
import { Link } from 'react-router'
import { NavigationItem } from '@salt-ds/core'

const NavigationLink = (props: { route: RouteType; active: boolean }) => {
  return (
    <li>
      <NavigationItem
        href={props.route.href}
        orientation="vertical"
        render={<Link to={props.route.href} />}
        active={props.active}
      >
        {props.route.title}
      </NavigationItem>
    </li>
  )
}

export default NavigationLink
