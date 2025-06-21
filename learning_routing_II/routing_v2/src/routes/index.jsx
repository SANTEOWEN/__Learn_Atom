import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero.jsx'
import { SmallAboutSection } from '../components/SmallAboutSection.jsx'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <Hero />
    <SmallAboutSection />  
  </>
}
