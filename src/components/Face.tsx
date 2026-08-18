import type { FC } from "react";

import { COLORS_MAP } from "@/utils/constants";
import { cn } from "@/utils/functions";

import type { FaceProps } from "@/interfaces/GuessBackColor";

const Face: FC<FaceProps> = ({ tiles, transform, onTileClick, highlight }) => (
  <div
    className="absolute box-border grid size-60 grid-cols-3 gap-1.5 bg-[#111] p-1.5 backface-hidden"
    style={{ transform }}
  >
    {tiles.flat().map((color, index) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      const isCorner = row === highlight.row && col === highlight.col;
      return (
        <div
          key={index}
          onClick={() => isCorner && onTileClick(row, col)}
          className={cn(
            "rounded transition-[filter] duration-150",
            isCorner
              ? cn("cursor-pointer", COLORS_MAP[color])
              : "cursor-default bg-[#444]"
          )}
          onMouseEnter={(e) =>
            isCorner &&
            ((e.currentTarget as HTMLDivElement).style.filter =
              "brightness(1.25)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.filter = "brightness(1)")
          }
        />
      );
    })}
  </div>
);

export default Face;
