import React from "react";
import {NavLink} from 'react-router-dom'
import "./header.sass";
import { NavBar } from "../navBar/NavBar";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerWrap">
        <div className="logo">
          <NavLink to="/">
            <h2>Exchange Rate</h2>
          </NavLink>
        </div>
        <NavBar />
        <div className="person">
            <i className = "fa fa-user" aria-hidden = "true"/>
        </div>
      </div>
      <hr/>
    </div>
  );
};
