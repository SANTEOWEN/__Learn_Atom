import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Footer } from "../components/Footer.jsx"
import { Navbar } from "../components/Navbar.jsx"
import { PageNotFound } from "../components/PageNotFound.jsx";

export const Route = createRootRoute ({
  component: RootComponent,
  notFoundComponent: PageNotFound,
})

function RootComponent () {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="grow-1">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}
