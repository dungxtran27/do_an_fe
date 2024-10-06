import classNames from "classnames";
import styles from "./style.module.scss";
import { IoIosSearch } from "react-icons/io";
import { Input } from "antd";
// import { userInfo } from "../../../model/auth";

const Header = () => {


  return (
    <div
      className={classNames(
        "border-backgroundSecondary shadow-md shadow-backgroundSecondary/40 z-10 flex items-center pl-[50px] justify-between pr-[40px]",
        styles.headerWrapper
      )}
    >
      <Input
        prefix={<IoIosSearch className="text-primary" />}
        size="large"
        className="rounded-full w-[450px] border-primary"
        placeholder="Search"
      />
    </div>
  );
};
export default Header;
