import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/usuarios/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/usuarios/"!</div>
}
