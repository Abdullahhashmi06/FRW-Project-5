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
  Container
} from 'reactstrap';

const TheNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navDark, setNavDark] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
  const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 300) {
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
              <FontAwesomeIcon icon={faCog} size="lg" className="mt-1" />
              O Marketing </NavbarBrand>
              
              <NavbarToggler onClick={toggle} />
              <Collapse className="nav-item" isOpen={isOpen} navbar>
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