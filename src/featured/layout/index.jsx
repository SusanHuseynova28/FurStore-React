import React from "react";
import Header from "../header";
import Footer from "../footer";
import Sidebar from "../../components/SideBar";
import { Outlet } from "react-router-dom";
import FurnitureSlider from "../../components/FurnitureSlider";
import Modal from "../../components/Modal";
import ProductGrid from "../../components/ProductGrid";
import ProductShowcase from "../../components/ProductShowCase";
import FeaturedProducts from "../../components/FeaturedProducts";


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidebar/>

      <main className="flex-grow">
        <Outlet />
      </main>
      <Modal/>
      <FurnitureSlider/>
      <ProductGrid/>
      <FeaturedProducts/>
      <ProductShowcase/>
      <Footer />
    </div>
  );
};

export default Layout;
