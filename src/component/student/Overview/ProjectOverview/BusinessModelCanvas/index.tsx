import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

const BusinessModelCanvas: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col justify-center">
      <Title level={4} className="font-bold">
        Business Model Canvas
      </Title>
      <div className="w-full mt-5">
        <div className="justify-center flex flex-row">
          <Col span={4} className="mr-3">
            <Card className="bg-yellow-200 h-full">
              <p>Text</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className="bg-yellow-200 h-48 mb-4">
              <p>Text</p>
            </Card>
            <Card className="bg-yellow-200 h-48">
              <p>Text</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className="bg-purple-300 mr-3 ml-3 h-full flex flex-row justify-center items-center">
              <p>Text</p>
              <PlusOutlined />
              <p>Add content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className="bg-red-300 h-48 mb-4">
              <p>Text</p>
            </Card>
            <Card className="bg-red-300 h-48">
              <p>Text</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card className="bg-red-300 h-full ml-3">
              <p>Text</p>
            </Card>
          </Col>
        </div>
        <div className="justify-center flex flex-row mt-2">
          <Col span={10}>
            <Card className="bg-green-300 h-32 mr-2">
              <p>Text</p>
            </Card>
          </Col>
          <Col span={10}>
            <Card className="bg-green-300 h-32 ml-2">
              <p>Text</p>
            </Card>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelCanvas;
