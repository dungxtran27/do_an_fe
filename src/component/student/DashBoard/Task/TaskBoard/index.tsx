import { Select, Table, Tooltip } from "antd";
import dayjs from "dayjs";
import { TASK_STATUS_FILTER } from "../../../../../utils/const";
import { CiSquarePlus } from "react-icons/ci";
import { TaskBoardData } from "../../../../../model/taskBoard";
import React from "react";
// import { Link } from "react-router-dom";
interface TaskBoardProps {
  taskBoardData: TaskBoardData[];
  setOpenCreateTask: (open: boolean) => void;
}
const TaskBoard: React.FC<TaskBoardProps> = ({
  taskBoardData,
  setOpenCreateTask,
}) => {
  const labelRender = (status: string) => {
    const selectedTimeBlockColor = TASK_STATUS_FILTER.find(
      (tb) => tb.value === status
    )?.color;
    if (status) {
      return (
        <div className="flex items-center gap-3 rounded-md h-full w-full">
          <span
            className="w-5 aspect-square rounded-full"
            style={{ backgroundColor: selectedTimeBlockColor }}
          ></span>
          <Tooltip title={`${status}`}>
            <span className="truncate max-w-[100px]">{status}</span>
          </Tooltip>
        </div>
      );
    }
    return <span>No option match</span>;
  };
  const statusSelect = (status: string) => {
    return (
      <Select
        options={TASK_STATUS_FILTER.filter((t) => t.value !== "All")}
        size="middle"
        style={{ width: 150 }}
        optionRender={(op) => (
          <div className="flex items-center gap-3 rounded-md h-full w-full">
            <span
              className="w-5 aspect-square rounded-full"
              style={{ backgroundColor: op.data.color }}
            ></span>
            <span>{op.data.label}</span>
          </div>
        )}
        labelRender={() => (labelRender ? labelRender(status) : null)}
        defaultValue={status}
      />
    );
  };
  const dataSource = taskBoardData.map((tb) => {
    return {
      key: tb.key,
      taskType: tb.taskType,
      name: tb.name,
      assignee: (
        <div className="flex items-center gap-2 font-semibold">
          <span
            className="rounded-full w-7 text-center leading-7 text-white aspect-square"
            style={{ backgroundColor: tb?.assignee?.color }} // Inline dynamic style
          >
            SC
          </span>
          <span>{tb?.assignee?.name}</span>
        </div>
      ),
      status: statusSelect(tb?.status),
      dueDate: tb?.dueDate ? dayjs(tb?.dueDate).format("MMM D, YYYY") : "",
    };
  });
  const columns = [
    {
      title: "Task type",
      dataIndex: "taskType",
      key: "taskType",
      className: "w-1/6",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      className: "w-2/6",
      render: (text:string) => <strong className="hover:underline hover:text-sky-500 cursor-pointer">{text}</strong>,
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
      className: "w-1/6",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      className: "w-1/6",
    },
    {
      title: "Due date",
      dataIndex: "dueDate",
      key: "dueDate",
      className: "w-1/6",
    },
  ];
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      className="tableStriped"
      footer={() => (
        <div
          className="flex items-center gap-5 cursor-pointer"
          onClick={() => setOpenCreateTask(true)}
        >
          <CiSquarePlus size={20} />
          Create Task
        </div>
      )}
    />
  );
};
export default TaskBoard;
