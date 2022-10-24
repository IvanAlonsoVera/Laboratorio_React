import React, { Component } from 'react';

export class TableBook extends Component {
    render = () =>
        <>
            <tr key={this.props.book}>
                <td>{this.props.book}</td>
                <td><input type="checkbox" checked={this.props.borrowed}
                    onChange={() => this.props.callback(this.props.book)} /></td>
            </tr>
        </>
}