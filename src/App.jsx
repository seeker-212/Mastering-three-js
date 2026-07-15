import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ShowCase from "./components/ShowCase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import HighLights from "./components/HighLights";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
      <Performance />
      <Features />
      <HighLights />
      <Footer />
    </main>
  );
};

export default App;
