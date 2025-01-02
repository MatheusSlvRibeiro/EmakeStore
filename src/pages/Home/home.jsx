import React from "react";
import Navbar from "../../components/navbar/navbar";
import SimpleSlider from "../../components/sliderHome/slider";
import Footer from "../../components/footer/footer";

const Home = () => {
    return (
        <body>
            <Navbar/>
            <SimpleSlider />
            <Footer/>
        </body>
    )
};

export default Home;