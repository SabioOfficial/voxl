import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voxl" },
    { name: "description", content: "A web extension for Pixl." },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-center items-center h-dvh ml-auto mr-auto gap-6">
        <img src="WideLogo.svg" className="w-auto h-40"></img>
        <div className="flex flex-col">
          <p className="text-4xl"><span className="text-highlight text-5xl">The</span> browser extension for Pixl</p>
        </div>
      </div>
    </main>
  );
}
