import type { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router";

import Header from "@/components/Header";

const MainLayout: FC<PropsWithChildren> = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-200">
      <Header />
      <div className="my-4 flex flex-1 justify-center md:my-0 md:items-center">
        <div className="w-full max-w-[calc(100%-2rem)] rounded-lg bg-white p-8 shadow-md md:max-w-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
