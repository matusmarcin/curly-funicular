import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DebtSummary from './DebtSummary.js';

class Debt extends Component {
	constructor() {
		super();
		this.state = {
			debt: 0,
			apr: 0,
			payment: 0,
			schema: [],
			periods: 0,
			accumulatedInterest: 0,
			calculated: false
		}
	}
	calculate() {
		let remaining = this.state.debt;
		let interest =  0;
		let periods = 0;
		let accumulatedInterest = 0;
		let schema = [];
		while(this.state.debt && this.state.apr && this.state.payment && remaining > 0 && periods < 300) {
			interest = remaining*(this.state.apr/100)/12;
			accumulatedInterest += interest;
			remaining -= this.state.payment-interest;
			periods++;
			schema.push({"period": periods, "remaining": remaining, "accumulatedInterest": accumulatedInterest});
			if(remaining < 0) {
				remaining = 0;
				this.setState({ calculated: true, periods: periods, accumulatedInterest: accumulatedInterest, schema: schema});
			}
		}
	}
	render() {
		return (
			<div>
				<form className="pure-form pure-form-aligned">
					<div className="pure-control-group">
						<label>How much do you owe? </label>
						<input value={this.state.debt} onChange={event => this.setState({ debt: event.target.value}, this.calculate)} /> &euro;
					</div>
					<div className="pure-control-group">
						<label>What is the interest?</label>
						<input value={this.state.apr} onChange={event => this.setState({ apr: event.target.value}, this.calculate)} /> %
					</div>
					<div className="pure-control-group">
						<label>What is the monthly payment?</label>
						<input value={this.state.payment} onChange={event => this.setState({ payment: event.target.value}, this.calculate)} /> &euro;
					</div>
				</form>
				<div>
					{this.state.calculated && <DebtSummary debt={this.state} />}
				</div>
			</div>
		);
	}
}

export default Debt;
