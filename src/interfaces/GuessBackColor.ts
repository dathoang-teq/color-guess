import type { COLORS_MAP } from "@/utils/constants";

export type ColorKey = keyof typeof COLORS_MAP;

export type CornerType =
  | "front-left"
  | "front-right"
  | "back-left"
  | "back-right";

export interface CornerConfig {
  cubeTransform: string;
  top: { highlight: { row: number; col: number } };
  sideA: { transform: string; highlight: { row: number; col: number } };
  sideB: { transform: string; highlight: { row: number; col: number } };
}

export interface FaceProps {
  tiles: ColorKey[][];
  transform: string;
  onTileClick: (row: number, col: number) => void;
  highlight: { row: number; col: number };
}
