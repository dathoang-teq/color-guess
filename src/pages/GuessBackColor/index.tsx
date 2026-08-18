import { useState } from "react";
import type { FC } from "react";

import Face from "@/components/Face";
import {
  CORNER_CONFIGS,
  HALF,
  WHITE_COMBOS_BY_POSITION,
} from "@/constants/GuessBackColor";
import type { ColorKey, CornerType } from "@/interfaces/GuessBackColor";
import { COLORS_MAP } from "@/utils/constants";
import { cn } from "@/utils/functions";
import {
  applyFromCombo,
  createFace,
  cycleColor,
  randomWhiteCombo,
} from "@/utils/GuessBackColor";

const GuessBackColor: FC = () => {
  const [cornerType, setCornerType] = useState<CornerType>("front-left");
  const [top, setTop] = useState(createFace("white"));
  const [sideA, setSideA] = useState(createFace("red"));
  const [sideB, setSideB] = useState(createFace("green"));

  const config = CORNER_CONFIGS[cornerType];
  const handleApply = (combo: [ColorKey, ColorKey, ColorKey]) =>
    applyFromCombo(combo, setCornerType, setTop, setSideA, setSideB);

  return (
    <div className="flex size-full flex-col items-center gap-8 p-8">
      <div className="flex items-center justify-center perspective-[1000px]">
        <div
          className="relative size-60 transform-3d"
          style={{ transform: config.cubeTransform }}
        >
          <Face
            tiles={top}
            transform={`rotateX(90deg) translateZ(${HALF}px)`}
            onTileClick={(row, col) => cycleColor(setTop, row, col)}
            highlight={config.top.highlight}
          />
          <Face
            tiles={sideA}
            transform={config.sideA.transform}
            onTileClick={(row, col) => cycleColor(setSideA, row, col)}
            highlight={config.sideA.highlight}
          />
          <Face
            tiles={sideB}
            transform={config.sideB.transform}
            onTileClick={(row, col) => cycleColor(setSideB, row, col)}
            highlight={config.sideB.highlight}
          />
        </div>
      </div>

      <button
        onClick={() => handleApply(randomWhiteCombo())}
        className="mt-28 rounded-lg bg-gray-700 px-6 py-2 font-semibold text-white hover:bg-gray-600"
      >
        Random
      </button>

      <div className="flex flex-col gap-4">
        {WHITE_COMBOS_BY_POSITION.map(({ label, combos }) => (
          <div key={label} className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-400">{label}</p>
            <div className="grid grid-cols-4 gap-2">
              {combos.map((combo, index) => (
                <button
                  key={index}
                  onClick={() => handleApply(combo)}
                  className="flex items-center gap-1 rounded-lg border border-gray-600 p-2 hover:border-gray-300"
                >
                  {combo.map((color, ci) => (
                    <div
                      key={ci}
                      className={cn("size-5 rounded", COLORS_MAP[color])}
                    />
                  ))}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuessBackColor;
