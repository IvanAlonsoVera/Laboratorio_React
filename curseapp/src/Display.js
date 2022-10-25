import React, { Component } from 'react';

export class Display extends Component {

    render() {
        let keys = Object.keys(this.props.title);
        if (keys.length === 0) {
            return <div className="h5 bg-secondary p-2 text-white">
                No data
            </div>
        } else {
            return <table className="table table-striped table-bordered">
                <thead>
                    <tr><th>Title</th><th>Seat Capacity</th><th>Instructor Name</th></tr>
                </thead>
                <tbody>

                </tbody>
                    <tr>
                        <td>{this.props.title}</td>
                        <td>{this.props.seatCapacity}</td>
                        <td>{this.props.instructorName}</td>
                    </tr> 
            </table>
        }
    }
}
