import React from 'react';
import ReactDOM from 'react-dom';
import NumberFormat from 'react-number-format';

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
		this.accumulatedInterest = 0;
		this.schema = [];
		while(this.state.debt && this.state.apr && this.state.payment && remaining > 0 && this.periods < 300) {
			interest = remaining*(this.state.apr/100)/12;
			this.accumulatedInterest += interest;
			remaining -= this.state.payment-interest;
			if(remaining < 0) remaining = 0;
			this.periods++;
			this.schema.push({"period": this.periods, "remaining": remaining, "accumulatedInterest": this.accumulatedInterest});
			console.log(this.periods, remaining, interest, this.accumulatedInterest, this.state.payment);
		}
		// console.log(this.schema);
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
				<PaymentsTable ref="payments" schema={this.schema} update={this.update} />
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

class PaymentsTable extends React.Component {
	render() {
		var rows = [];
		this.props.schema.forEach(function(row) {
			rows.push(<PaymentsTableRow row={row} />);
		});
		return (
			<table style={{border: '1px solid #444'}}>
				<thead>
					<tr>
						<th>Months</th>
						<th>Remaining</th>
						<th>Accumulated Interest</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class PaymentsTableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.row.period}.</td>
				<td>{this.props.row.remaining.toFixed(0) + ' €'}</td>
				<td>{this.props.row.accumulatedInterest.toFixed(0) + ' €'}</td>
			</tr>
		);
	}
}

export default App
