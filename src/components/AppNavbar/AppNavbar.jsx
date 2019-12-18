import React from 'react';
import PropTypes from 'prop-types';
import { withRouter }  from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

class AppNavbar extends React.Component {
   
    getNavLinkClass = (path) => {

        return this.props.location.pathname === path ? 'active' : '';
    }

    render() {

        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/" >Wallakeep</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={this.getNavLinkClass("/advert/create")} href="/advert/create">New advert</Nav.Link>
                        <Nav.Link className={this.getNavLinkClass("/advert/")} href="/advert/">Search</Nav.Link>
                        <Nav.Link className={this.getNavLinkClass("/profile/")} href="/profile">My profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};

AppNavbar.propTypes = {
    displaySearch: PropTypes.bool
}

export default withRouter(AppNavbar);