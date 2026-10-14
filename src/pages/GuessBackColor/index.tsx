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

type VerticalType = (typeof VERTICAL_OPTIONS)[number];
type HorizontalType = (typeof HORIZONTAL_OPTIONS)[number];

type CombinationType =
  | (typeof COLOR_COMBINATION_TOP_RIGHT)[number]
  | (typeof COLOR_COMBINATION_TOP_LEFT)[number]
  | (typeof COLOR_COMBINATION_BOTTOM_RIGHT)[number]
  | (typeof COLOR_COMBINATION_BOTTOM_LEFT)[number];

type CombinationsType = Record<
  VerticalType,
  Record<HorizontalType, CombinationType[]>
>;

const COMBINATIONS: CombinationsType = {
  top: {
    right: COLOR_COMBINATION_TOP_RIGHT,
    left: COLOR_COMBINATION_TOP_LEFT,
  },
  bottom: {
    right: COLOR_COMBINATION_BOTTOM_RIGHT,
    left: COLOR_COMBINATION_BOTTOM_LEFT,
  },
};

const copyCombinations = (): CombinationsType => ({
  top: {
    right: [...COMBINATIONS.top.right],
    left: [...COMBINATIONS.top.left],
  },
  bottom: {
    right: [...COMBINATIONS.bottom.right],
    left: [...COMBINATIONS.bottom.left],
  },
});

const GuessBackColor: FC = () => {
  const [vertical, setVertical] = useState<VerticalType>(VERTICAL_OPTIONS[0]);
  const [horizontal, setHorizontal] = useState<HorizontalType>(
    HORIZONTAL_OPTIONS[0]
  );
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(copyCombinations);

  const combinations = COMBINATIONS[vertical][horizontal];
  const current = combinations[index];
  const answer = "back" in current ? current.back : current.bottom;

  const handleRandom = () => {
    const unused = remaining[vertical][horizontal];
    // refill once every value has been used
    const source = unused.length > 0 ? unused : combinations;
    const picked = source[Math.floor(Math.random() * source.length)];

    setIndex(combinations.indexOf(picked));
    setRemaining((prev) => ({
      ...prev,
      [vertical]: {
        ...prev[vertical],
        [horizontal]: source.filter((item) => item !== picked),
      },
    }));
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
