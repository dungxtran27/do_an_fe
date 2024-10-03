import { useState } from "react";
import { Modal } from "antd";
interface TimeLineModalProps {
  open: boolean;
  closeModal: () => void;
}
const TimeLineModal: React.FC<TimeLineModalProps> = ({ open, closeModal }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      closeModal();
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default TimeLineModal;
