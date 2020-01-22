import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./navbar.css";
import img from "./../assets/images/img1.jpg";
import { Dropdown } from "react-bootstrap";


class Navbar extends Component {
	
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>

				<nav className="navbar navbar-light bg-info mb-2">
					<a className="navbar-brand" href="#home">
						Home
					</a>

					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic-align-right">
							Dropdown Button
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</nav>
				<img src={img} class="img-fluid" alt="Responsive image1"></img>

			
			</div>
			
		);
	}
}
Navbar.propTypes = {
	title: PropTypes.string.isRequired
};
export default Navbar;
