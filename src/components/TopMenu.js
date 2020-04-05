import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import {Link} from "react-router-dom";
import { CartContext } from '../contexts/CartContext';

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link to="/">Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/products/">Products</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <CartContext.Consumer >
                                    {({cartItem}) => <NavLink><Link to="/products/">Cart ({cartItem.length})</Link></NavLink>}
                                </CartContext.Consumer>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default TopMenu;