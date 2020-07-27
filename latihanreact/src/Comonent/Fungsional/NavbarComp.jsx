import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown, NavbarText, Button,
} from 'reactstrap';

import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../App';

function NavbarComp() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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
                        <UncontrolledDropdown >
                            <DropdownToggle nav caret>
                                Login
                                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink to="/loginanggota" className="nav-link" >Anggota</NavLink>

                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to="/loginpetugas" className="nav-link" >Petugas</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>



                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp