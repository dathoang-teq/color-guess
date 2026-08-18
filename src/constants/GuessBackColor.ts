import { COLORS_MAP } from "@/utils/constants";

import type {
  ColorKey,
  CornerConfig,
  CornerType,
} from "@/interfaces/GuessBackColor";

export const COLOR_KEYS = Object.keys(COLORS_MAP) as ColorKey[];

// the 4 corner pieces containing white: [front-back color, left-right color]
export const WHITE_CORNER_PIECES: [ColorKey, ColorKey][] = [
  ["red", "green"],
  ["red", "blue"],
  ["orange", "green"],
  ["orange", "blue"],
];

// 12 orientations as [top, sideA, sideB] — 3 per piece based on where white faces
export const ALL_WHITE_COMBOS: [ColorKey, ColorKey, ColorKey][] =
  WHITE_CORNER_PIECES.flatMap(([fb, lr]) => [
    ["white", fb, lr] as [ColorKey, ColorKey, ColorKey],
    [lr, "white", fb] as [ColorKey, ColorKey, ColorKey],
    [fb, lr, "white"] as [ColorKey, ColorKey, ColorKey],
  ]);

export const WHITE_COMBOS_BY_POSITION: {
  label: string;
  combos: [ColorKey, ColorKey, ColorKey][];
}[] = [
  {
    label: "White on top",
    combos: WHITE_CORNER_PIECES.map(
      ([fb, lr]) => ["white", fb, lr] as [ColorKey, ColorKey, ColorKey]
    ),
  },
  {
    label: "White on front / back",
    combos: WHITE_CORNER_PIECES.map(
      ([fb, lr]) => [lr, "white", fb] as [ColorKey, ColorKey, ColorKey]
    ),
  },
  {
    label: "White on left / right",
    combos: WHITE_CORNER_PIECES.map(
      ([fb, lr]) => [fb, lr, "white"] as [ColorKey, ColorKey, ColorKey]
    ),
  },
];

export const FACE_SIZE = 240;
export const HALF = FACE_SIZE / 2;

// cube rotation and face geometry for each of the 4 white top-layer corners
export const CORNER_CONFIGS: Record<CornerType, CornerConfig> = {
  "front-left": {
    cubeTransform: "rotateX(-30deg) rotateY(45deg)",
    top: { highlight: { row: 2, col: 0 } },
    sideA: {
      transform: `translateZ(${HALF}px)`,
      highlight: { row: 0, col: 0 },
    },
    sideB: {
      transform: `rotateY(-90deg) translateZ(${HALF}px)`,
      highlight: { row: 0, col: 2 },
    },
  },
  "front-right": {
    cubeTransform: "rotateX(-30deg) rotateY(-45deg)",
    top: { highlight: { row: 2, col: 2 } },
    sideA: {
      transform: `translateZ(${HALF}px)`,
      highlight: { row: 0, col: 2 },
    },
    sideB: {
      transform: `rotateY(90deg) translateZ(${HALF}px)`,
      highlight: { row: 0, col: 0 },
    },
  },
  "back-left": {
    cubeTransform: "rotateX(-30deg) rotateY(135deg)",
    top: { highlight: { row: 0, col: 0 } },
    sideA: {
      transform: `rotateY(180deg) translateZ(${HALF}px)`,
      highlight: { row: 0, col: 2 },
    },
    sideB: {
      transform: `rotateY(-90deg) translateZ(${HALF}px)`,
      highlight: { row: 0, col: 0 },
    },
  },
  "back-right": {
    cubeTransform: "rotateX(-30deg) rotateY(-135deg)",
    top: { highlight: { row: 0, col: 2 } },
    sideA: {
      transform: `rotateY(180deg) translateZ(${HALF}px)`,
      highlight: { row: 0, col: 0 },
    },
    sideB: {
      transform: `rotateY(90deg) translateZ(${HALF}px)`,
      highlight: { row: 0, col: 2 },
    },
  },
};
