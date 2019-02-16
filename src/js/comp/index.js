import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'jo'
		}
	}

	render() {
		return (
			<div class="home">
				<h1>hebwo</h1>
				<h2>O_O</h2>
			</div>
		)
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app)
