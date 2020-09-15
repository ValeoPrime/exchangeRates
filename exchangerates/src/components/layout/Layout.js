import React from "react";
import "./layout.sass";
import { AddClass } from "../../hoc/AddClass";
import { Header } from "../header/Header";
import { Home } from "../pages/home/Home";
import { SideBar } from "../sideBar/SideBar";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
          <div className='routes'>
              <Home/>
          </div>
         <SideBar/>
      </div>
    </React.Fragment>
  );
};

export default AddClass(Layout, "layout");
