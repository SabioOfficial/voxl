import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voxl" },
    { name: "description", content: "A web extension for Pixl." },
  ];
}

export default function Home() {
  return (
    <h1 className="text-8xl font-bold text-center">Voxl</h1>
  );
}
