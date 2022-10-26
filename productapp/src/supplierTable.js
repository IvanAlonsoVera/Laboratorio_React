import React, { Component } from 'react';
import { SupplierTableRow } from './supplierTableRow';

export class ProductTable extends Component {
	render() {
		return <table className="table table-sm table-striped table-bordered">
			<thead>
				<tr colspan="5" className="bg-primary text-white text-center h4 p-2">
					Suppliers
				</tr>
				<tr><th>Id</th><th>Name</th><th>City</th><th>Products</th><th></th></tr>
			</thead>
			<tbody>
				{
					this.props.suppliers.map(s =>
						<SupplierTableRow supplier={s}
							key={s.id}
							editCallBack={this.props.editCallBack}
							deleteCallback={this.props.deleteCallback} />
					)
				}
			</tbody>
		</table>
	}
}