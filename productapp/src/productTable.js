import React, { Component } from 'react';
import { ProductTableRow } from './productTableRow';

export class ProductTable extends Component {
	render() {
		return <table className="table table-sm table-striped table-bordered">
			<thead>
				<tr colspan="5" className="bg-primary text-white text-center h4 p-2">
					Products
				</tr>
				<tr><th>Id</th><th>Name</th><th>Category</th><th>Price</th><th></th></tr>
			</thead>
			<tbody>
				{
					this.props.products.map(p =>
						<ProductTableRow product={p}
							key={p.id}
							editCallBack={this.props.editCallBack}
							deleteCallback={this.props.deleteCallback}/>
						)
				}
			</tbody>
		</table>
	}
}