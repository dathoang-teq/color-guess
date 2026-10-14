import { COLORS_MAP } from "@/utils/constants";

export const COLOR_COMBINATION_TOP_RIGHT = [
  // white on top
  {
    top: COLORS_MAP.white,
    right: COLORS_MAP.green,
    front: COLORS_MAP.black,
    back: COLORS_MAP.red,
  },
  {
    top: COLORS_MAP.white,
    right: COLORS_MAP.blue,
    front: COLORS_MAP.black,
    back: COLORS_MAP.orange,
  },
  {
    top: COLORS_MAP.white,
    right: COLORS_MAP.red,
    front: COLORS_MAP.black,
    back: COLORS_MAP.blue,
  },
  {
    top: COLORS_MAP.white,
    right: COLORS_MAP.orange,
    front: COLORS_MAP.black,
    back: COLORS_MAP.green,
  },

  // white on the side
  {
    top: COLORS_MAP.green,
    right: COLORS_MAP.white,
    front: COLORS_MAP.black,
    back: COLORS_MAP.orange,
  },
  {
    top: COLORS_MAP.blue,
    right: COLORS_MAP.white,
    front: COLORS_MAP.black,
    back: COLORS_MAP.red,
  },
  {
    top: COLORS_MAP.red,
    right: COLORS_MAP.white,
    front: COLORS_MAP.black,
    back: COLORS_MAP.green,
  },
  {
    top: COLORS_MAP.orange,
    right: COLORS_MAP.white,
    front: COLORS_MAP.black,
    back: COLORS_MAP.blue,
  },

  // white on the back
  {
    top: COLORS_MAP.green,
    right: COLORS_MAP.red,
    front: COLORS_MAP.black,
    back: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.blue,
    right: COLORS_MAP.orange,
    front: COLORS_MAP.black,
    back: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.red,
    right: COLORS_MAP.blue,
    front: COLORS_MAP.black,
    back: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.orange,
    right: COLORS_MAP.green,
    front: COLORS_MAP.black,
    back: COLORS_MAP.white,
  },

  // yellow on the back
  {
    top: COLORS_MAP.green,
    right: COLORS_MAP.orange,
    front: COLORS_MAP.black,
    back: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.blue,
    right: COLORS_MAP.red,
    front: COLORS_MAP.black,
    back: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.red,
    right: COLORS_MAP.green,
    front: COLORS_MAP.black,
    back: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.orange,
    right: COLORS_MAP.blue,
    front: COLORS_MAP.black,
    back: COLORS_MAP.yellow,
  },
];

// Same corners as TOP_RIGHT seen from the left: top and side colors swap, front stays hidden
export const COLOR_COMBINATION_TOP_LEFT = [
  // white on top
  {
    top: COLORS_MAP.white,
    left: COLORS_MAP.green,
    front: COLORS_MAP.black,
    back: COLORS_MAP.orange,
  },
  {
    top: COLORS_MAP.white,
    left: COLORS_MAP.blue,
    front: COLORS_MAP.black,
    back: COLORS_MAP.red,
  },
  {
    top: COLORS_MAP.white,
    left: COLORS_MAP.red,
    front: COLORS_MAP.black,
    back: COLORS_MAP.green,
  },
  {
    top: COLORS_MAP.white,
    left: COLORS_MAP.orange,
    front: COLORS_MAP.black,
    back: COLORS_MAP.blue,
  },

  // white on the side
  {
    top: COLORS_MAP.green,
    left: COLORS_MAP.white,
    front: COLORS_MAP.black,
    back: COLORS_MAP.red,
  },
  {
    top: COLORS_MAP.blue,
    left: COLORS_MAP.white,
    front: COLORS_MAP.black,
    back: COLORS_MAP.orange,
  },
  {
    top: COLORS_MAP.red,
    left: COLORS_MAP.white,
    front: COLORS_MAP.black,
    back: COLORS_MAP.blue,
  },
  {
    top: COLORS_MAP.orange,
    left: COLORS_MAP.white,
    front: COLORS_MAP.black,
    back: COLORS_MAP.green,
  },

  // white on the back
  {
    top: COLORS_MAP.red,
    left: COLORS_MAP.green,
    front: COLORS_MAP.black,
    back: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.orange,
    left: COLORS_MAP.blue,
    front: COLORS_MAP.black,
    back: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.blue,
    left: COLORS_MAP.red,
    front: COLORS_MAP.black,
    back: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.green,
    left: COLORS_MAP.orange,
    front: COLORS_MAP.black,
    back: COLORS_MAP.white,
  },

  // yellow on the back
  {
    top: COLORS_MAP.orange,
    left: COLORS_MAP.green,
    front: COLORS_MAP.black,
    back: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.red,
    left: COLORS_MAP.blue,
    front: COLORS_MAP.black,
    back: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.green,
    left: COLORS_MAP.red,
    front: COLORS_MAP.black,
    back: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.blue,
    left: COLORS_MAP.orange,
    front: COLORS_MAP.black,
    back: COLORS_MAP.yellow,
  },
];

