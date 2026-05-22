import React, { useEffect, useMemo, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, X } from "lucide-react";

export type VideoItem = {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  accent: string;
};

type Props = {
  videos: VideoItem[] | null;
  activeVideo: VideoItem | null;
  closeModal: () => void;
};

export default function VideoPlayer({ videos, activeVideo, closeModal }: Props) {
  const [activeId, setActiveId] = useState<string | null>(activeVideo?.id ?? null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // ✨ NEW

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const hideTimerRef = useRef<number | null>(null);

  // 🔒 LOCK SCROLL
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  const list = videos ?? [];

  const currentVideo = useMemo(() => {
    return list.find((v) => v.id === activeId) ?? activeVideo ?? list[0] ?? null;
  }, [list, activeId, activeVideo]);

  const showControls = () => {
    setControlsVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 1500);
  };

  const sync = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsPlaying(!v.paused);
    if (!draggingRef.current) {
      setCurrentTime(v.currentTime || 0);
    }
    setDuration(v.duration || 0);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    setIsLoading(true); // ✨ شروع لود

    v.pause();
    v.currentTime = 0;
    v.load();

    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [currentVideo]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) v.play().then(r => r);
    else v.pause();

    showControls();
  };

  const prev = () => {
    const i = list.findIndex((v) => v.id === activeId);
    if (i > 0) setActiveId(list[i - 1].id);
  };

  const next = () => {
    const i = list.findIndex((v) => v.id === activeId);
    if (i < list.length - 1) setActiveId(list[i + 1].id);
  };

  // 🎯 SEEK WITH DRAG
  const updateByPointer = (clientX: number) => {
    const bar = barRef.current;
    const video = videoRef.current;
    if (!bar || !video) return;

    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const time = ratio * (video.duration || 0);

    video.currentTime = time;
    setCurrentTime(time);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    updateByPointer(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateByPointer(e.clientX);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
        <div className="fixed inset-0 z-9999 w-screen h-180 bg-black ">

        {/* ❌ CLOSE */}
        <button onClick={closeModal} className="absolute top-5 right-5 z-50 text-white">
          <X size={28} />
        </button>

        <div
            className="w-full h-full flex items-end justify-center"
            onMouseMove={showControls}
            onClick={showControls}
        >
          {/* 🎬 VIDEO */}
          <div className="items-center w-full h-full rounded-2xl flex justify-center">
            {currentVideo && (
                <video
                    ref={videoRef}
                    src={currentVideo.videoUrl}
                    className="w-dvw h-full  rounded-[30px]"
                    onClick={togglePlay}
                    onTimeUpdate={sync}
                    onLoadedMetadata={sync}
                    onCanPlay={() => setIsLoading(false)} // ✨ آماده شد
                />
            )}

            {/* 🖼 THUMBNAIL + LOADING */}
            {currentVideo && isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black rounded-[30px]">

                  {/* thumbnail */}
                  <img
                      src={currentVideo.thumbnailUrl}
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />

                  {/* overlay blur */}
                  <div className="absolute inset-0 backdrop-blur-md bg-black/40" />

                  {/* loader */}
                  <div className="relative z-10 flex flex-col items-center gap-4 text-white">
                    <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="text-sm text-white/70">Loading video...</span>
                  </div>
                </div>
            )}

            {/* 🎮 CONTROLS */}
            {!isLoading && (
                <div
                    className={`absolute inset-0 flex items-center justify-center gap-8 transition ${
                        controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                  <button onClick={prev} className="text-white">
                    <SkipBack size={36} />
                  </button>

                  <button onClick={togglePlay} className="text-white">
                    {isPlaying ? <Pause size={44} /> : <Play size={44} />}
                  </button>

                  <button onClick={next} className="text-white">
                    <SkipForward size={36} />
                  </button>
                </div>
            )}
          </div>

          {/* ⏱ SEEK BAR */}
          {!isLoading && (
              <div className="absolute bottom-0  left-0 right-0 px-6">
                <div
                    ref={barRef}
                    className="w-full h-2 bg-white/20 rounded cursor-pointer relative"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerLeave={onPointerUp}
                >
                  <div
                      className="h-2 bg-cyan-400 rounded"
                      style={{
                        width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                      }}
                  />

                  <div
                      className="absolute top-1/2 w-4 h-4 bg-cyan-400 rounded-full"
                      style={{
                        left: `${duration ? (currentTime / duration) * 100 : 0}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                  />
                </div>
              </div>
          )}
        </div>
      </div>
  );
}