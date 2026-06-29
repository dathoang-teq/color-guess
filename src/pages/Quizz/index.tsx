import { type FC, useState } from "react";

import { COLOR_PAIR, COLORS_MAP } from "@/utils/constants";
import { cn } from "@/utils/functions";

type ColorType = "red" | "blue" | "orange" | "green";

const Quizz: FC = () => {
  const INITIAL_QUESTION_TRACK = {
    left: ["red", "blue", "orange", "green"],
    right: ["red", "blue", "orange", "green"],
  } as const;

  const [questionTrack, setQuestionTrack] = useState(INITIAL_QUESTION_TRACK);
  const [currentPosition, setCurrentPosition] = useState<"left" | "right">(
    "left"
  );
  const [currentColor, setCurrentColor] = useState<ColorType>("red");
  const [selectedAnswer, setSelectedAnswer] = useState<ColorType | null>(null);

  const ALL_COLORS: ColorType[] = ["red", "blue", "orange", "green"];
  const answerOptions = ALL_COLORS.filter((color) => color !== currentColor);
  const correctAnswer = COLOR_PAIR[currentPosition][currentColor];

  const handleNextQuestion = () => {
    let track = questionTrack;

    // Reset if both positions are empty
    if (!track.left.length && !track.right.length) {
      track = INITIAL_QUESTION_TRACK;
      setQuestionTrack(track);
    }

    // Always pick randomly between left and right
    let selectedPosition: "left" | "right" =
      Math.random() < 0.5 ? "left" : "right";

    // If selected position is empty, use the other
    if (
      !track[selectedPosition].length &&
      track[selectedPosition === "left" ? "right" : "left"].length
    ) {
      selectedPosition = selectedPosition === "left" ? "right" : "left";
    }

    const selectedColor =
      track[selectedPosition][
        Math.floor(Math.random() * track[selectedPosition].length)
      ];

    setCurrentPosition(selectedPosition);
    setCurrentColor(selectedColor);
    setSelectedAnswer(null);
    setQuestionTrack((prev) => ({
      ...prev,
      [selectedPosition]: prev[selectedPosition].filter(
        (color) => color !== selectedColor
      ),
    }));
  };

  return (
    <div>
      <h1 className="mb-4 text-center text-3xl font-bold">Quizz Color Pair</h1>
      <div>
        <div className="flex items-center gap-2 text-2xl">
          What color is on the{" "}
          <span className="font-bold text-red-700 uppercase">
            {currentPosition}
          </span>{" "}
          of{" "}
          <span
            className={cn(
              "inline-block h-10 w-20 rounded",
              COLORS_MAP[currentColor]
            )}
          />
          ?
        </div>

        <div className="mt-8 mb-4 flex gap-20">
          {answerOptions.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedAnswer(color)}
              className={cn(
                "relative h-10 w-20 rounded-sm transition-all",
                COLORS_MAP[color],
                {
                  "after:pointer-events-none after:absolute after:-inset-2 after:rounded-xl after:border-2":
                    selectedAnswer === color,
                },
                {
                  "after:border-green-500":
                    selectedAnswer === color && color === correctAnswer,
                },
                {
                  "after:border-red-500":
                    selectedAnswer === color && color !== correctAnswer,
                }
              )}
            />
          ))}
        </div>

        <button
          className="float-end mt-4 cursor-pointer rounded bg-gray-600 px-4 py-2 font-bold text-white"
          onClick={handleNextQuestion}
        >
          Next question
        </button>
      </div>
    </div>
  );
};

export default Quizz;
