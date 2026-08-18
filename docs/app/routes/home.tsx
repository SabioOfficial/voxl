import type { Route } from "./+types/home";
import { Tooltip } from 'react-tooltip';
import Lenis from 'lenis';
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voxl" },
    { name: "description", content: "A web extension for Pixl." },
  ];
}

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <div className="flex flex-row justify-center items-center h-dvh ml-auto mr-auto gap-10 border-3 border-gradient-purple">
        <img src="WideLogo.svg" className="w-auto h-40"></img>
        <div className="flex flex-col gap-3">
          <p className="text-4xl text-left"><span className="text-highlight text-5xl">The</span> browser extension for Pixl</p>
          <div className="flex flex-row gap-2">
            <button
              type="button"
              disabled
              data-tooltip-id="coming-soon"
              data-tooltip-place="bottom-start"
            >Coming Soon</button>
            <Tooltip id="coming-soon">
              Voxl is currently under heavy development and should<br/>
              be expected to release early September. Join #voxl,<br/>
              the Slack channel, for more updates.
            </Tooltip>
            <a href="https://github.com/SabioOfficial/voxl" target="_blank"><button type="button">Contribute</button></a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-center py-12 border-3 border-gradient-blue border-t-0">
        <h1 className="text-6xl">Info</h1>
        <div className="mt-1 w-[50%]">
          <p className="text-taupe-400"><i>(the big question... what even is Voxl?)</i></p>
          <p className="text-xl mt-1">
            Voxl is a plugin-based browser extension for Pixl built as the successor to Exterstellar, a project I previously worked on for Stardance. Unlike
            Exterstellar, Voxl uses the XtensionAPI, a base extension API I built branching off of Exterstellar's API, which makes creating many extensions with a
            plugin-based system easier. Development is still extremely early and is not ready for public usage just yet. An early development build may be
            accessible in the GitHub page in the future.
          </p>
        </div>
      </div>
      <footer className="flex flex-row py-6 border-3 px-12 border-gradient-gray border-t-0">
        <p>An extension made with ♥ by <a href="https://sabiothedev.xyz/" target="_blank" className="underline underline-offset-3 text-xl">Sabio</a></p>
        <p className="ml-auto">Endorsed by <b className="text-xl">multiple</b> Pixl orgs!</p>
      </footer>
    </main>
  );
}
