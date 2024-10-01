import Report from "../component/student/DashBoard/Report";
import Task from "../component/student/DashBoard/Task";
import Overview from "../component/student/Overview/ProjectOverview";
import Outcome from "../component/student/Overview/Outcome";

export const LOGIN_DATA = {
  email: "email",
  password: "password",
};
export const ROLE = {
  teacher: "TEACHER",
  student: "STUDENT",
  startUpDepartment: "START_UP_DEPARTMENT",
  admin: "ADMIN",
};
export const DASHBOARD_TABS = [
  { key: "task", label: "Task", children: <Task /> },
  { key: "report", label: "Report", children: <Report /> },
];
export const TASK_STATUS_FILTER = [
  {
    label: "All",
    value: "All",
    color: "#191919",
  },
  {
    label: "Done",
    value: "Done",
    color: "#84cc16",
  },
  {
    label: "Pending",
    value: "Pending",
    color: "#facc15",
  },
  {
    label: "In Progress",
    value: "In Progress",
    color: "#3b82f6",
  },
  {
    label: "Need Review",
    value: "Need Review",
    color: "#f43f5e",
  },
];
export const TASK_FILTERS = {
  taskType: "taskType",
  assignee: "assignee",
  timeBlock: "timeBlock",
  searchKey: "searchKey",
};
export const CREATE_TASK_FILTER = {
  taskName: "taskName",
  description: "description",
  assignee: "assignee",
  dueDate: "dueDate",
  attachment: "attachment",
  timeBlock: "timeBlock",
  parentTask: "parentTask",
};

export const OVERVIEW_TABS = [
  { key: "overview", label: "Overview", children: <Overview /> },
  { key: "outcome", label: "Outcome", children: <Outcome /> },
];