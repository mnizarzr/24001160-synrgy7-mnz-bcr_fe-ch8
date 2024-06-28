import { useAuth, useAuthDispatch } from "@/contexts/AuthContext";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Flex,
  Layout,
  Dropdown,
  Space,
  message,
  MenuProps,
  Input,
} from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const HeaderNav: React.FC = () => {
  const auth = useAuth();
  const dispatch = useAuthDispatch();
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

        localStorage.removeItem("user_token");
        dispatch({ type: "LOGOUT" });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
    },
  ];

  return (
    <Header
      style={{
        marginLeft: "200px",
        padding: "0 2rem 0 0",
        background: "rgba(255, 255, 255, .5)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 0 8px 2px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1,
        gap: 8,
        transition: "all .25s",
      }}
    >
      <Space>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Flex style={{ cursor: "pointer" }} align="center">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <h6 style={{ color: "black", margin: 0, marginLeft: "12px" }}>
              {auth?.name}
            </h6>
          </Flex>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default HeaderNav;
