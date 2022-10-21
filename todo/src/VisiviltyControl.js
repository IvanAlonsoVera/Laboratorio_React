import react, { Component } from 'react';

export class VisibilityControl extends Component {
    render = () =>
        <div className="from-check">
            <input className="from-check-input" type="chekbox"
                checked={this.props.isChecked}
                onChange={(e) => this.props.callback(e.target.checked)} />
            <label className="fporm-checked-label">show {this.props.descripcion}</label>
        </div>
}