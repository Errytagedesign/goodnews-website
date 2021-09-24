import React, {useState} from 'react';
import { List, XLg } from 'react-bootstrap-icons';
import styled from 'styled-components';
// import Hamburger from './Hamburger';
// import Navbar from './Navbar';


// import './Menu.css'
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData';
import SubMenu from './SubMenu';


const Nav = styled.section`

background: var(--main-color);
width: 50%;
height: 100vh;
padding: 2em;
position: fixed;
top: 0;
right: ${({navbar}) => ( navbar ? '0' : '-100%')};
transition: 350ms;
z-index: 200;


`



const NavWrap = styled.div`

width: 100%;
`

function Menu() {

   const [navbar, setNavbar] = useState(false)

   const showNavbar = () => setNavbar(!navbar)

   



    return (
    
      <div>

            <Link to="#" >
           <List size={25} color="white" onClick={showNavbar}/>
           </Link>
        
        <Nav className="d-flex flex-column justify-content-start text-start" navbar={navbar} >
            
           <NavWrap>
            <Link to="#" >
            <XLg size={15} color="white" onClick={showNavbar} />
            </Link>
           </NavWrap>  

          <div className="d-flex flex-column col-12">
             
             {MenuData.map((item, index) => {
              return <SubMenu item={item} key={index} />
           })}  
             
             
         </div>     

        </Nav>

      </div>

    )
}

export default Menu
