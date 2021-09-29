import React, { useEffect, useState, useRef } from "react";
import { List, XLg } from "react-bootstrap-icons";
import styled from "styled-components";
// import Hamburger from './Hamburger';
// import Navbar from './Navbar';
// import axios from "axios";

// import './Menu.css'
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";
import SubMenu from "./SubMenu";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const Nav = styled.section`
  background: var(--main-color);
  width: 50%;
  height: 100vh;
  overflow: scroll;
  padding: 2em;
  position: fixed;
  top: 0;
  right: ${({ navbar }) => (navbar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 200;

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

const NavWrap = styled.div`
  width: 100%;
`;

function Menu() {
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!navbar);

  let domNode = useClickOutside(() => {
    setNavbar(false);
  });

  return (
    <div>
      <Link to="#">
        <List size={25} color="white" onClick={showNavbar} />
      </Link>

      <Nav
        className="d-flex flex-column justify-content-start text-start"
        navbar={navbar}
        ref={domNode}
      >
        <NavWrap>
          <Link to="#">
            <XLg size={15} color="white" onClick={showNavbar} />
          </Link>
        </NavWrap>

        {MenuData.map((item, index) => {
          return <SubMenu item={item} key={index} onClick={showNavbar} />;
        })}
      </Nav>
    </div>
  );
}

export default Menu;
