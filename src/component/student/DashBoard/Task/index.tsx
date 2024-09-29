import { useState } from "react";
import { TASK_FILTERS, TASK_STATUS_FILTER } from "../../../../utils/const";
import { Button, Form, Input, Select, SelectProps, Tooltip } from "antd";
import styles from "./styles.module.scss";
import FormItem from "antd/es/form/FormItem";
import { SearchOutlined } from "@ant-design/icons";
import { FaFileExcel } from "react-icons/fa6";
import TaskBoard from "./TaskBoard";
import classNames from "classnames";
import CreateTask from "./CreateTask";
type LabelRender = SelectProps["labelRender"];
const Task = () => {
  const [status, setStatus] = useState<string>("All");
  const [memberSearch, setMemberSearch] = useState<string>("");
  const [openCreateTask, setOpenCreateTask] = useState<boolean>(false);
  const statusFilter = () => {
    return (
      <div className="flex items-center text gap-5">
        <span className="text-[16px] font-semibold">Status: </span>
        <span className="flex gap-3">
          {TASK_STATUS_FILTER.map((s) => (
            <span
              key={s.value}
              className={`${
                status === s.value ? "text-white bg-primary" : ``
              } px-5 py-1 text-center rounded-full cursor-pointer`}
              //   style={{
              //     backgroundColor: status === s.value ? s.color : "transparent",
              //     color: status === s.value ? "white" : s.color,
              //   }}
              onClick={() => {
                setStatus(s.value);
              }}
            >
              {s.value}
            </span>
          ))}
        </span>
      </div>
    );
  };
  const [form] = Form.useForm();
  // const taskType = Form.useWatch(TASK_FILTERS.taskType, form);
  // const assignee = Form.useWatch(TASK_FILTERS.assignee, form);
  const timeBlock = Form.useWatch(TASK_FILTERS.timeBlock, form);
  // const searchKey = Form.useWatch(TASK_FILTERS.searchKey, form);

  const taskFilter = () => {
    const members = [
      { value: "chuson", label: "Chu Son" },
      { value: "trandung", label: "trandung" },
      { value: "huy", label: "huy" },
      { value: "hieu", label: "hieu" },
      { value: "thang", label: "thang" },
    ];
    const timeblocks = [
      {
        label: "Outcome 1",
        value: "outcome1",
        color: "#fb923c",
      },
      {
        label: "Outcome 2",
        value: "outcome2",
        color: "#f472b6",
      },
      {
        label: "Outcome 3",
        value: "outcome3",
        color: "#60a5fa",
      },
    ];

    const labelRender: LabelRender = (props) => {
      const selectedTimeBlockColor = timeblocks.find(
        (tb) => tb.value === timeBlock
      )?.color;
      const { label } = props;
      if (label) {
        return (
          <div className="flex items-center gap-3 rounded-md h-full w-full">
            <span
              className="w-5 aspect-square rounded-full"
              style={{ backgroundColor: selectedTimeBlockColor }}
            ></span>
            <Tooltip title={`${label}(28/09/2024 - 23/10/2024)`}>
              <span className="truncate max-w-[100px]">
                {label}(28/09/2024 - 23/10/2024)
              </span>
            </Tooltip>
          </div>
        );
      }
      return <span>No option match</span>;
    };
    return (
      <Form
        className="flex items-center gap-4 mt-5"
        form={form}
        layout="vertical"
      >
        <FormItem name={TASK_FILTERS.taskType} label={"Task type"}>
          <Select
            size="middle"
            style={{ width: 180 }}
            allowClear
            options={[
              { value: "classwork", label: "Class work" },
              { value: "grouptask", label: "Group task" },
            ]}
          />
        </FormItem>
        <FormItem name={TASK_FILTERS.assignee} label={"Assignee"}>
          <Select
            size="middle"
            style={{ width: 280 }}
            options={members}
            showSearch
            mode="multiple"
            maxTagCount={"responsive"}
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
        </FormItem>
        <FormItem name={TASK_FILTERS.timeBlock} label={"Time block"}>
          <Select
            allowClear
            size="middle"
            style={{ width: 180 }}
            options={timeblocks}
            optionRender={(op) => (
              <div className="flex items-center gap-3 rounded-md h-full w-full">
                <span
                  className="w-5 aspect-square rounded-full"
                  style={{ backgroundColor: op.data.color }}
                ></span>
                <span>{op.data.label}</span>
              </div>
            )}
            labelRender={labelRender}
          />
        </FormItem>
        <FormItem name={TASK_FILTERS.searchKey} label={"Search"}>
          <Input
            suffix={<SearchOutlined />}
            placeholder="Search task by code or name"
            style={{ width: 230 }}
          />
        </FormItem>
      </Form>
    );
  };
  const taskBoardData = [
    {
      key: "1",
      taskType: "Group Task",
      taskKey: "SE-01",
      name: "Tạo timeline cho marketing",
      assignee: {
        color: "#e11d48",
        name: "Sơn Chu",
      },
      status: "In Progress",
      timeblock: {
        color: "#a3e635",
        name: "Project init",
      },
      dueDate: new Date(),
    },
    {
      key: "2",
      taskType: "Class Task",
      taskKey: "SE-02",
      name: "Outcome 2",
      assignee: {
        color: "#fb923c",
        name: "Trần Dũng",
      },
      status: "Need Review",
      timeblock: {
        color: "#fb923c",
        name: "Outcome 2",
      },
    },
    // {
    //   key: '1',
    //   taskType: 'Group Task',
    //   taskKey: 'SE-02',
    //   name: 'Tạo timeline cho marketing',
    //   assignee: {
    //     color: '#e11d48',
    //     name: 'Sơn Chu'
    //   },
    //   status: 'In Progress',
    //   timeblock: {
    //     color: '#a3e635',
    //     name: 'Project init'
    //   },
    //   dueDate: new Date(),
    // }
  ];
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
      <CreateTask open={openCreateTask} setOpen={setOpenCreateTask} />
    </div>
  );
};
export default Task;
