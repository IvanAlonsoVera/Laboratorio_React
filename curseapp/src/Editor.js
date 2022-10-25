import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";
import { Display } from "./Display";

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            seatCapacity: "",
            instructorName: ""
        }
        this.rules = {
            title: { required: true, minlength: 5, alpha: true },
            seatCapacity: { required: true, alpha: true }
        }
    }
    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <>
                <div className="col-6 h5 bg-info text-white p-2">
                <FormValidator data={this.state} rules={this.rules} submit={this.props.submit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input className="form-control"
                            name="title"
                            value={this.state.title}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="title" />
                    </div>
                    <div className="form-group">
                        <label>Seat Capacity:</label>
                        <input className="form-control"
                            name="seatCapacity"
                            value={this.state.seatCapacity}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="seatCapacity" />
                    </div>
                    <div className="form-group">
                        <label>Instructor Name:</label>
                        <textarea className="form-control" name="instructorName"
                            value={this.state.order}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="instructorName" />
                    </div>
                </FormValidator>
              </div>
            <div className="col-6">
                    <Display title={this.state.title} seatCapacity={this.state.seatCapacity} instructorName={this.state.instructorName} />  
            </div>
                
            </>
        )
    }
}
