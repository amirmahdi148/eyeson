

import { useEffect, useRef } from "react";

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let spline: any;

        const init = async () => {
            const mod = await import("@splinetool/runtime");


            const SplineRuntime = (mod as any).default;

            spline = new SplineRuntime(canvasRef.current);
            await spline.load(scene);
        };

        init();

        return () => {
            if (spline) spline.dispose();
        };
    }, [scene]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: "100%", height: "100%" }}
        />
    );
}