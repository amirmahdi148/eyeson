

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
            const { Application } = await import("@splinetool/runtime");

            spline = new Application(canvasRef.current as HTMLCanvasElement);
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