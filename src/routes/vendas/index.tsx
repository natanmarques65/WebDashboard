import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vendas/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/vendas/"!</div>
}
