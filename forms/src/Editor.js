import React, { Component } from 'react';

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Javier",
            flavor: "vanilla",
            toppings: ["strawberries"],
            thoScoos: false
        }
        this.flavors = ["chocolate", "double Chocolate", "TripleChocolate", "Vainilla"];
        this.toppings = ["Sprinkles", "fudge sauce","maple Syrup"]
    }

    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value },
            ()=> this.props.submit(this.state))
    }

    updateFormValueOption = (event) => {
        let options = [...event.target.options].filter(o => o.selected).map(o => o.value);
        this.setState({ [event.target.name]: options },
            () => this.props.submit(this.state))
    }

    updateFormValueCheck = (event) => {
        this.setState({ [event.target.name]: event.target.checked },
            () => this.props.submit(this.state))
    }

    render() {
        return (
            <div className="h5 bg-info text-white p-2">
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.updateFormValue}
                    />
                </div>
                <div className="form-group">
                    <label>Ice Scream Flavors</label>
                    {/*<select className="form-control"*/}
                    {/*    name="flavor" value={this.state.flavor}*/}
                    {/*    onChange={this.updateFormValue}>*/}
                    {/*    {this.flavors.map(flavor =>*/}
                    {/*        <option value={flavor} key={flavor}>*/}
                    {/*            {flavor}*/}
                    {/*        </option>*/}
                    {/*    )}*/}
                        
                    {/*</select>*/}
               
                    <div className="form-group">
                        {this.flavors.map(flavor =>
                            <div className="form-check" key={flavor}>
                                <input className="form-check-input"
                                    type="radio" name="flavor" value={flavor}
                                    checked={this.state.flavor === flavor}
                                    onChange={this.updateFormValue} />
                                <label className="form-check-label">
                                    {flavor}
                                </label>
                            </div>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox"
                            name="TwoScoops"
                            checked={this.state.TwoScoops}
                            onChange={this.updateFormValueCheck}
                        />
                        <label className="form-check-label">TwoScoops</label>
                    </div>
                </div>
            </div>
            )
    }
}