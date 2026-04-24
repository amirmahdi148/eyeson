import React from "react";

type SmartImageProps = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    sizes?: string;
    priority?: boolean;
    loading?: "eager" | "lazy";
    decoding?: "async" | "sync" | "auto";
    objectFit?: "cover" | "contain";
    fill?: boolean;
};

function buildSrcSet(src: string) {
    const widths = [320, 640, 768, 1024, 1280, 1600];

    return widths
        .map((w) => `${src}?w=${w}&format=webp ${w}w`)
        .join(", ");
}

function buildFallbackSrcSet(src: string) {
    const widths = [320, 640, 768, 1024, 1280, 1600];

    return widths
        .map((w) => `${src}?w=${w} ${w}w`)
        .join(", ");
}

export function SmartImage({
                               src,
                               alt = "",
                               width,
                               height,
                               className = "",
                               sizes = "100vw",
                               priority = false,
                               loading,
                               decoding,
                               objectFit = "cover",
                               fill = false,
                           }: SmartImageProps) {
    const img = (
        <picture>
            {/* AVIF */}
            <source
                srcSet={buildSrcSet(src).replace(/webp/g, "avif")}
                sizes={sizes}
                type="image/avif"
            />

            {/* WebP */}
            <source
                srcSet={buildSrcSet(src)}
                sizes={sizes}
                type="image/webp"
            />

            {/* Fallback */}
            <img
                src={src}
                srcSet={buildFallbackSrcSet(src)}
                sizes={sizes}
                alt={alt}
                loading={loading ?? (priority ? "eager" : "lazy")}
                decoding={decoding ?? "async"}
                width={!fill ? width : undefined}
                height={!fill ? height : undefined}
                className={`
          ${fill ? "absolute inset-0 w-full h-full" : "w-full h-auto"}
          object-${objectFit}
          ${className}
        `}
                style={{ display: "block" }}
            />
        </picture>
    );

    if (fill) {
        return (
            <div className="relative w-full h-full">
                {img}
            </div>
        );
    }

    return img;
}
