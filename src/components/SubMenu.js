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
`;
const SubMenuLabel = styled.span`
  color: #fff;
  margin-left: 1em;
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
`;

function SubMenu({ item }) {
  const [subCat, setSubCat] = useState(false);

  const showSubCat = () => setSubCat(!subCat);

  return (
    <div className="d-flex flex-column">
      <SubMenuLink to={item.path} onClick={showSubCat}>
        <div>
          {item.icon}
          <SubMenuLabel> {item.title} </SubMenuLabel>
        </div>

        <div>
          {showSubCat ? item.iconOpen : item.subCat ? item.iconClosed : null}
        </div>
      </SubMenuLink>

      {subCat &&
        item.subCat.map((cat, index) => {
          return (
            <DropdownLink to={cat.path} key={index}>
              {cat.icon}
              <SubMenuLabel> {cat.title} </SubMenuLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
}

export default SubMenu;
