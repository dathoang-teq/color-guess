import type { FC, PropsWithChildren } from "react";
import { Outlet, useLocation } from "react-router";

import Header from "@/components/Header";
import { cn } from "@/utils/functions";

const MainLayout: FC<PropsWithChildren> = () => {
  const { pathname } = useLocation();
  const isGuessBackColor = pathname === "/guess-back-color";

  return (
    <div className="flex min-h-dvh flex-col bg-gray-200">
      <Header />
      <div className="my-4 flex flex-1 justify-center md:my-0 md:items-center">
        <div
          className={cn(
            "w-full max-w-[calc(100%-2rem)] rounded-lg p-8 shadow-md md:max-w-200",
            isGuessBackColor ? "bg-gray-400" : "bg-white"
          )}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
