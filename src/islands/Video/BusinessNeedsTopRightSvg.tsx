import {SmartImage} from "../../utils/SmartImage.tsx";


export default function BusinessNeedsTopRightSvg() {
    return (
        <div className="relative mx-auto w-full max-w-[420px] rounded-3xl border border-[#46B6A0]/35 bg-[radial-gradient(circle_at_20%_15%,rgba(70,182,160,0.18),rgba(3,19,31,0.88)_58%,rgba(4,14,26,0.96)_100%)] p-2 shadow-[0_18px_40px_rgba(3,12,20,0.45),inset_0_0_22px_rgba(70,182,160,0.12)]">
            <div className="svg-shell relative overflow-hidden rounded-2xl border border-white/10 bg-[#041421]/70 p-1">
                <SmartImage
                    src="/video-pieces/Group 48008.svg"
                    alt="Decorative visual"
                    width={800}
                    height={520}
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="h-auto w-full"
                    priority={false}
                />
            </div>
        </div>
    );
}
