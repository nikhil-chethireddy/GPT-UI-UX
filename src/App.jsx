import React from "react";
import "./App.css";
import { Brand, CTA, NavBar } from "./components";
import {
  Blog,
  Future,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Future />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
