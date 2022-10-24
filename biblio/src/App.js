import React, { Component } from 'react';
import { Banner } from './Banner';
import { TableBook } from './TableBooks';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBook: [
                { name: "Programa en C", borrowed: false },
                { name: "Master en DEV", borrowed: false },
                { name: "Aprende JS", borrowed: true },
                { name: "Arregla Visual Studio", borrowed: false }]
        }
    }

    TablePrint = () => {
        return this.state.listBook.map(() =>
            <TableBook key={this.state.listBook.name} book={this.state.listBook.name} borrowed={this.state.listBook.borrowed} />
        );   
    }



    render() {
        return (
            <>
                <Banner />
                <table key="TableBook" className="table table-striped table-bordered">
                    <thead>
                        <tr><th>Nombre</th><th>Prestamo</th></tr>
                    </thead>
                    <tbody>
                        {this.TablePrint()}
                    </tbody>
                </table>
            </>
            )
    }
}