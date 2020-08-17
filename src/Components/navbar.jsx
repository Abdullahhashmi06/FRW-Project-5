import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const TheNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [navDark, setNavDark] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
  const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
  const toggleNavbar = () => setCollapsed(!collapsed);

  const mounted = useRef();
    useEffect(() => {
      if (!mounted.current) {
        document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 10) {
            setNavDark(true);
          } else {
            setNavDark(false);
          }
        });
        mounted.current = true;
      } else {
        document.removeEventListener("scroll", null);
      }
  });
  

  return (
    <section id="header">
        <div className="nav-bar fixed-top">
            <Navbar className='navbar' color='light' light expand="lg" >
              <NavbarBrand href="/">
                O Marketing <FontAwesomeIcon icon={faCog} size="lg" className="mt-1" />
              </NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse className="nav-item" isOpen={!collapsed} navbar>
                <Nav className={(navDark?'ml-auto nav navClassDark':'ml-auto nav navClassLight')} navbar>
                  <NavItem>
                    <NavLink className="text-white">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-white">Products</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-white">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-white">Services</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-white">Contact Us</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>
    </section>
  );
}

export default TheNavBar;