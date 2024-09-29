import { Divider, AutoComplete, Input } from "antd";
import DefaultLayout from "../../../layout/DefaultLayout";
import TimeTable from "./TimeTable";
// import { useState } from "react";
// import type { AutoCompleteProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
const Timeline = () => {
  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  // const mockVal = (str: string, repeat = 1) => ({
  //   value: str.repeat(repeat),
  // });

  // const [value, setValue] = useState("");
  // const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  // const getPanelValue = (searchText: string) =>
  //   !searchText
  //     ? []
  //     : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  // const onSelect = (data: string) => {
  //   console.log("onSelect", data);
  // };

  // const onChange = (data: string) => {
  //   setValue(data);
  // };

  return (
    <DefaultLayout>
      <h2 className="pl-2 pt-2">Project TimeLine</h2>
      <Divider></Divider>

      <div className="flex justify-start items-center ju	">
        <div>
          <AutoComplete
            className="pl-3 rounded-full border-blue-500  "
            popupClassName="certain-category-search-dropdown"
            popupMatchSelectWidth={500}
            style={{ width: 250 }}
            options={options}
            size="large"
          >
            <Input.Search
              size="large"
              placeholder="input here"
              className="rounded-full" // Use `border-double` class if you want double borders
            />
          </AutoComplete>
        </div>

        <div>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomLeft"
            className="pl-5 mt-5"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Categories
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <TimeTable />
    </DefaultLayout>
  );
};
export default Timeline;
