import React from "react";
import { Row, Card, Typography, Tooltip } from "antd";

const { Title } = Typography;

const longText =
  "Đây là nội dung rất dài và dcu mãi k sửa đc nên k sửa nữa tối họp sửa sau";
const CustomerJourneyMap: React.FC = () => {
  return (
    <div className="bg-white p-4 w-full rounded-lg mb-6">
      <Title level={4} className="text-xl font-bold mb-5">
        Customer Journey Map
      </Title>
      <Row className="w-full">
        <Card
          className="text-center font-semibold w-48 m-0.5"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          STAGE
        </Card>
        <Card
          className="text-center font-semibold w-48 m-0.5"
          style={{ backgroundColor: "#B2E5C6" }}
        >
          Awareness
        </Card>
        <Card
          className="text-center font-semibold w-48 m-0.5"
          style={{ backgroundColor: "#C0E3AF" }}
        >
          Consideration
        </Card>
        <Card
          className="text-center font-semibold w-48 m-0.5"
          style={{ backgroundColor: "#A1E1D4" }}
        >
          Decision
        </Card>
        <Card
          className="text-center font-semibold w-48 m-0.5"
          style={{ backgroundColor: "#A0C4C5" }}
        >
          Service
        </Card>
        <Card
          className="text-center font-semibold w-48 m-0.5"
          style={{ backgroundColor: "#CE93D0" }}
        >
          Loyattly
        </Card>
      </Row>
      <Row className="w-full">
        <Card
          className="text-center uppercase font-semibold h-20 shadow items-center w-48 m-0.5"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          Customer Actions
        </Card>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84b597"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-2">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#92b382"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#51ad9d"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84acad"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#a779a8"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
      </Row>
      <Row className="w-full">
        <Card
          className="text-center uppercase font-semibold h-20 shadow items-center w-48 m-0.5"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          Touchpoints
        </Card>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84b597"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#92b382"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#51ad9d"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84acad"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#a779a8"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
      </Row>
      <Row className="w-full">
        <Card
          className="text-center uppercase font-semibold h-20 shadow items-center w-48 m-0.5"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          Customer experience
        </Card>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84b597"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#92b382"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#51ad9d"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84acad"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#a779a8"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
      </Row>
      <Row className="w-full">
        <Card
          className="text-center uppercase font-semibold h-20 shadow items-center w-48 m-0.5"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          KPIS
        </Card>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84b597"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#92b382"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#51ad9d"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84acad"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#a779a8"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
      </Row>
      <Row className="w-full">
        <Card
          className="text-center uppercase font-semibold h-20 shadow items-center w-48 m-0.5"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          Business goals
        </Card>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84b597"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#92b382"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#51ad9d"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84acad"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#a779a8"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
      </Row>
      <Row className="w-full">
          <Card
            className="text-center uppercase font-semibold h-20 shadow items-center w-48 m-0.5"
            style={{ backgroundColor: "#F3F4F6" }}
          >
            Team involved
          </Card>
          <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84b597"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#92b382"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#51ad9d"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#84acad"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
        <Tooltip
          overlayStyle={{
            maxWidth: "200px",
            whiteSpace: "normal",
            height: "auto",
          }}
          title={longText}
          placement="top"
          color="#a779a8"
        >
          <Card className="h-20 shadow w-48 m-0.5">
            <div className="line-clamp-1">{longText}</div>
          </Card>
        </Tooltip>
      </Row>
    </div>
  );
};

export default CustomerJourneyMap;
