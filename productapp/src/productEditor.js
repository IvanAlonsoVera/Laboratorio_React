import React, { Component } from 'react';

export class ProductEditor extends Component {
	constructor(props) {
		super(props)
		this.state={
			formData: {
				id: props.product.id || "",
				name: props.product.name || "",
				category: props.product.category || "",
				price: props.product.price || ""
			}
		}
	}

	handleChange = (ev) => {
		ev.persist();
		this.setState(state => state.formData[ev.target.name] = ev.target.value);
	}

	handleClick = () => {
		this.props.saveCallback(this.state.formData);
	}

	render() {
		return <div className="m-2">
			<div className="form-group">
				<label>ID</label>
				<input className="form-control"
					name="id"
					disabled
					value={this.state.formData.id}
					onChange={this.handleChange}
				/>
			</div>
			<div className="form-group">
				<label>Name:</label>
				<input className="form-control"
					name="name"
					value={this.state.formData.name}
					onChange={this.handleChange}
				/>
			</div>
			<div className="form-group">
				<label>Category:</label>
				<input className="form-control"
					name="category"
					value={this.state.formData.category}
					onChange={this.handleChange}
				/>
			</div>
			<div className="form-group">
				<label>Price:</label>
				<input className="form-control"
					name="price"
					value={this.state.formData.price}
					onChange={this.handleChange}
				/>
			</div>
			<div className="text-center">
				<button
					onclick={this.handleClick}
					className="btn btn-primary m-1">
					Save
				</button>
				<button
					onclick={this.props.cancelCallback}
					className="btn btn-secondary m-1">
					Cancel
				</button>
			</div>
		</div>
	}
}