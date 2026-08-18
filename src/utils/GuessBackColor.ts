import type { Dispatch, SetStateAction } from "react";

import {
  ALL_WHITE_COMBOS,
  COLOR_KEYS,
  CORNER_CONFIGS,
} from "@/constants/GuessBackColor";
import type { ColorKey, CornerType } from "@/interfaces/GuessBackColor";

export const createFace = (color: ColorKey): ColorKey[][] =>
  Array.from({ length: 3 }, () => Array(3).fill(color));

export const nextColor = (color: ColorKey) => {
  const index = COLOR_KEYS.indexOf(color);
  return COLOR_KEYS[index === -1 ? 0 : (index + 1) % COLOR_KEYS.length];
};

export const getCornerType = (
  combo: [ColorKey, ColorKey, ColorKey]
): CornerType => {
  const isBack = combo.includes("orange");
  const isRight = combo.includes("blue");
  if (!isBack && !isRight) return "front-left";
  if (!isBack && isRight) return "front-right";
  if (isBack && !isRight) return "back-left";
  return "back-right";
};

export const cycleColor = (
  setFace: Dispatch<SetStateAction<ColorKey[][]>>,
  row: number,
  col: number
) => {
  setFace((prev) =>
    prev.map((faceRow, rowIndex) =>
      faceRow.map((tile, colIndex) =>
        rowIndex === row && colIndex === col ? nextColor(tile) : tile
      )
    )
  );
};

export const setCornerColor = (
  setFace: Dispatch<SetStateAction<ColorKey[][]>>,
  position: { row: number; col: number },
  color: ColorKey
) => {
  setFace((prev) =>
    prev.map((faceRow, rowIndex) =>
      faceRow.map((tile, colIndex) =>
        rowIndex === position.row && colIndex === position.col ? color : tile
      )
    )
  );
};

export const applyFromCombo = (
  combo: [ColorKey, ColorKey, ColorKey],
  setCornerTypeFn: Dispatch<SetStateAction<CornerType>>,
  setTopFn: Dispatch<SetStateAction<ColorKey[][]>>,
  setSideAFn: Dispatch<SetStateAction<ColorKey[][]>>,
  setSideBFn: Dispatch<SetStateAction<ColorKey[][]>>
) => {
  const newType = getCornerType(combo);
  const newConfig = CORNER_CONFIGS[newType];
  setCornerTypeFn(newType);
  setCornerColor(setTopFn, newConfig.top.highlight, combo[0]);
  setCornerColor(setSideAFn, newConfig.sideA.highlight, combo[1]);
  setCornerColor(setSideBFn, newConfig.sideB.highlight, combo[2]);
};

export const randomWhiteCombo = (): [ColorKey, ColorKey, ColorKey] =>
  ALL_WHITE_COMBOS[Math.floor(Math.random() * ALL_WHITE_COMBOS.length)];
