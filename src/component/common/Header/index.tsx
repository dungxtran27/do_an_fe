import classNames from "classnames";
import styles from "./style.module.scss";
import { Badge, Input } from "antd";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { SlBell } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { UserInfo } from "../../../model/auth";
// import { userInfo } from "../../../model/auth";
interface HeaderProps {
  user?: any;
}

const Header: React.FC<HeaderProps> = () => {
  const userInfo = useSelector(
    (state: RootState) => state.auth.userInfo
  ) as UserInfo | null;

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
      {userInfo ? (
        <div className="flex items-center gap-7">
          <Badge count={5}>
            <SlBell className="text-[20px]" />
          </Badge>
          <Badge count={10}>
            <IoMailOutline className="text-[25px]" />
          </Badge>
          <img
            src={userInfo?.account?.profilePicture}
            className={classNames(
              styles.avatar,
              "rounded-full border-[1px] border-backgroundSecondary bg-[#FFF0F6] object-cover object-center"
            )}
          />
          <span className="text-[14px] flex items-center gap-2">
            Hi {userInfo?.name} <FaChevronDown />
          </span>
        </div>
      ) : (
        <></>
      )}{" "}
    </div>
  );
};
export default Header;
