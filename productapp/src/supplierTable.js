import React, { Component } from "react";
import { SupplierTableRow } from "./SupplierTableRow";


export class SupplierTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th colSpan="5" className="bg-primary text-white text-center h4 p-2">
                        SUPPLIERS
                    </th>
                    
                </tr>
                <tr>
                    <th>ID</th><th>NAME</th><th>CITY</th><th>PRODUCTS</th><th></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.suppliers.map(s =>
                        <SupplierTableRow supplier={s}
                            key={s.id}
                            editCallback={this.props.editCallback}
                            deleteCallback={this.props.deleteCallback} />
                    )
                }
            </tbody>
        </table>
    }
}