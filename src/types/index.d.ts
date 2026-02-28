export interface RouteType {
  href: string
  title: string
  RouteComponent: () => JSX.Element
  isProtected: boolean
}
