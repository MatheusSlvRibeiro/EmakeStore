import React from "react";
import Navbar from "../../components/navbar/navbar";
import SimpleSlider from "../../components/sliderHome/slider";
import Footer from "../../components/footer/footer";
import ProductCard from "../../components/productCard/productCard";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <SimpleSlider />
            <ProductCard produtos="lancamentos"/>
            <ProductCard produtos="maquiagem"/>
            <Footer/>
        </div>
    )
};

export default Home;