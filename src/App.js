import React from "react";
import "./app.css";
import {
  Footer,
  Blog,
  Possibility,
  WhatGPT,
  Features,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

const app = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default app;
