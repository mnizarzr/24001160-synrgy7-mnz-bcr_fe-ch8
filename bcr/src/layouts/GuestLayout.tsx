import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import { Outlet } from "react-router-dom";

import '@/index.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'font-awesome/css/font-awesome.min.css';

export default function GuestLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
