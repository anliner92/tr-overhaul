import React from "react";
import { Link } from "gatsby";
import { Nav, Dropdown, NavItem } from "react-bootstrap";
import "./menu.css";

export default () => (
	<div className="navigation">
		<Nav className="flex-column">
			<Nav.Item>
				<Link to="/">Home</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/blog">Blog</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/contact">Contact Us</Link>
			</Nav.Item>
			<Dropdown as={NavItem}>
				<Dropdown.Toggle as={Nav.Link}>Dropdown</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>Hello there!</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Nav>
	</div>
);
