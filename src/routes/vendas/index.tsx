import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vendas/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="w-full h-full text-slate100 ">Vendas</div>;
}
