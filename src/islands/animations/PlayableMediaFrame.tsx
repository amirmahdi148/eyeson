import {SmartImage} from "../../utils/SmartImage.tsx"
type PlayableMediaFrameProps = {
  vidLink?: string | null;
  imgUrl: string;
  playable: boolean;
  alt?: string;
  className?: string;
};

function PlaySvgButton() {
  return (
      <svg
          width="69"
          height="78"
          viewBox="0 0 69 78"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_16px_rgba(72,235,214,0.45)]"
          aria-hidden
      >
        <path
            d="M66 33.7218C70 36.0312 70 41.8047 66 44.1141L9 77.0231C5 79.3325 0 76.4457 0 71.8269V6.009C0 1.3902 5 -1.49655 9 0.812852L66 33.7218Z"
            fillOpacity="0.52"
            className="transition-opacity duration-300 ease-out hover:opacity-90"
        />
      </svg>
  );
}

export function PlayableMediaFrame({
  vidLink = null,
  imgUrl,
  playable,
  alt = "Media preview",
  className = "",
}: PlayableMediaFrameProps) {
  return (
    <div
      className={`group relative h-[320px] overflow-hidden rounded-3xl border border-cyan-300/25 md:h-[460px] ${className}`.trim()}
    >
      <SmartImage
          src={imgUrl}
          alt={alt}
          fill
          className="absolute inset-0 w-full h-full object-cover"
      />

      {playable && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {vidLink ? (
            <a
              href={vidLink}
              className="inline-flex"
              aria-label="Play video"
              target="_blank"
              rel="noreferrer"
            >
              <PlaySvgButton />
            </a>
          ) : (
            <button type="button" className="inline-flex" aria-label="Play video">
              <PlaySvgButton />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
