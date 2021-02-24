import React from "react";
import Common from "./Common";
import web from "./images/img.jpg";


const Home = () =>{
    return(
    <>
    <Common 
    name="Grow your business with" 
    imgsrc={web} 
    visit="./services" 
    btname="Get Started"
    />
    </>
    );
};

export default Home;