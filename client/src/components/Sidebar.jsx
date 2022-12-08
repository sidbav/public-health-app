import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from "../assets/img/reactlogo.png";
import { NavLinks } from "./NavLinks";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("../assets/img/healthcare.png")} alt="..." />
            </div>
          </a>
          <a className="text" style = {{textDecoration: "none"}} href="">
            Public Health
          </a>
        </div>
        <Nav>
          <NavLinks />
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
