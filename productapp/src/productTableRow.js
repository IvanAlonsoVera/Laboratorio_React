import React, { Component } from 'react';

export class ProductTableRow extends Component {
	render() {
		let p = this.props.product;
		return <tr>
			<td>{p.id}</td>
			<td>{p.name}</td>
			<td>{p.category}</td>
			<td className="text-right">${number(p.price).toFixed(2)}</td>
			<td>
				<button className="btn btn-sm btn-warning"
					onClick={this.props.editCallback(p)}>
					Edit
				</button>
				<button className="btn btn-sm btn-danger"
					onClick={this.props.editCallback(p)}>
					Delete
				</button>
			</td>
		<tr />
	}
}