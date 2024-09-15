import classNames from "classnames";
import styles from "./styles.module.css";
import { DefaultRoutes } from "../../../utils/menu";
import { Menu } from "antd";
import SideBarItem from "./SideBarItem";
const MenuContent = () => {
  return (
    <div>
      {DefaultRoutes().map((route, index) => (
        <Menu.Item key={`${index}`}>
          <SideBarItem
            icon={route?.icon}
            name={route?.page}
            route={route?.route}
            key={index}
          />
        </Menu.Item>
      ))}
    </div>
  );
};
const SideBar = () => {
  return (
    <div className="h-screen w-[260px]">
      <div
        className={classNames(
          styles.logoWrapper,
          "border-r-[1px] z-10 border-b-[1px] border-backgroundSecondary flex items-center px-3 gap-3 font-medium text-lg"
        )}
      >
        <span className="aspect-square w-8 bg-backgroundSecondary rounded-[5px]"></span>{" "}
        FSpark
      </div>
      <div className="pt-8">
        <Menu defaultSelectedKeys={["0"]}>
          <MenuContent />
        </Menu>
      </div>
    </div>
  );
};
export default SideBar;
