import { useEffect, useState } from "react";
import { Button, Form, Input, message, Select, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FaFileExcel } from "react-icons/fa6";
import classNames from "classnames";
import styles from "./styles.module.scss";
import TaskBoard from "./TaskBoard";
import CreateTask from "./CreateTask";
import { TASK_FILTERS, TASK_STATUS_FILTER } from "../../../../utils/const";
import { taskApi } from "../../../../api/apiTask";
import { studentApi } from "../../../../api/apiStudent";
import { Student } from "../../../../model/student";
import { AxiosError } from "axios";
import FormItem from "antd/es/form/FormItem";

const Task = () => {
  const [status, setStatus] = useState<string>("All");
  const [memberSearch, setMemberSearch] = useState<string>("");
  const [openCreateTask, setOpenCreateTask] = useState<boolean>(false);
  const [taskBoardData, setTaskBoardData] = useState<any[]>([]);
  const [groupId, setGroupId] = useState<string>("");
  const [members, setMembers] = useState<{ value: string; label: string }[]>([]);
  const [form] = Form.useForm();

  interface ErrorResponse {
    error: string;
  }
  const handleStatusFilter = (statusValue: string) => {
    setStatus(statusValue);
  };
  const [taskType, setTaskType] = useState<string | undefined>(undefined);
  const [assignees, setAssignees] = useState<string[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [allTasks, setAllTasks] = useState<any[]>([]); 

  useEffect(() => {
    const fetchedGroupId = "66fdfef2a92810edf9f145c8";
    setGroupId(fetchedGroupId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tasksResponse, membersResponse] = await Promise.all([
          taskApi.getTasksByGroup(groupId),
          studentApi.getStudentsInSameGroup(),
        ]);
        
        setAllTasks(tasksResponse.data);
        const students = membersResponse.data.data || [];
        const memberOptions = students.map((student: Student) => ({
          value: student._id,
          label: student.name,
        }));
        setMembers(memberOptions);

        filterTasks(tasksResponse.data);
      } catch (err) {
        const axiosError = err as AxiosError<ErrorResponse>;
        message.error(axiosError.response?.data?.error);
      }
    };

    if (groupId) {
      fetchData();
    }
  }, [groupId]);

  const filterTasks = (tasks: any[]) => {
    const filteredTasks = tasks.filter((task) => {
      const matchesType = taskType ? task.taskType === taskType : true;
      const matchesAssignee = assignees.length ? assignees.includes(task.assignee?._id) : true;
      const matchesSearchKey = searchKey ? task.taskName.toLowerCase().includes(searchKey.toLowerCase()) : true;
      const matchesStatus = status && status !== "All" ? task.status === status : true;

      return matchesType && matchesAssignee && matchesSearchKey && matchesStatus;
    }).map((task) => ({
      taskType: task.taskType,
      name: task.taskName,
      assignee: {
        name: task.assignee?.name
          ? task.assignee.name.split(' ').slice(0, 1).join(' ') + ' ' + task.assignee.name.split(' ').pop()
          : '',
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      },
      status: task.status,
      dueDate: task.dueDate ? new Date(task.dueDate) : null,
    }));

    setTaskBoardData(filteredTasks);
  };

  useEffect(() => {
    filterTasks(allTasks);
  }, [taskType, assignees, searchKey, status, allTasks]);

  const statusFilter = () => (
    <div className="flex items-center text gap-5">
      <span className="text-[16px] font-semibold">Status: </span>
      <span className="flex gap-3">
        {TASK_STATUS_FILTER.map((s) => (
          <span
            key={s.value}
            className={`${status === s.value ? "text-white bg-primary" : ''} px-5 py-1 text-center rounded-full cursor-pointer`}
            onClick={() => handleStatusFilter(s.value)}
          >
            {s.label} 
          </span>
        ))}
      </span>
    </div>
  );

  const taskFilter = () => (
    <Form className="flex items-center gap-4 mt-5" form={form} layout="vertical">
      <FormItem name={TASK_FILTERS.taskType} label={"Task type"}>
        <Select
          size="middle"
          style={{ width: 180 }}
          allowClear
          onChange={(value) => {
            setTaskType(value);
          }}
          options={[
            { value: "class work", label: "Class work" },
            { value: "group work", label: "Group task" },
          ]}
        />
      </FormItem>
      <Form.Item name={TASK_FILTERS.assignee} label={"Assignee"}>
        <Select
          size="middle"
          style={{ width: 280 }}
          options={members}
          showSearch
          mode="multiple"
          maxTagCount={"responsive"}
          value={assignees}
          onChange={(value) => {
            setAssignees(value);
          }}
          searchValue={memberSearch}
          onSearch={setMemberSearch}
          maxTagPlaceholder={(omittedValues) => (
            <Tooltip
              overlayStyle={{ pointerEvents: "none" }}
              title={omittedValues.map(({ label }) => label).join(", ")}
            >
              <span>+{omittedValues.length}</span>
            </Tooltip>
          )}
        />
      </Form.Item>
      <Form.Item name={TASK_FILTERS.searchKey} label={"Search"}>
        <Input
          suffix={<SearchOutlined />}
          placeholder="Search task by code or name"
          style={{ width: 230 }}
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
      </Form.Item>
    </Form>
  );

  return (
    <div>
      {statusFilter()}
      <div className="flex items-center justify-between">
        {taskFilter()}{" "}
        <Button>
          <FaFileExcel className="text-green-600 text-lg" />
          Export to excel
        </Button>
      </div>
      <div className={classNames(styles.taskBoard)}>
        <TaskBoard
          taskBoardData={taskBoardData}
          setOpenCreateTask={setOpenCreateTask}
        />
      </div>
      <CreateTask open={openCreateTask} setOpen={setOpenCreateTask}/>
    </div>
  );
};

export default Task;
