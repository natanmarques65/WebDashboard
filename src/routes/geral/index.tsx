import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/geral/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full space-y-2 text-slate100 text-lg">
      Header
      <span className="flex flex-row justify-center space-x-2">
        <div className="w-3/8 h-[200px] bg-secondary rounded-lg text-slate100">
          Card 1{" "}
        </div>
        <div className="w-3/8 h-[200px] bg-secondary rounded-lg text-slate100">
          Card 2{" "}
        </div>
      </span>
      <span className="flex flex-col space-y-2 justify-center items-center">
        <div className="w-3/4 h-[180px] bg-secondary rounded-lg text-slate100">
          Card 3{" "}
        </div>
        <div className="w-3/4 h-[200px] bg-secondary rounded-lg text-slate100">
          Card 4{" "}
        </div>
      </span>
    </div>
  );
}
