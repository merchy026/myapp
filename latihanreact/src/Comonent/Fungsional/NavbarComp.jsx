import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button
} from 'reactstrap';

import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../CardContext';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/calonanggota" className="nav-link"> Calon Anggota </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/info" className="nav-link">Info</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/hooks" className="nav-link">Galeri</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/useeffects" className="nav-link">Login Anggota</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Login Admin</NavLink>
                        </NavItem>
                    </Nav>

                    <NavbarText>
                        <Button color="danger">
                            <i className="fa fa-shopping-cart"></i>
                            <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>

                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp