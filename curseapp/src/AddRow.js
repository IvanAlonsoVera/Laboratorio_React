import React, { Component } from 'react';

export class AddRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            seatCapacity: "",
            instructorName: ""
            }
    }

    addRow = () => {
        this.setState({ title: this.props.title });
        console.log(this.props.title);
    }

    render() {
        return <button className="btn btn-primary" onClick={this.addRow}>
            Add Row
        </button>
    }
}