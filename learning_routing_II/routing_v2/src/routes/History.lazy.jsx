import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/History')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <section className='flex flex-col flex-wrap items-center min-h-screen gap-5 overflow-hidden md:px-40 px-10 py-28 lg:py-48 bg-amber-600'>
      <div className='my-5 justify-center items-center flex flex-col text-center'>
        <h1 className='text-2xl md:text-5xl mb-4 tracking-tight font-extrabold text-white'>La Consolacion College Novaliches History</h1>
      </div>
    </section>
    </>
  )
}
