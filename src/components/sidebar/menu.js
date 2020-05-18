import React from "react";
import { Link } from "gatsby";
import { Nav, Dropdown, NavItem } from "react-bootstrap";
import "./menu.css";
import logo from "../../images/logo.png";

export default () => (
	<div className="navigation">
		<div className="menu-logo">
			<Link to="/">
				<img className="img-fluid mb-4" src={logo} alt="logo" />
			</Link>
		</div>
		<Nav className="flex-column">
			<Nav.Item>
				<Link to="/">Home</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">About us</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">Services</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">Contact</Link>
			</Nav.Item>
			{/*<Dropdown as={NavItem}>
				<Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>Hello there!</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>*/}
		</Nav>
	</div>
);
