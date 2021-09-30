import React from "react";

import styled from "styled-components";
// import Hamburger from './Hamburger';
// import Navbar from './Navbar';
// import axios from "axios";

// import './Menu.css'
// import { Link } from "react-router-dom";
import { DashboardSidebarData } from "./DashboardSidebarData";
import SubDashSidebar from "./SubDashSidebar";

const Nav = styled.section`
  background: var(--main-color);

  overflow: scroll;
  padding: 2em;
`;

function Menu() {
  // const [navbar, setNavbar] = useState(false);

  // const showNavbar = () => setNavbar(!navbar);

  return (
    <div>
      <Nav className="d-flex flex-column justify-content-start text-start">
        {DashboardSidebarData.map((item, index) => {
          return <SubDashSidebar item={item} key={index} />;
        })}
      </Nav>
    </div>
  );
}

export default Menu;
