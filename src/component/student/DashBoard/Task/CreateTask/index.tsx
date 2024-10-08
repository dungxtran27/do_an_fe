import {
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Select,
  UploadProps,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect, useState } from "react";
import { CREATE_TASK_FILTER } from "../../../../../utils/const";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { studentApi } from "../../../../../api/apiStudent";
import { taskApi } from "../../../../../api/apiTask";
import { AxiosError } from "axios";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
interface ErrorResponse {
  error: string;
}

const CreateTask: React.FC<ModalProps> = ({ open, setOpen }) => {
  const [members, setMembers] = useState<{ label: string; value: string }[]>([]);
  const [tasks, setTasks] = useState<{ label: string; value: string }[]>([]);
  const [form] = Form.useForm();

  const groupId = "66fdfef2a92810edf9f145c8";

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  useEffect(() => {
    const fetchMembersAndTasks = async () => {
      try {
        const membersResponse = await studentApi.getStudentsInSameGroup();        
        if (Array.isArray(membersResponse.data.data)) {
          const students = membersResponse.data.data.map((student: any) => ({
            value: student._id,
            label: student.name,
          }));
          setMembers(students);
        } else {
          message.error("Failed to fetch members. Please try again.");
        }
    
        const tasksResponse = await taskApi.getTasksByGroup(groupId);
        const parentTasks = tasksResponse.data.map((task: any) => ({
          value: task._id,
          label: task.taskName,
        }));
        setTasks(parentTasks);
      } catch (err) {
        const axiosError = err as AxiosError<ErrorResponse>;
        message.error(axiosError.response?.data?.error);
      }
    };
    
    if (open) {
      fetchMembersAndTasks();
    }
  }, [open, groupId]);
  const handleCreateTask = async () => {
    try {
      const values = await form.validateFields();
      const taskData = {
        taskName: values[CREATE_TASK_FILTER.taskName],
        description: values[CREATE_TASK_FILTER.description],
        assignee: values[CREATE_TASK_FILTER.assignee],
        dueDate: values[CREATE_TASK_FILTER.dueDate],
        attachment: values[CREATE_TASK_FILTER.attachment],
        parentTask: values[CREATE_TASK_FILTER.parentTask],
        group: groupId,
      };
      
      await taskApi.createTask(taskData);
      message.success("Task created successfully!");
      setOpen(false);
      form.resetFields();
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;
      message.error(axiosError.response?.data?.error);
    }
  };
  

  return (
    <Modal
      title="Create Task"
      open={open}
      onOk={handleCreateTask}
      onCancel={() => setOpen(false)}
      destroyOnClose
      width={700}
    >
      <Form
        form={form}
        layout="vertical"
        className="max-h-[500px] overflow-y-auto overflow-x-hidden"
      >
        <FormItem
          name={CREATE_TASK_FILTER.taskName}
          rules={[{ required: true, message: "Task name is required" }]}
          label={"Task name"}
        >
          <Input placeholder="Summary the task" />
        </FormItem>
        <FormItem name={CREATE_TASK_FILTER.description} label={"Description"}>
          <TextArea
            placeholder="Describe the task in depth"
            style={{ resize: "none", height: 120 }}
          />
        </FormItem>
        <div className="flex items-center justify-between">
          <FormItem
            name={CREATE_TASK_FILTER.assignee}
            rules={[{ required: true, message: "Assignee is required" }]}
            label={"Assignee"}
          >
            <Select style={{ width: 320 }} placeholder="Unassigned" options={members} />
          </FormItem>
          <FormItem name={CREATE_TASK_FILTER.dueDate} label={"Due date"}>
            <DatePicker style={{ width: 320 }} />
          </FormItem>
        </div>
        <FormItem name={CREATE_TASK_FILTER.attachment} label={"Attachment"}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </FormItem>
        <div className="flex items-center justify-between">
          <FormItem name={CREATE_TASK_FILTER.parentTask} label={"Parent task"}>
            <Select style={{ width: 320 }} placeholder="Unassigned" options={tasks} />
          </FormItem>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateTask;
