import React, { useState } from "react";
import { Button, Card, Typography, Modal, Upload, message, Avatar } from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const { Title, Text } = Typography;

const CustomerPersonas: React.FC = () => {
  const [column2Infos, setColumn2Infos] = useState<string[]>([]);
  const [column3Infos, setColumn3Infos] = useState<string[]>([]);
  const [counter, setCounter] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingText, setEditingText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddNewInfo = () => {
    const newInfo = `New info added at ${new Date().toLocaleTimeString()}`;
    if (counter % 2 === 0) {
      setColumn2Infos((prevInfos) => [...prevInfos, newInfo]);
    } else {
      setColumn3Infos((prevInfos) => [...prevInfos, newInfo]);
    }
    setCounter((prevCounter) => prevCounter + 1);
  };

  const showModal = (text: string) => {
    setEditingText(text);
    setIsModalVisible(true);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditingText(e.target.value);
  };

  const handleSaveText = () => {
    message.success("Text has been updated!");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUploadChange = (info: any) => {
    const file = info.file.originFileObj;
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return false;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return false;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result as string);
    };
    return false;
  };

  return (
    <div className="flex bg-white rounded-lg flex-row p-4 space-y-4 space-x-4 mb-6">
      <div className="w-1/3">
        <Title level={4} className="text-xl font-bold">
          Customer Personas
        </Title>
        <Card className="shadow-lg mb-6">
          <div
            onClick={() => document.getElementById("upload-input")?.click()}
            style={{ cursor: "pointer" }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Artist"
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
            ) : (
              <Avatar
                className="w-full h-80 object-cover rounded-lg mb-4"
                icon={<UserOutlined style={{ fontSize: "100px" }} />}
              />
            )}
          </div>
          <Upload
            id="upload-input"
            showUploadList={false}
            onChange={handleUploadChange}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />} style={{ display: "none" }}>
              Upload
            </Button>
          </Upload>

          <Title
            level={3}
            onClick={() => showModal("Thông tin cá nhân")}
            style={{ cursor: "pointer" }}
          >
            Thông tin cá nhân
          </Title>
          <Text
            onClick={() => showModal("Đây là một cô gái da xanh")}
            style={{ cursor: "pointer" }}
          >
            Đây là một cô gái da xanh
          </Text>
        </Card>
        <Button type="primary" onClick={handleAddNewInfo}>
          Add New Info
        </Button>
      </div>

      <div className="w-1/3">
        <div className="grid grid-cols-1 gap-4">
          {column2Infos.map((index) => (
            <Card key={index} className="shadow-lg">
              <Title
                onClick={() => showModal("Thông tin cá nhân")}
                style={{ cursor: "pointer" }}
                level={4}
              >
                Tiêu Đề
              </Title>
              <Text
                onClick={() => showModal("Thông tin cá nhân")}
                style={{ cursor: "pointer" }}
              >
                Nội dung
              </Text>
            </Card>
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <div className="grid grid-cols-1 gap-4">
          {column3Infos.map((index) => (
            <Card key={index} className="shadow-lg">
              <Title level={4}>Tiêu Đề</Title>
              <Text>Nội dung</Text>
            </Card>
          ))}
        </div>
      </div>

      <Modal
        title="Chỉnh sửa thông tin"
        open={isModalVisible}
        onOk={handleSaveText}
        onCancel={handleCancel}
        style={{ top: 150, left: 50, right: 50 }}
      >
        <TextArea value={editingText} onChange={handleTextChange} rows={10} />
      </Modal>
    </div>
  );
};

export default CustomerPersonas;
