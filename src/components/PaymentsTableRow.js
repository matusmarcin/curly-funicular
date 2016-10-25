import React, { Component } from 'react';

class PaymentsTableRow extends Component {
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

export default PaymentsTableRow;