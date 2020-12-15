import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Styles from './Navbar.module.css'

function NavMenue(props) {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="sm">
            <Navbar.Brand>
                <Link to="/"
                 className={Styles.navbar}
                > HOME 
                </Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink
                        className={Styles.navbar}
                        to='/'
                        exact activeClassName={Styles.active}
                    > home
                       </NavLink>
                    <NavLink to='/about'
                        className={Styles.navbar}
                        exact activeClassName={Styles.active}
                    > about
                      </NavLink>
                    <NavLink to='/contact'
                        className={Styles.navbar}
                        exact activeClassName={Styles.active}
                    > contact
                     </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavMenue;