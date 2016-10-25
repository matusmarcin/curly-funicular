import React, { Component } from 'react';

import PaymentsTableRow from './PaymentsTableRow.js';

class PaymentsTable extends Component {
	render() {
		var rows = [];
		this.props.schema.forEach(function(row) {
			rows.push(<PaymentsTableRow row={row} />);
		});
		return (
			<table className="pure-table">
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

export default PaymentsTable;