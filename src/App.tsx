import { Outlet, Router, RootRoute, useSearch } from '@tanstack/react-router'

const rootRoute = new RootRoute({
  component: Root,
})

export default function Root() {
  const search = useSearch({
    from: rootRoute.id,
  })
  return (
    <>
      {/* {search && <span>Uncomment me</span>} */}
      <hr />
      <Outlet />
    </>
  )
}

const routeTree = rootRoute.addChildren([])
const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
