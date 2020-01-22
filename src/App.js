import React, { Component } from "react";
import Navbar from "./components/navbar";
import Messenger from "./components/messenger";
import "./App.css";
import { Button } from "react-bootstrap";
import Conversation from './components/conversations';

class App extends Component {
	state = {
		title: "XXceed Community",
		data: {
			name: "Basu",
			salutation: "Mr"
		}
	};
	handleName = () => {
		this.setState(st => {
			st.data.name = "Basavaraj";
			return st;
		});
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div>{this.state.data.name}</div>
					<Button variant="primary" onClick={this.handleName}>
						Full name
					</Button>
					<Navbar title={this.state.title} />
					<Messenger />
					<Conversation />
				</header>
			</div>
		);
	}
}


export default App;



