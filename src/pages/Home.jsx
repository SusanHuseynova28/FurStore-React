import React from 'react';
import Modal from '../components/Modal';
import FurnitureSlider from '../components/FurnitureSlider';
import ProductGrid from '../components/ProductGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductModal from '../components/FeaturedProducts/ProductModal';
import ProductShowcase from '../components/ProductShowCase';


const Home = () => {
  return (
    <div>
        <Modal />
      <FurnitureSlider />
      <ProductGrid />
      <FeaturedProducts />
      <ProductModal />
      <ProductShowcase />
    </div>
  )
}

export default Home