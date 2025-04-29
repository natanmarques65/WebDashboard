import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/Sidebar";

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
  var options = ["Geral", "Vendas", "Usuários", "Configurações"];
  return (
    <>
      <div className="flex flex-row w-full h-full">
        <Sidebar options={options} />
        <Outlet />
      </div>
    </>
  );
}
