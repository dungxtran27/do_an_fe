import classNames from "classnames";
import styles from "./styles.module.scss";
import { DefaultRoutes } from "../../../utils/menu";
import SideBarItem from "./SideBarItem";
import { Image } from "antd";
import logo_header from "../../../../public/logo_header.png";
const MenuContent = () => {
  return (
    <div className={classNames(styles.customMenuItem, "flex flex-col gap-1")}>
      {DefaultRoutes.map((route, index) => (
        // <Menu.Item key={`${index}`}>
        <SideBarItem
          icon={route?.icon}
          name={route?.page}
          route={route?.route}
          key={index}
        />
        // </Menu.Item>
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
        <Image width={60} preview={false} src={logo_header} />
        FSpark
      </div>
      <div className="pt-5">
        {/* <Menu defaultSelectedKeys={["0"]} className=""> */}
        <MenuContent />
        {/* </Menu> */}
      </div>
    </div>
  );
};
export default SideBar;
