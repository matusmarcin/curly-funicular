import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			debt: 0,
			apr: 0,
			payment: 0
		}
		this.schema = []
		this.periods = 0;
		this.accumulatedInterest = 0;
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			debt: ReactDOM.findDOMNode(this.refs.debt).value,
			apr: ReactDOM.findDOMNode(this.refs.apr).value,
			payment: ReactDOM.findDOMNode(this.refs.payment).value,
		}, this.calculate)
	}
	calculate() {
		let remaining = this.state.debt;
		let interest =  0;
		this.periods = 0;
		this.accumulatedInterest = 0
		while(this.state.debt && this.state.apr && this.state.payment && remaining > 0 && this.periods < 300) {
			interest = remaining*(this.state.apr/100)/12;
			this.accumulatedInterest += interest;
			remaining -= this.state.payment-interest;
			this.periods++;
			// console.log(this.periods, remaining, interest, this.state.payment);
		}
		this.forceUpdate();
	}
	render() {
		return (
			<div>
				<h1>Credit Card Repayment Calculator</h1>
				<strong>Because you spent more than you earned. You ass.</strong>
				<hr />
				<p>How much do you owe? <br /><Input ref="debt" update={this.update} /> EUR</p>
				<p>What is the interest? <br /><Input ref="apr" update={this.update} />%</p>
				<p>What is the monthly payment? <br /><Input ref="payment" update={this.update} /> EUR</p>
				<hr />
				<p>You owe: {this.state.debt}<br />Interest: {this.state.apr}%<br />Payment: {this.state.payment}</p>
				<p>You will pay it off in <strong>{this.periods} months</strong> with accumulated interest <strong>{this.accumulatedInterest.toFixed(2)} EUR</strong></p>
			</div>
		);
	}
}

class Input extends React.Component {
	render() {
		return (
			<input type="text"
				onChange={this.props.update} />
		);
	}
}

export default App
