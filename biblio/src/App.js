import React, { Component } from 'react';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBook: [{ book: "Programa en C", borrowed: false },
            { book: "Master en DEV", prestado: false },
                { book: "Aprende JS", borrowed: true },
                { book: "Arregla Visual Studio", borrowed: false }],
        }
    }

    render() {
        
    }
}