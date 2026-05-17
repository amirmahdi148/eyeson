import { type IconConfig } from "../islands/Shared/OrbitSystem.tsx";

export const orbitIconPath = (iconName: string) =>
  `/Shared/OrbitIcons/${iconName.replace(/-/g, "")}.webp`;

export const buildOrbitIcon = (
  name: string,
  start: number,
  end: number,
): IconConfig => ({
  name,
  start,
  end,
  iconSrc: orbitIconPath(name),
});
