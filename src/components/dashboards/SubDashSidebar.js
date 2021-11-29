import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  @media screen and (max-width: 500px) {
    padding: 0.5em;
  }
`;
const SubMenuLabel = styled.span`
  color: #fff;
  margin-left: 1em;
  @media screen and (max-width: 780px) {
    padding: 0.5em;
  }
`;

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

  @media screen and (max-width: 780px) {
    padding: 1em;
  }
`;

function SubMenu({ item }) {
  const [subCat, setSubCat] = useState(false);

  const showSubCat = () => setSubCat(!subCat);

  return (
    <div className="d-flex flex-column">
      <SubMenuLink to={item.path} onClick={item.subCat && showSubCat}>
        <div>
          {item.icon}
          <SubMenuLabel className="d-none d-lg-block">
            {" "}
            {item.title}{" "}
          </SubMenuLabel>
        </div>

        <div>
          {item.subCat && subCat
            ? item.iconOpen
            : item.subCat
            ? item.iconClosed
            : null}
        </div>
      </SubMenuLink>

      {subCat &&
        item.subCat.map((cat, index) => {
          return (
            <DropdownLink to={cat.path} key={index}>
              {cat.icon}
              <SubMenuLabel className="d-none d-lg-block">
                {" "}
                {cat.title}{" "}
              </SubMenuLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
}

export default SubMenu;
