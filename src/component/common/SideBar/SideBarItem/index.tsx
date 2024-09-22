import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface ItemProps {
  route: string;
  name: string;
  icon: ReactNode;
}
const SideBarItem: React.FC<ItemProps> = ({ route, name, icon }) => {
  const location = useLocation();
  return (
    <div className="w-full">
      <Link to={route}>
        <div
          className={`w-full flex items-center gap-7 text-black/55 text-[16px] font-[600] rounded-md h-[60px]  ${
            location?.pathname === route ? "bg-[#F7F0FF]" : ""
          }`}
        >
          <span className={`h-full w-[5px] ${ location?.pathname === route ? "bg-primary" : ""}`}></span>
          {icon}
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};
export default SideBarItem;
