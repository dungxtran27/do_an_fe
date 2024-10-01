import React, { useState } from "react";
import { Button, Upload } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  PlusOutlined,
  EditOutlined,
} from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Persona {
  description: string;
  imageUrl: string | null;
  editing: boolean;
}

const CustomerPersonas: React.FC = () => {
  const [personas, setPersonas] = useState<Persona[]>([
    { description: "Text here", imageUrl: null, editing: false },
    { description: "Text here", imageUrl: null, editing: false },
  ]);

  const handleInputChange = (index: number, value: string) => {
    const newPersonas = [...personas];
    newPersonas[index].description = value;
    setPersonas(newPersonas);
  };

  const toggleEditMode = (index: number) => {
    const newPersonas = [...personas];
    newPersonas[index].editing = !newPersonas[index].editing;
    setPersonas(newPersonas);
  };

  const handleImageUpload = (index: number, file: any) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newPersonas = [...personas];
      newPersonas[index].imageUrl = e.target?.result as string;
      setPersonas(newPersonas);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white p-5 rounded-lg mb-6">
      <h4 className="text-2xl font-bold mb-5">Customer Personas</h4>
      <div className="grid grid-cols-2 gap-6 mb-6">
        {personas.map((persona, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer bg-gray-200 overflow-hidden"
                onClick={() =>
                  document.getElementById(`upload-${index}`)?.click()
                }
              >
                {persona.imageUrl ? (
                  <img
                    src={persona.imageUrl}
                    alt="avatar"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <UserOutlined className="text-4xl" />
                )}
              </div>

              {persona.editing ? (
                <div className="ml-4 flex flex-col w-full">
                  <ReactQuill
                    value={persona.description}
                    onChange={(content) => handleInputChange(index, content)}
                    className="mb-2 w-full h-full"
                    style={{ height: "250px", width: "100%" }}
                  />
                  <Button type="primary" onClick={() => toggleEditMode(index)}>
                    Save
                  </Button>
                </div>
              ) : (
                <div className="ml-4 flex flex-col">
                  <div
                    className="p-2 rounded-lg border border-gray-400 mb-2 max-h-52 overflow-y-auto"
                    style={{ height: "100px", width: "400px" }}
                    dangerouslySetInnerHTML={{ __html: persona.description }}
                  ></div>
                  <Button
                    type="default"
                    onClick={() => toggleEditMode(index)}
                    icon={<EditOutlined />}
                  />
                </div>
              )}
            </div>

            <Upload
              id={`upload-${index}`}
              name="avatar"
              showUploadList={false}
              beforeUpload={(file) => {
                handleImageUpload(index, file);
                return false;
              }}
            >
              <Button icon={<UploadOutlined />} style={{ display: "none" }}>
                Upload Image
              </Button>
            </Upload>
          </div>
        ))}
      </div>
      <Button
        type="dashed"
        icon={<PlusOutlined />}
        size="large"
        className="flex items-center"
        onClick={() =>
          setPersonas([
            ...personas,
            { description: "Text here", imageUrl: null, editing: false },
          ])
        }
      >
        Create new
      </Button>
    </div>
  );
};

export default CustomerPersonas;
