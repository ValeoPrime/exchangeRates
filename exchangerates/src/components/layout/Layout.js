import React from "react";
import "./layout.sass";
import { Switch, Route } from "react-router-dom";
import { AddClass } from "../../hoc/AddClass";
import { Header } from "../header/Header";
import { Home } from "../pages/home/Home";
import { SideBar } from "../sideBar/SideBar";
import { Calkulator } from "./../pages/calc/Calkulator";
import { Sample } from "./../pages/sample/Sample";
import { Info } from "../pages/info/Info";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <div className="routes">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/calc"
              render={() => <Calkulator />}
            />
            <Route path="/sample" component={Sample} />
            <Route path="/info" component={Info} />
          </Switch>
        </div>
        <SideBar />
      </div>
    </React.Fragment>
  );
};

export default AddClass(Layout, "layout");
