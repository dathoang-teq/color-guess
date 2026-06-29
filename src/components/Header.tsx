import { Box } from "lucide-react";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-full bg-linear-to-r from-gray-400 to-gray-700 py-4 shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Box className="size-8 text-white" />
          <h1 className="text-3xl font-bold text-white">Color Guess</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
