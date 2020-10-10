import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './navbar.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='n-bar'>
      <Navbar expand="md">
        <div className='NavBar-content'>
          <div>
            <NavbarBrand>
              <Link to='/' className='navbar-brand'> Sara Fogo </Link>
            </NavbarBrand>
          </div>
          <div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link to='/projetos' className='nav-link'>Projetos</Link>
                </NavItem>
                <NavItem>
                  <Link to='/habilidades' className='nav-link'>Sobre</Link>
                </NavItem>
                {/* <NavItem>
                  <Link to='/expeciencias' className='nav-link'>Experiências</Link>
                </NavItem> */}
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
