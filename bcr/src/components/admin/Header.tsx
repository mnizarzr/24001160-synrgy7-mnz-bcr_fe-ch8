import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Flex,
  Layout,
  Dropdown,
  Space,
  message,
  MenuProps,
  theme,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderNav: React.FC = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "user-logout-link",
      label: "Logout",
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        message.open({
          type: "loading",
          content: "Signing you out",
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
    },
  ];

  return (
    <Header>
      <Space>
        
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Flex style={{ cursor: "pointer" }} align="center">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <h6 style={{ color: "white", margin: 0, marginLeft: "12px" }}>
              Unis Badri
            </h6>
          </Flex>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default HeaderNav;
