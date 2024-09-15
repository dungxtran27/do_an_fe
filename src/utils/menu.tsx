import { HiOutlineHome } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
export const DefaultRoutes = () => {
  return [
    {
      route: "/",
      page: "Home",
      icon: <HiOutlineHome className="text-[20px]" />,
    },
    {
      route: "/login",
      page: "Mail",
      icon: <IoMailOutline className="text-[20px]" />,
    },
    {
      route: "/signup",
      page: "Team",
      icon: <AiOutlineTeam className="text-[20px]" />,
    },
    {
      route: "/",
      page: "Mark",
      icon: <AiOutlineTeam className="text-[20px]" />,
    },
  ];
};
