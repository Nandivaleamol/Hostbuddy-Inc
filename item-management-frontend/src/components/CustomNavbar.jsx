import React, { useState } from 'react';
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const CustomNavbar = ()=>{
  // used usetState hook for toggle in small devices menu
  const [isOpen, setIsOpen] = useState(false);

  const toggle =()=>setIsOpen(!isOpen);

  return(
    <div >
      <Navbar color='dark'
      dark
      expand='md'
      fixed=''>

        <NavbarBrand tag={ReactLink} to='/'>Item Management</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink tag={ReactLink} to='/add'>Add Item</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to='/item-list'>Item List</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>LinkedIn</NavbarText    > */}
        </Collapse>
      </Navbar>
    </div>
  )
}

export default CustomNavbar