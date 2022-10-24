import React, { Component } from 'react';
import { Banner } from './Banner';
import { PintaFila } from './PintaFila';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Empleados: [{ id: 152, name: "pepe", cargo: "consejero", foto: "./img/pepe.png" },
            { id: 345, name: "jose", cargo: "delegado", foto: "./img/jose.png" },
            { id: 875, name: "javi", cargo: "tutor", foto: "./img/javi.png" },
            { id: 234, name: "pedro", cargo: "profesor", foto: "./img/pedro.png" }]
        }
    }

    pintarTabla = () => {
        this.state.Empleados.map(Empleados => <PintaFila Empleados="Empeados" />)
    }

    render() {
        return (
            <>
                <Banner />
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr><td>IdEmpleado</td><td>Nombre</td><td>Carga</td><td>foto</td><td></td></tr>
                    </thead>
                    <tbody>
                        <PintaFila/>
                    </tbody>
                </table>
            </>

        )
    }
}

