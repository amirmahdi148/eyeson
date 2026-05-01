import { lazy, Suspense, useState } from "react";
import type { VideoItem } from "../VideoPlayer/Player";

const Player = lazy(() => import("../VideoPlayer/Player"));

const VIDEO: VideoItem = {
  id: "debug",
  title: "Debug Video",
  category: "Debug",
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  thumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  accent: "from-cyan-400/90 to-emerald-400/80",
};

export default function VideoTestingPlayer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black"
      >
        Play
      </button>

      {isOpen ? (
        <Suspense fallback={null}>
          <Player videos={[VIDEO]} activeVideo={VIDEO} closeModal={() => setIsOpen(false)} />
        </Suspense>
      ) : null}
    </div>
  );
}
