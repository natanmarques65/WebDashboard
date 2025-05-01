import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/Sidebar";
import { TooltipProvider } from "../components/Tooltip/TooltipContext";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/geral">Start Over</Link>
      </div>
    );
  },
});

function RootComponent() {
  return (
    <>
      <div className="flex flex-row w-full h-full">
        <TooltipProvider>
          <Sidebar />
          <Outlet />
        </TooltipProvider>
      </div>
    </>
  );
}
