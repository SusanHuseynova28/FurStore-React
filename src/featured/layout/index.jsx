import React from "react";
import Header from "../header";
import Footer from "../footer";
import Sidebar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidebar />

      <main className="flex-grow">
        <Outlet />
      </main>
    
      <Footer />
    </div>
  );
};

export default Layout;
