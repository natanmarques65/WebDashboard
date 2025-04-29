import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] text-slate100 text-2xl">
      Home
    </div>
  );
}
