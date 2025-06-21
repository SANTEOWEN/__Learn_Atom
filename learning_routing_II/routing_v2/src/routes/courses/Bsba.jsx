import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses/Bsba')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/courses/Bsba"!</div>
}
