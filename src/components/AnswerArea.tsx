import { type FC, useState } from "react";

import { COLORS_MAP } from "@/utils/constants";
import { cn } from "@/utils/functions";

const CHOICES = Object.entries(COLORS_MAP).filter(([name]) => name !== "black");

interface Props {
  // color class from COLORS_MAP
  answer: string;
}

const AnswerArea: FC<Props> = ({ answer }) => {
  const [activated, setActivated] = useState<string | null>(null);

  return (
    <div className="m-5 mt-10 grid grid-cols-3 gap-4">
      {CHOICES.map(([name, color]) => {
        const isActivated = activated === color;

        return (
          <button
            key={name}
            type="button"
            aria-label={name}
            aria-pressed={isActivated}
            className={cn(
              "h-10 w-20 rounded-md md:h-12 md:w-24",
              color,
              isActivated && "border-4",
              isActivated &&
                (color === answer ? "border-green-500" : "border-gray-500")
            )}
            onClick={() => setActivated(color)}
          />
        );
      })}
    </div>
  );
};

export default AnswerArea;
