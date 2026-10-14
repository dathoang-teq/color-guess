import type { CSSProperties, FC } from "react";

import { cn } from "@/utils/functions";

type CubeDataType = {
  top?: string;
  front?: string;
} & ({ left?: string; right?: never } | { left?: never; right?: string });

interface Props {
  data?: CubeDataType;
  perspective?: "left" | "right";
  size?: number;
}

const TILT_X = -20;
const ROTATE_Y_RIGHT_DATA = { left: 60, right: -30 } as const;
const ROTATE_Y_LEFT_DATA = { left: -60, right: 30 } as const;

const Cube: FC<Props> = ({ data = {}, perspective = "right", size = 100 }) => {
  const half = size / 2;
  const ROTATE_Y = data.left ? ROTATE_Y_LEFT_DATA : ROTATE_Y_RIGHT_DATA;

  const face = (transform: string): CSSProperties => ({
    transform,
  });

  return (
    <div
      className="mt-10"
      style={{ perspective: size * 4, width: size, height: size }}
    >
      <div
        className={cn(
          "relative size-full transition-transform duration-700 ease-in-out"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${TILT_X}deg) rotateY(${ROTATE_Y[perspective]}deg)`,
        }}
      >
        {/* top surface */}
        <div
          className={cn("absolute inset-0", data?.top || "")}
          style={face(`rotateX(90deg) translateZ(${half}px)`)}
        />

        {/* front surface */}
        <div
          className={cn("absolute inset-0", data?.front || "")}
          style={face(`translateZ(${half}px)`)}
        />

        {/* left surface */}
        <div
          className={cn("absolute inset-0", data?.left || "")}
          style={face(`rotateY(-90deg) translateZ(${half}px)`)}
        />

        {/* right surface */}
        <div
          className={cn("absolute inset-0", data?.right || "")}
          style={face(`rotateY(90deg) translateZ(${half}px)`)}
        />
      </div>
    </div>
  );
};

export default Cube;
