import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import NumberFormat from 'react-number-format';

import Input from './components/Input.js';
import DebtSummary from './components/DebtSummary.js';

class App extends Component {
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
		this.calculated = false;
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
		this.accumulatedInterest = 0;
		this.schema = [];
		while(this.state.debt && this.state.apr && this.state.payment && remaining > 0 && this.periods < 300) {
			interest = remaining*(this.state.apr/100)/12;
			this.accumulatedInterest += interest;
			remaining -= this.state.payment-interest;
			if(remaining < 0) {
				remaining = 0;
				this.calculated = true;
			}
			this.periods++;
			this.schema.push({"period": this.periods, "remaining": remaining, "accumulatedInterest": this.accumulatedInterest});
			// console.log(this.periods, remaining, interest, this.accumulatedInterest, this.state.payment);
		}
		// console.log(this.schema);
		this.forceUpdate();
	}
	render() {
		return (
			<div>
				<form className="pure-form pure-form-aligned">
					<div className="pure-control-group">
						<label>How much do you owe? </label>
						<Input ref="debt" update={this.update} /> &euro;
					</div>
					<div className="pure-control-group">
						<label>What is the interest?</label>
						<Input ref="apr" update={this.update} /> %
					</div>
					<div className="pure-control-group">
						<label>What is the monthly payment?</label>
						<Input ref="payment" update={this.update} /> &euro;
					</div>
				</form>
				<div>
					{this.calculated && <DebtSummary debt={this} />}
				</div>
			</div>
		);
	}
}

export default App;
