const STARS: Array<{
  top: string;
  left: string;
  size: string;
  opacity: number;
}> = [...Array(40)].map(() => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() < 0.5 ? "1px" : "2px",
  opacity: Math.random() * 0.7,
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
