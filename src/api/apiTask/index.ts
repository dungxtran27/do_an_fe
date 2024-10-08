import axios from "../../utils/axiosUtil";

// Define types for task-related data
interface Task {
  taskType: string;
  taskName: string;
  description: string;
  attachment?: string;
  status: string;
  assignee: string;
  createdBy?: string;
  group: string;
  classwork: string;
  timeblock: string;
  dueDate?: Date;
  parentTask?: string;
  childTasks?: string[];
}

interface TaskResponse {
  status: number;
  data: Task;
}
interface CreateTaskData {
    taskName: string;
    description: string;
    assignee: string;
    dueDate?: Date;
    attachment?: string;
    parentTask?: string;
    // group?: string;
  }

export const taskApi = {
  getTaskDetail: (taskId: string): Promise<TaskResponse> => {
    return axios.get(`/api/task/${taskId}`);
  },

  updateTask: (taskId: string, updateData: Partial<Task>): Promise<TaskResponse> => {
    return axios.put(`/api/task/${taskId}`, updateData);
  },

  getTasksByGroup: (groupId: string, filters?: Record<string, any>): Promise<{ data: Task[] }> => {
    const queryString = new URLSearchParams(filters).toString();
    return axios.get(`/api/task/viewTaskByGroup/${groupId}?${queryString}`);
  },

  createTask: (taskData: CreateTaskData): Promise<TaskResponse> => {
    return axios.post(`/api/task/create`, taskData);
  },

  
};
