import React, { ReactNode } from "react";
import SideBar from "../component/common/SideBar";
import Header from "../component/common/Header";

interface LayoutProps {
  children: ReactNode;
}
const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex items-stretch">
      <SideBar />
      <div className="flex-col flex flex-grow h-screen">
        <Header />
        <div className="flex-1 bg-backgroundPrimary w-full overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};
export default DefaultLayout;
