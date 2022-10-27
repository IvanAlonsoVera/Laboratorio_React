import React, { Component } from 'react';

export class Display extends Component {

    render() {
        let keys = Object.keys(this.props.curse);
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
                    {this.props.curse.map((curse) =>
                        <tr>
                            <td>{curse.title}</td>
                            <td>{curse.seatCapacity}</td>
                            <td>{curse.instructorName}</td>
                        </tr> 
                    )}
            </table>
        }
    }
}
