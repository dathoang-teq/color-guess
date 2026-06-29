import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...className: classNames.ArgumentArray) => {
  return twMerge(classNames(...className));
};
