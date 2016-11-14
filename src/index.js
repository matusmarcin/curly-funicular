import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Debt from './components/Debt.js'


class App extends Component {
	render() {
		return (
			<div>
				<Debt />
				<br />
				<Debt />
			</div>
		);
	}
}

export default App;