// Same corners as TOP_RIGHT with the hidden color moved to the top: right/front show the old top/right colors
export const COLOR_COMBINATION_BOTTOM_RIGHT = [
  // white on the side
  {
    top: COLORS_MAP.black,
    right: COLORS_MAP.white,
    front: COLORS_MAP.green,
    bottom: COLORS_MAP.red,
  },
  {
    top: COLORS_MAP.black,
    right: COLORS_MAP.white,
    front: COLORS_MAP.blue,
    bottom: COLORS_MAP.orange,
  },
  {
    top: COLORS_MAP.black,
    right: COLORS_MAP.white,
    front: COLORS_MAP.red,
    bottom: COLORS_MAP.blue,
  },
  {
    top: COLORS_MAP.black,
    right: COLORS_MAP.white,
    front: COLORS_MAP.orange,
    bottom: COLORS_MAP.green,
  },

  // white on the front
  {
    top: COLORS_MAP.black,
    right: COLORS_MAP.green,
    front: COLORS_MAP.white,
    bottom: COLORS_MAP.orange,
  },
  {
    top: COLORS_MAP.black,
    right: COLORS_MAP.blue,
    front: COLORS_MAP.white,
    bottom: COLORS_MAP.red,
  },
  {
    top: COLORS_MAP.black,
    right: COLORS_MAP.red,
    front: COLORS_MAP.white,
    bottom: COLORS_MAP.green,
  },
  {
    top: COLORS_MAP.black,
    right: COLORS_MAP.orange,
    front: COLORS_MAP.white,
    bottom: COLORS_MAP.blue,
  },

  // white on the bottom
  {
    top: COLORS_MAP.black,
    front: COLORS_MAP.red,
    right: COLORS_MAP.green,
    bottom: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.black,
    front: COLORS_MAP.orange,
    right: COLORS_MAP.blue,
    bottom: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.black,
    front: COLORS_MAP.blue,
    right: COLORS_MAP.red,
    bottom: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.black,
    front: COLORS_MAP.green,
    right: COLORS_MAP.orange,
    bottom: COLORS_MAP.white,
  },

  // yellow on the bottom
  {
    top: COLORS_MAP.black,
    front: COLORS_MAP.orange,
    right: COLORS_MAP.green,
    bottom: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.black,
    front: COLORS_MAP.red,
    right: COLORS_MAP.blue,
    bottom: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.black,
    front: COLORS_MAP.green,
    right: COLORS_MAP.red,
    bottom: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.black,
    front: COLORS_MAP.blue,
    right: COLORS_MAP.orange,
    bottom: COLORS_MAP.yellow,
  },
];

// Same corners as TOP_LEFT with the hidden color moved to the top: front/left show the old left/top colors
export const COLOR_COMBINATION_BOTTOM_LEFT = [
  // white on the side
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.white,
    front: COLORS_MAP.green,
    bottom: COLORS_MAP.orange,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.white,
    front: COLORS_MAP.blue,
    bottom: COLORS_MAP.red,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.white,
    front: COLORS_MAP.red,
    bottom: COLORS_MAP.green,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.white,
    front: COLORS_MAP.orange,
    bottom: COLORS_MAP.blue,
  },

  // white on the front
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.green,
    front: COLORS_MAP.white,
    bottom: COLORS_MAP.red,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.blue,
    front: COLORS_MAP.white,
    bottom: COLORS_MAP.orange,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.red,
    front: COLORS_MAP.white,
    bottom: COLORS_MAP.blue,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.orange,
    front: COLORS_MAP.white,
    bottom: COLORS_MAP.green,
  },

  // white on the bottom
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.red,
    front: COLORS_MAP.green,
    bottom: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.orange,
    front: COLORS_MAP.blue,
    bottom: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.blue,
    front: COLORS_MAP.red,
    bottom: COLORS_MAP.white,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.green,
    front: COLORS_MAP.orange,
    bottom: COLORS_MAP.white,
  },

  // yellow on the bottom
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.orange,
    front: COLORS_MAP.green,
    bottom: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.red,
    front: COLORS_MAP.blue,
    bottom: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.green,
    front: COLORS_MAP.red,
    bottom: COLORS_MAP.yellow,
  },
  {
    top: COLORS_MAP.black,
    left: COLORS_MAP.blue,
    front: COLORS_MAP.orange,
    bottom: COLORS_MAP.yellow,
  },
];
