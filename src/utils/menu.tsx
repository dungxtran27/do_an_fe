import { HiOutlineHome } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
export const DefaultRoutes = [
  {
    route: "/projectOverview",
    page: "Project Overview",
    icon: <HiOutlineHome size={26}/>,
  },
  {
    route: "/dashboard",
    page: "DashBoard",
    icon: <IoMailOutline size={26}/>,
  },
  {
    route: "/class",
    page: "Class",
    icon: <AiOutlineTeam size={26} />,
  },
  {
    route: "/timeline",
    page: "Timeline",
    icon: <AiOutlineTeam size={26} />,
  },
];
