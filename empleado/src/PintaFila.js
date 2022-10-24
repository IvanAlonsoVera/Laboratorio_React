import React, { Component } from 'react';

export class PintaFila extends Component {
    render = () =>
        <tr key = {this.props.Empleados.id} >
            <td>{this.props.Empleados.id}</td>
            <td>{this.props.Empleados.name}</td>
            <td>{this.props.Empleados.cargo}</td>
            <td><img src={this.props.Empleados.foto} /></td>
            <td><input className="btn btn-primary" type="button" value="Seleccionar" /></td>
        </tr>
}