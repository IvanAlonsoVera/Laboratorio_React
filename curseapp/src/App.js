import React, { Component } from 'react';
import { Editor } from "./Editor";
import { Display } from "./Display";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        }
    }
    submitData = (newData) => {
        this.setState({formData:newData})
    }

    render() {
        return <div className="container-fluid">
            <div className="row p-2">
                <Editor submit={this.submitData}/>
            </div>
        </div>

    }
}
