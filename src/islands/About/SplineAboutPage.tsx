

import { useEffect, useRef } from "react";

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        // Skip heavy Spline runtime on CPU fallback — static fallback saves WebGL/CPU
        if (typeof window !== "undefined" && (document.documentElement.classList.contains("gpu-off") || (window as any).__GPU_OFF__)) return;

        let spline: any;

        const init = async () => {
            const { Application } = await import("@splinetool/runtime");

            spline = new Application(canvasRef.current as HTMLCanvasElement);
            await spline.load(scene);
        };

        init().then(r => r);

        return () => {
            if (spline) spline.dispose();
        };
    }, [scene]);

    // ponytail: show poster/fallback when Spline is gated; upgrade when fallback asset ready
    if (typeof window !== "undefined" && (document.documentElement.classList.contains("gpu-off") || (window as any).__GPU_OFF__)) {
        return <div className={className} style={{ width: "100%", height: "100%", background: "radial-gradient(ellipse at center, rgba(0,230,215,0.12), transparent 70%)" }} aria-hidden />;
    }

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: "100%", height: "100%" }}
        />
    );
}