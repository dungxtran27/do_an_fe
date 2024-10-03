import Report from "../component/student/DashBoard/Report";
import Task from "../component/student/DashBoard/Task";

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
export const CALENDAR_CONFIG = {
  personal: {
    colorName: "personal",
    lightColors: {
      main: "#f9d71c",
      container: "#fff5aa",
      onContainer: "#594800",
    },
    darkColors: {
      main: "#fff5c0",
      onContainer: "#fff5de",
      container: "#a29742",
    },
  },
  work: {
    colorName: "work",
    lightColors: {
      main: "#f91c45",
      container: "#ffd2dc",
      onContainer: "#59000d",
    },
    darkColors: {
      main: "#ffc0cc",
      onContainer: "#ffdee6",
      container: "#a24258",
    },
  },
  leisure: {
    colorName: "leisure",
    lightColors: {
      main: "#1cf9b0",
      container: "#dafff0",
      onContainer: "#004d3d",
    },
    darkColors: {
      main: "#c0fff5",
      onContainer: "#e6fff5",
      container: "#42a297",
    },
  },
  school: {
    colorName: "school",
    lightColors: {
      main: "#1c7df9",
      container: "#d2e7ff",
      onContainer: "#002859",
    },
    darkColors: {
      main: "#c0dfff",
      onContainer: "#dee6ff",
      container: "#426aa2",
    },
  },
};
