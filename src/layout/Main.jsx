import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTopComponent from "../utils/ScrollToTopComponent";
import Navbar from "./Navbar";
const Main = () => {
  return (
    <div>
      <ScrollToTopComponent>
        <Navbar />
        <Outlet />
      </ScrollToTopComponent>
    </div>
  );
};

export default Main;
