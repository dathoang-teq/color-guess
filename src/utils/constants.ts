export const COLORS_MAP = {
  red: "bg-red-500",
  green: "bg-green-600",
  blue: "bg-blue-600",
  orange: "bg-orange-500",
  white: "bg-white",
  yellow: "bg-yellow-400",
  black: "bg-black",
};

export const COLORS = ["red", "blue", "orange", "green"];

export const COLOR_GROUP: Record<string, readonly string[]> = {
  red: ["green", "red", "blue"],
  blue: ["red", "blue", "orange"],
  orange: ["blue", "orange", "green"],
  green: ["orange", "green", "red"],
} as const;

export const COLOR_PAIR = {
  right: {
    red: "blue",
    blue: "orange",
    orange: "green",
    green: "red",
  },
  left: {
    red: "green",
    blue: "red",
    orange: "blue",
    green: "orange",
  },
};
