import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubMenuLink = styled(Link)`

display: flex;
color: #fff;

`
const SubMenuLabel = styled.span`


color: #fff;

`

function SubMenu({item}) {
    return (
        <div className="d-flex flex-column" >
            
        <SubMenuLink to={item.path}>

            <div>
                {item.icon}
                <SubMenuLabel> {item.title} </SubMenuLabel>
            </div>

        </SubMenuLink>



        </div>
    )
}

export default SubMenu
