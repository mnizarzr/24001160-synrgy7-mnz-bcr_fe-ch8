import { CarOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Navigation One",
  },
  {
    key: "2",
    icon: <CarOutlined />,
    label: "Navigation Two",
  },
];

export default function Sidebar() {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <Sider
        style={{
          overflow: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "none",
          border: "none",
          transition: "all .2s",
        }}
      >
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1"]}
          mode="inline"
          items={items}
          theme="light"
        />
      </Sider>
    </>
  );
}
