import React, { Component } from 'react';

import PaymentsTable from './PaymentsTable.js';

class DebtSummary extends Component {
	render() {
		return (
			<div>
				<h2>You will pay it off in <strong>{this.props.debt.periods} months</strong> with accumulated interest <strong>{this.props.debt.accumulatedInterest.toFixed(2)} &euro;</strong></h2>
				<p>
					<small>You owe {this.props.debt.state.debt} &euro;, Interest: {this.props.debt.state.apr}%, Payment: {this.props.debt.state.payment} &euro;</small>
				</p>

				<PaymentsTable ref="payments" schema={this.props.debt.schema} />
			</div>
		);
	}
}

export default DebtSummary;