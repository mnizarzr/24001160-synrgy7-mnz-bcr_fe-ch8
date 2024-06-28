import { Outlet } from "react-router-dom";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { Layout } from "antd";

export default function AdminDashboardLayout() {
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Sidebar />
        <Layout
          style={{
            background: "none",
          }}
        >
          <Header />
          <div style={{ paddingLeft: "200px", paddingTop: '30px' }}>
            <Outlet />
          </div>
        </Layout>
      </Layout>
    </>
  );
}
