import React, { useState } from 'react';
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
    <div>
      <Navbar color="light" light expand="md">
        <div className='NavBar-content'>
        <div>
        <NavbarBrand href="/">[ Sara Fogo ]</NavbarBrand>
        </div>
        <div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/projects/">Projetos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Habilidades">Habilidades</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contatos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  E-mail
                </DropdownItem>
                <DropdownItem>
                  Telefone
                </DropdownItem>
                <DropdownItem>
                  LinkekIn
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
