function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const STARS: Array<{
  top: string;
  left: string;
  size: string;
  opacity: number;
}> = [...Array(40)].map((_, i) => ({
  top: `${seededRandom(i * 1) * 100}%`,
  left: `${seededRandom(i * 2 + 1) * 100}%`,
  size: seededRandom(i * 3 + 2) < 0.5 ? "1px" : "2px",
  opacity: seededRandom(i * 4 + 3) * 0.7,
}));

export default function StarBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {STARS.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
