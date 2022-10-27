import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";
import { Display } from "./Display";
import { AddRow } from "./AddRow";

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curse: [
                { title: "Agile", seatCapacity: 20, instructorName: "Jonh Jones" },
                { title: "C#", seatCapacity: 15, instructorName: "Jonh Jones" },
                { title: "Angular", seatCapacity: 13, instructorName: "Ross Miller" },
                { title: "Java", seatCapacity: 10, instructorName: "Alex Walker" }
            ]
        }
        this.nCurse = {};
        this.rules = {
            title: { required: true, minlength: 5, alpha: true },
            seatCapacity: { required: true, numeric: true }
        }
    }
    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.nCurse[event.target.name] = event.target.value;
    }
    addCurse = () => this.setState({
        curse: [...this.state.curse, this.nCurse]
    })

    render() {
        return (
            <>
                <div className="text-center col-6 h5 bg-info text-white p-2">
                    <FormValidator data={this.state} rules={this.rules} submit={this.props.submit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input className="form-control"
                            name="title"
                            value={this.state.curse.title}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="title" />
                    </div>
                    <div className="form-group">
                        <label>Seat Capacity:</label>
                        <input className="form-control"
                                name="seatCapacity"
                                value={this.state.curse.seatCapacity}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="seatCapacity" />
                    </div>
                    <div className="form-group mb-2">
                        <label>Instructor Name:</label>
                        <textarea className="form-control" name="instructorName"
                                value={this.state.curse.instructorName}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="instructorName" />
                    </div>
                    </FormValidator>
                    <button onClick={this.addCurse} className="btn btn-primary">Dale</button>
              </div>
                <div className="col-6">
                    <Display curse={this.state.curse} />  
            </div>
                
            </>
        )
    }
}
