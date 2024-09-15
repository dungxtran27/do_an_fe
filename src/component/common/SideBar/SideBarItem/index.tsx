import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ItemProps {
  route: string;
  name: string;
  icon: ReactNode;
}
const SideBarItem: React.FC<ItemProps> = ({ route, name, icon }) => {
  return (
    <div className="w-full">
      <Link to={route}>
        <div className="w-full flex items-center gap-3 text-black/55 text-[16px] font-[600]">
          {icon}
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};
export default SideBarItem;
