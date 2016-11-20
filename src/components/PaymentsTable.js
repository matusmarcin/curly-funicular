import React, { Component } from 'react';

class PaymentsTable extends Component {
	renderRows() {
		return this.props.schema.map((row) => {
			return (
				<tr key={row.period}>
					<td>{row.period}.</td>
					<td>{row.remaining.toFixed(0) + ' €'}</td>
					<td>{row.accumulatedInterest.toFixed(0) + ' €'}</td>
				</tr>
			)
		});
	}
	render() {
		return (
			<table className="pure-table">
				<thead>
					<tr>
						<th>Months</th>
						<th>Remaining</th>
						<th>Accumulated Interest</th>
					</tr>
				</thead>
				<tbody>{this.renderRows()}</tbody>
			</table>
		);
	}
}

export default PaymentsTable;