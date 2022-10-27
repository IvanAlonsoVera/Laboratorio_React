import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curse: [
                { title: "Agile", seatCapacity: 20, instructorName: "Jonh Jones" },
                { title: "C#", seatCapacity: 15, instructorName: "Jonh Jones" },
                { title: "Angular", seatCapacity: 13, instructorName: "Ross Miller" },
                { title: "Java", seatCapacity: 10, instructorName: "Alex Walker" }
            ],
        }
        this.rules = {
            title: { required: true, minlength: 5, alpha: true },
            seatCapacity: { required: true, numeric: true }
        }
    }
    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div className="h5 bg-info text-white p-2">
                <FormValidator data={this.state} rules={this.rules}
                    submit={this.props.submit}>
                    <ValidationMessage field="form" />
                    <div className="form-group">
                        <label>Name:</label>
                        <input className="form-control"
                            name="name"
                            value={this.state.curse.title}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="name" />
                    </div>
                    <div className="form-group">
                        <label>SeatCapacity:</label>
                        <input className="form-control"
                            name="seatCapacity"
                            value={this.state.curse.seatCapacity}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="seatCapacity" />
                    </div>
                    <div className="form-group">
                        <label>instructorName:</label>
                        <textarea className="form-control" name="instructorName"
                            value={this.state.curse.instructorName}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="instructorName" />
                    </div>
                </FormValidator>
            </div>
        )
    }
}

