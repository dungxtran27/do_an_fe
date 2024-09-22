import { FaChartPie } from "react-icons/fa6";
import { FaTasks, FaRegCalendarAlt } from "react-icons/fa";
import { FaBookJournalWhills } from "react-icons/fa6";
export const DefaultRoutes = [
  {
    route: "/projectOverview",
    page: "Project Overview",
    icon: <FaChartPie size={26}/>,
  },
  {
    route: "/dashboard",
    page: "DashBoard",
    icon: <FaTasks size={26}/>,
  },
  {
    route: "/class",
    page: "Class",
    icon: <FaBookJournalWhills size={26} />,
  },
  {
    route: "/timeline",
    page: "Timeline",
    icon: <FaRegCalendarAlt size={26} />,
  },
];
