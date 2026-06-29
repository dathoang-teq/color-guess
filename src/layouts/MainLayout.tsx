import type { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router";

import Header from "@/components/Header";

const MainLayout: FC<PropsWithChildren> = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-200">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="w-200 rounded-lg bg-white p-8 shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
