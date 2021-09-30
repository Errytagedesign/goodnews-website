import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MenuButton,
  Youtube,
  CalendarEvent,
  Envelope,
  CaretDownFill,
} from "react-bootstrap-icons";

import styled from "styled-components";
const DropdownLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  padding-left: 3em;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    background: var(--pry-color);
    border-left: 4px solid var(--sec-color);
    cursor: pointer;
    color: #fff;
  }
`;

const SubMenuLabel = styled.span`
  color: #fff;
  margin-left: 1em;
  position: relative;
  top: 0;
  // right: ${({ navbar }) => (navbar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 200;
`;
const SubMenuLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  padding: 1.1em;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1em;

  &:hover {
    background: var(--pry-color);
    border-left: 4px solid var(--sec-color);
    cursor: pointer;
    color: #fff;
  }
`;

const baseURL = "https://api-good-news.herokuapp.com/api";

function SidebarCat() {
  const [subCat, setSubCat] = useState(false);

  const showSubCat = () => setSubCat(!subCat);

  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios.get(`${baseURL}/categories/all`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (!categories) return null;

  let data = categories.data;

  return (
    <div>
      <SubMenuLink to="" onClick={showSubCat}>
        <MenuButton size={30} className="pe-2" /> Categories <CaretDownFill />
      </SubMenuLink>

      {subCat ? (
        <div>
          {data.map((category) => (
            <DropdownLink to={`/categories?catId=${category._id}`}>
              <SubMenuLabel> {`${category.title}`} </SubMenuLabel>
            </DropdownLink>
          ))}
        </div>
      ) : null}
      <SubMenuLink to="">
        {" "}
        <Youtube size={30} className="pe-2" /> Videos{" "}
      </SubMenuLink>
      <SubMenuLink to="">
        {" "}
        <Envelope size={30} className="pe-2" /> Newsletter
      </SubMenuLink>
      <SubMenuLink to="">
        {" "}
        <CalendarEvent size={30} className="pe-2" /> Event{" "}
      </SubMenuLink>
    </div>
  );
}

export default SidebarCat;
