import { Select, Table, Tooltip } from "antd";
import dayjs from "dayjs";
import { TASK_STATUS_FILTER } from "../../../../../utils/const";
import { CiSquarePlus } from "react-icons/ci";
import { TaskBoardData } from "../../../../../model/taskBoard";
import React from "react";
import { Link } from "react-router-dom";
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
      taskKey: <Link className="hover:underline" to={`/taskDetail/${tb.taskKey}`}>{tb.taskKey}</Link>,
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
      timeblock: (
        <span
          className="rounded-md py-1 px-5 text-white"
          style={{ backgroundColor: tb?.timeblock?.color }}
        >
          {tb?.timeblock?.name}
        </span>
      ),
      dueDate: tb?.dueDate ? dayjs(tb?.dueDate).format("MMM D, YYYY") : "",
    };
  });

  //   const dataSource = [
  //     {
  //       key: "1",
  //       taskType: "Group task",
  //       taskKey: "SE01",
  //       name: "Tạo timeline marketing",
  //       assignee: (
  //         <div className="flex items-center gap-2 font-semibold">
  //           <span className="bg-[#f43f5e] rounded-full w-7 text-center leading-7 text-white aspect-square">
  //             SC
  //           </span>
  //           <span>Sơn Chu</span>
  //         </div>
  //       ),
  //       status: statusSelect("Need Review"),
  //       timeblock: (
  //         <span className="bg-lime-400 rounded-md py-1 px-5 text-white">
  //           Project init
  //         </span>
  //       ),
  //       dueDate: dayjs().format("MMM D, YYYY"),
  //     },
  //     {
  //       key: "2",
  //       taskType: "Class task",
  //       taskKey: "SE02",
  //       name: "Outcome 1",
  //       assignee: (
  //         <div className="flex items-center gap-2 font-semibold">
  //           <span className="bg-yellow-400 rounded-full w-7 text-center leading-7 text-white aspect-square">
  //             TD
  //           </span>
  //           <span>Trần Dũng</span>
  //         </div>
  //       ),
  //       status: statusSelect("In Progress"),
  //       timeblock: (
  //         <span className="bg-violet-400 rounded-md py-1 px-5 text-white">
  //           Outcome 1
  //         </span>
  //       ),
  //       dueDate: dayjs().format("MMM D, YYYY"),
  //     },
  //   ];

  const columns = [
    {
      title: "Task type",
      dataIndex: "taskType",
      key: "taskType",
    },
    {
      title: "Key",
      dataIndex: "taskKey",
      key: "taskKey",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Time block",
      dataIndex: "timeblock",
      key: "timeblock",
    },
    {
      title: "Due date",
      dataIndex: "dueDate",
      key: "dueDate",
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
