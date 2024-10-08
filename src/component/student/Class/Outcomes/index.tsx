import classNames from "classnames";
import styles from "./styles.module.scss";
import dayjs from "dayjs";
import { useState } from "react";
import { Checkbox, Divider, message, Tooltip, UploadProps } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { TiAttachment } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
const outcomeList = [
  {
    dueDate: "2024-09-05T12:34:56.789Z",
    startDate: "2024-09-01T12:34:56.789Z",
    status: "Graded",
    grade: 9,
    name: "Build physical product/service",
    gradingCriteria: ["demo", "demo", "demo"],
    statusColor: "#f87171",
    attachment:
      "https://e0.pxfuel.com/wallpapers/744/1020/desktop-wallpaper-aurora-running-with-the-wolves-official-audio-wolf-aurora.jpg",
  },
  {
    dueDate: "2024-10-05T12:34:56.789Z",
    startDate: "2024-10-01T12:34:56.789Z",
    status: "Not submitted",
    grade: null,
    name: "Build physical product/service 2",
    gradingCriteria: ["demo", "demo", "demo"],
    isActive: true,
    statusColor: "#38bdf8",
    // attachment:
    //   "https://e0.pxfuel.com/wallpapers/744/1020/desktop-wallpaper-aurora-running-with-the-wolves-official-audio-wolf-aurora.jpg",
  },
  {
    dueDate: "2024-11-05T12:34:56.789Z",
    startDate: "2024-11-01T12:34:56.789Z",
    status: "Not yet",
    grade: null,
    name: "Build physical product/service",
    gradingCriteria: ["demo", "demo", "demo"],
    statusColor: "#fbbf24",
    // attachment: "https://e0.pxfuel.com/wallpapers/744/1020/desktop-wallpaper-aurora-running-with-the-wolves-official-audio-wolf-aurora.jpg"
  },
];
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam mollis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris diam lacus, elementum nec pulvinar nec, aliquet et urna. Nullam ac vulputate lectus. Curabitur ut posuere nisi. In tellus mauris, auctor in lobortis volutpat, ultricies vitae sapien. Morbi vel dapibus justo.";
const List = ({ setViewingOutcome }: { setViewingOutcome: any }) => {
  const getOutcomeStyling = (
    dueDate: string,
    status: string,
    isActive: boolean | undefined,
    grade: number | null
  ) => {
    if (isActive && dayjs().isAfter(dueDate) && status === "Not submitted") {
      return styles.overdueOutcome;
    }
    if (isActive && !grade && status === "Submitted") {
      return styles.processingOutcome;
    }
    if (isActive && !grade && status === "Not submitted") {
      return styles.unSubmittedActiveOutcome;
    }
    if (!!grade && status === "Graded") {
      return styles.doneOutcome;
    }
  };

  return (
    <div className="w-full">
      <div className={`w-full grid grid-cols-${outcomeList.length} gap-5`}>
        {outcomeList.map((oc, index) => (
          <div
            // key={index}
            className={classNames(
              "border border-black/20 h-40 rounded-md shadow-md px-2 pt-2 cursor-pointer",
              !oc.isActive && "opacity-40",
              getOutcomeStyling(oc.dueDate, oc.status, oc.isActive, oc.grade)
            )}
            onClick={() => setViewingOutcome(oc)}
          >
            <div className="flex items-center py-2 justify-between font-semibold h-1/5 ">
              <div className="flex items-center gap-3">
                <span
                  className={`w-5 aspect-square rounded-full ${
                    oc.isActive ? "bg-[#4ade80]" : "bg-[#facc15]"
                  }`}
                ></span>
                <span>Outcome {index + 1}</span>
              </div>
              <span
                className={`${
                  oc.isActive &&
                  oc.status === "Not submitted" &&
                  dayjs().isAfter(oc.dueDate)
                    ? "text-red-500"
                    : ""
                }`}
              >
                {dayjs(oc.startDate).format("DD/MM")} -{" "}
                {dayjs(oc.dueDate).format("DD/MM/YYYY")}
              </span>
            </div>
            <div className="flex flex-col justify-between h-3/5">
              <div>
                <span className="text-[17px] font-semibold">{oc.name}</span>
                <span className="line-clamp-2">{lorem}</span>
              </div>
              <span className="w-11/12 h-[1px] bg-black/10 mx-auto"></span>
            </div>
            <div className="text-right h-1/5">
              {oc.grade ? `Grade: ${oc.grade}` : oc.status}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  // onDrop(e) {
  //   console.log('Dropped files', e.dataTransfer.files);
  // },
};
const OutcomeDetail = ({ oc }: { oc: any }) => {
  return (
    <div className="bg-white border border-primary/30 rounded-md w-full p-3">
      <div className="flex items-center gap-3">
        <div className="bg-green-400 rounded-full h-5 w-5"></div>
        <span className="text-lg font-semibold">{oc.name}</span>
      </div>
      <div>
        <span>{lorem}</span>
        <div className="pt-5">
          <div className="font-medium">Grading Criteria</div>
          <div className="flex flex-col gap-2 p-3">
            {oc.gradingCriteria.map((gc: any) => (
              <Checkbox checked>{gc}</Checkbox>
            ))}
          </div>
        </div>
        <Divider variant="dashed" style={{ borderColor: "black" }} dashed />
        <span className="font-medium">Submission</span>
        <div className="pt-3">
          {oc.attachment ? (
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <TiAttachment className="text-sky-500" size={20} />
                <span className="text-sky-500">
                  Outcome 1: Maneki-chan.docx{" "}
                </span>
                <Tooltip title="Edit" className="cursor-pointer">
                  <CiEdit size={20} className="hover:text-sky-500" />
                </Tooltip>
              </div>
              <div className="flex flex-col text-black/50">
                <span>Submitted by: Chu Quý Sơn</span>
                <span className="font-[10px]">
                  {dayjs("2024-10-01T12:34:56.789Z").format(
                    "DD/MM/YYYY - HH:MM a"
                  )}
                </span>
              </div>
            </div>
          ) : (
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          )}
        </div>
      </div>
    </div>
  );
};
const Outcomes = () => {
  const [viewingOutcome, setViewingOutcome] = useState(
    outcomeList.find((oc) => oc.isActive)
  );
  return (
    <div className="flex flex-col gap-5 pb-10">
      <List setViewingOutcome={setViewingOutcome} />
      <OutcomeDetail oc={viewingOutcome} />
    </div>
  );
};
export default Outcomes;
