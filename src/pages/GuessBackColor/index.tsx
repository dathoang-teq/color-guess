import { type FC, useState } from "react";

import AnswerArea from "@/components/AnswerArea";
import Cube from "@/components/Cube";
import Tabs from "@/components/Tabs";
import {
  COLOR_COMBINATION_BOTTOM_LEFT,
  COLOR_COMBINATION_BOTTOM_RIGHT,
  COLOR_COMBINATION_TOP_LEFT,
  COLOR_COMBINATION_TOP_RIGHT,
} from "@/constants/ColorCombinations";

const VERTICAL_OPTIONS = ["top", "bottom"] as const;
const HORIZONTAL_OPTIONS = ["left", "right"] as const;

type Vertical = (typeof VERTICAL_OPTIONS)[number];
type Horizontal = (typeof HORIZONTAL_OPTIONS)[number];

const GuessBackColor: FC = () => {
  const [vertical, setVertical] = useState<Vertical>(VERTICAL_OPTIONS[0]);
  const [horizontal, setHorizontal] = useState<Horizontal>(
    HORIZONTAL_OPTIONS[0]
  );
  const [index, setIndex] = useState(0);

  const COMBINATIONS = {
    top: {
      right: COLOR_COMBINATION_TOP_RIGHT,
      left: COLOR_COMBINATION_TOP_LEFT,
    },
    bottom: {
      right: COLOR_COMBINATION_BOTTOM_RIGHT,
      left: COLOR_COMBINATION_BOTTOM_LEFT,
    },
  };
  const combinations = COMBINATIONS[vertical][horizontal];
  const current = combinations[index];
  const answer = "back" in current ? current.back : current.bottom;

  const handleRandom = () => {
    setIndex(Math.floor(Math.random() * combinations.length));
  };

  return (
    <div className="flex size-full flex-col items-center gap-8">
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-baseline">
        <Tabs data={VERTICAL_OPTIONS} onChange={setVertical} />
        <Tabs data={HORIZONTAL_OPTIONS} onChange={setHorizontal} />
      </div>

      <Cube data={current} />

      <AnswerArea key={`${vertical}-${horizontal}-${index}`} answer={answer} />

      <button
        type="button"
        className="mt-8 rounded-md bg-white px-6 py-2 font-semibold text-gray-900"
        onClick={handleRandom}
      >
        Random
      </button>
    </div>
  );
};

export default GuessBackColor;
