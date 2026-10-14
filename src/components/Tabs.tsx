import { useState } from "react";

import { cn } from "@/utils/functions";

interface Props<T extends string> {
  data: readonly T[];
  // falls back to the first item
  defaultValue?: T;
  onChange?: (value: T) => void;
}

const Tabs = <T extends string>({ data, defaultValue, onChange }: Props<T>) => {
  const [selected, setSelected] = useState<T>(defaultValue ?? data[0]);

  const handleChange = (value: T) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="flex w-full gap-4 md:w-auto">
      {data.map((value) => (
        <button
          key={value}
          type="button"
          className={cn(
            "w-full border-b-2 px-6 py-2 font-semibold text-white capitalize md:w-auto",
            selected === value ? "border-white" : "border-transparent"
          )}
          onClick={() => handleChange(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
