import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

type PlayerStatus = "idle" | "loading" | "ready" | "error";

type VideoPlayerContextValue = {
  openPlayer: () => void;
  stopPlayer: () => void;
  markReady: () => void;
  markError: (message: string) => void;
  isOpen: boolean;
  status: PlayerStatus;
  error: string | null;
};

const VideoPlayerContext = createContext<VideoPlayerContextValue | null>(null);

const VIDEO_SOURCE_URL = "http://localhost:3000/video/sample.m3u8";
const VIDEO_SOURCE_TYPE = "application/vnd.apple.mpegurl";

function useVideoPlayer() {
  const context = useContext(VideoPlayerContext);
  if (!context) {
    throw new Error("useVideoPlayer must be used inside VideoPlayerProvider");
  }
  return context;
}

function VideoPlayerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const stopPlayer = () => {
    setIsOpen(false);
    setStatus("idle");
    setError(null);
    playerRef.current?.pause();
  };

  const openPlayer = () => {
    setIsOpen(true);
    setStatus("loading");
    setError(null);
  };

  const markReady = () => {
    setStatus("ready");
    setError(null);
  };

  const markError = (message: string) => {
    setStatus("error");
    setError(message);
  };

  const value = useMemo(
    () => ({
      openPlayer,
      stopPlayer,
      markReady,
      markError,
      isOpen,
      status,
      error,
    }),
    [error, isOpen, status]
  );

  return <VideoPlayerContext.Provider value={value}>{children}</VideoPlayerContext.Provider>;
}

function VideoPlayerModal() {
  const { isOpen, stopPlayer, status, error, markReady, markError } = useVideoPlayer();
  const videoNodeRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!isOpen || !videoNodeRef.current) {
      return;
    }

    if (!playerRef.current) {
      const player = videojs(videoNodeRef.current, {
        controls: true,
        autoplay: true,
        muted: true,
        preload: "auto",
        fluid: true,
        responsive: true,
        liveui: true,
        html5: {
          vhs: {
            overrideNative: true,
          },
        },
        sources: [
          {
            src: VIDEO_SOURCE_URL,
            type: VIDEO_SOURCE_TYPE,
          },
        ],
      });
      playerRef.current = player;

      player.one("loadedmetadata", () => {
        markReady();
        player.play().catch((playError) => {
          markError(
            playError instanceof Error
              ? playError.message
              : "Video loaded but playback could not start"
          );
        });
      });

      player.one("canplay", () => {
        if (status === "loading") {
          markReady();
        }
      });

      player.on("error", () => {
        const playerError = player.error();
        markError(
          playerError?.message ??
            playerError?.code?.toString() ??
            "Unable to start the player"
        );
      });
    } else {
      playerRef.current.src({
        src: VIDEO_SOURCE_URL,
        type: VIDEO_SOURCE_TYPE,
      });
      playerRef.current.play().catch(() => {
        // Video.js will continue loading; the user can still press play in the controls.
      });
    }

    return () => {
      playerRef.current?.pause();
    };
  }, [isOpen, markError, markReady]);

  useEffect(() => {
    return () => {
      playerRef.current?.dispose();
      playerRef.current = null;
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#04111a] shadow-2xl shadow-black/40">
        <button
          type="button"
          onClick={stopPlayer}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Stop
        </button>

        <div className="border-b border-white/10 px-6 py-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7ee6dd]">Video preview</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Video.js HLS player</h2>
          <h2 className="mt-2 text-sm font-medium text-white/70">
            Source: {VIDEO_SOURCE_URL}
          </h2>
        </div>

        <div className="bg-black p-4">
          <div data-vjs-player>
            <video
              ref={videoNodeRef}
              className="video-js vjs-big-play-centered w-full"
              playsInline
            />
          </div>

          {status === "loading" && (
            <div className="mt-4 text-sm text-white/70">
              Preparing the HLS playlist. If playback does not start automatically, click the
              player&apos;s play button.
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 text-sm text-red-200">
              {error ?? "Unable to start the player"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function VideoPlayerCard() {
  const { openPlayer, status, stopPlayer } = useVideoPlayer();

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-[#1f6f70]/30 blur-3xl" />
        <div className="absolute right-[-5%] top-[15%] h-96 w-96 rounded-full bg-[#0b7f90]/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-72 w-72 rounded-full bg-[#41c6b2]/20 blur-3xl" />
      </div>

      <div className="w-full rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7ee6dd]">Videotesting</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Basic React video player with popup playback.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
          Click Play to open a `video.js` popup player and stream the HLS playlist from
          <code className="rounded bg-white/10 px-2 py-1 text-white">localhost:3000/video/sample.m3u8</code>.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={openPlayer}
            className="rounded-full bg-[#46b6a0] px-6 py-3 font-medium text-[#04111a] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Loading..." : "Play"}
          </button>
          <button
            type="button"
            onClick={stopPlayer}
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VideoTestingPlayer() {
  return (
    <VideoPlayerProvider>
      <VideoPlayerCard />
      <VideoPlayerModal />
    </VideoPlayerProvider>
  );
}
