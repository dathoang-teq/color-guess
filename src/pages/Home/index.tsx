import type { FC } from "react";
import { useNavigate } from "react-router";

import { COLOR_GROUP, COLORS, COLORS_MAP } from "@/utils/constants";
import { cn } from "@/utils/functions";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-gray-800">
        Color pair with WHITE on top
      </h1>
      {COLORS.map((color) => {
        const colorWithType = color as keyof typeof COLORS_MAP;
        return (
          <div
            key={color}
            className="relative -left-2.5 mx-auto my-10 flex w-75 items-center justify-between gap-4"
          >
            <p className={cn("capitalize")}>{color}</p>
            <div className="flex items-center justify-center gap-2">
              {COLOR_GROUP[colorWithType].map((pairColor) => {
                const pairColorClass =
                  COLORS_MAP[pairColor as keyof typeof COLORS_MAP];
                return (
                  <div
                    key={pairColor}
                    className={cn("h-8 w-16", pairColorClass)}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}

      <button
        className="float-end block rounded bg-gray-600 px-4 py-2 text-white"
        onClick={() => {
          navigate("/quizz");
        }}
      >
        Start quizz
      </button>
    </div>
  );
};

export default Home;
