import React, { Component } from 'react';

import PaymentsTable from './PaymentsTable.js';

class DebtSummary extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showMore: true 
		};
	}
	render() {
		return (
			<div>
				<h2>You will pay it off in <strong>{this.props.debt.periods} months</strong> with accumulated interest <strong>{this.props.debt.accumulatedInterest.toFixed(2)} &euro;</strong></h2>
				<p>
					<small>You owe {this.props.debt.debt} &euro;, Interest: {this.props.debt.apr}%, Payment: {this.props.debt.payment} &euro;</small>
				</p>
				<p><a href="#">Details</a></p>
				{this.state.showMore ? <PaymentsTable ref="payments" schema={this.props.debt.schema} /> : null }
			</div>
		);
	}
}

export default DebtSummary;