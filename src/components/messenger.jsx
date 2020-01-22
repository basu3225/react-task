import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Messenger extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	state = {
		title: "",
		show: false
	};

	handleClose() {
		this.setState((st) => {
			st.show = false;
			return st;
		})
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			< >
				<Button
					variant="primary mt-2 mb-2"
					onClick={this.handleShow} >
				
					Launch demo modal
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default Messenger;
