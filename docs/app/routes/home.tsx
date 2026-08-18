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
      <div className="flex flex-row justify-center items-center h-dvh ml-auto mr-auto gap-10">
        <img src="WideLogo.svg" className="w-auto h-40"></img>
        <div className="flex flex-col gap-3">
          <p className="text-4xl text-left"><span className="text-highlight text-5xl">The</span> browser extension for Pixl</p>
          <div className="flex flex-row gap-2">
            <button type="button" disabled>Coming Soon</button>
            <a href="https://github.com/SabioOfficial/voxl" target="_blank"><button type="button">Contribute</button></a>
          </div>
        </div>
      </div>
    </main>
  );
}
