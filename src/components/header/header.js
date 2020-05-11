import React from "react";
import { Link } from "gatsby";
import Sticky from "react-sticky-el";
import SideBarMenu from "../sidebar/sidebar";
import styl from "./header.module.css";
import logo from "../../images/logo.png";

const Header = () => (
  <header>
    <Sticky
      className={styl.stickyWrapper}
      stickyClassName={styl.isSticky}
      stickyStyle={{ transform: "unset", zIndex: "2" }}
    >
      <div className={`header ${styl.menuContainer}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-3 justify-content-start align-items-center">
              <Link className="text-white" to="/">
                <img className="img-fluid logo" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-6 col-md-9 justify-content-end d-flex align-items-center">
              <div className="top-links">
                <ul className="list-unstyled d-flex my-0 ml-0 top-info">
                  <li className="mx-1">
                    <Link to="/" className="menu-list">
                      Home
                    </Link>
                  </li>
                  <li className="mx-1">
                    <Link to="/classes" className="menu-list">
                      About Us
                    </Link>
                  </li>
                  <li className="mx-1">
                    <Link to="/events" className="menu-list">
                      Services
                    </Link>
                  </li>
                  <li className="mx-1">
                    <Link to="/events" className="menu-list">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <SideBarMenu />
            </div>
          </div>
        </div>
      </div>
    </Sticky>
  </header>
);

export default Header;
