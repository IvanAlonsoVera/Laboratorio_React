import React, { Component } from 'react';
import { TodoBanner } from './TodoBanner';
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './TodoRow';
import { VisibilityControl } from "./VisibilityControl";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Adam",
            todoItems: [{ action: "Buy Flowers", done: false },
                { action: "Get Shoes", done: false },
                { action: "Collect Tickets", done: true },
                { action: "Call Joe", done: false }],
            showCompleted:true
        }
    }

    createNewTodo = (task) => {
        if (!this.state.todoItems.find(items => items.action === task)) {
            this.setState({
                todoItems: [...this.state.todoItems, { action: task, done: false }]
            },()=> localStorage.setItem("todos",JSON.stringify(this.state)));
        }
    }

    toggleTodo = (todo) => this.setState({
        todoItems: this.state.todoItems.
            map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
    });

    todoTableRows = (doneValue) => this.state.todoItems.filter(item=>item.done === doneValue)
        .map(item =>
        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />)
        
    componentDidMount = () => {
        let data = localStorage.getItem("todos");
        this.setState(data != null ? JSON.parse(data) :
            {
                userName: "Adam",
                todoItems: [{ action: "Buy Flowers", done: false },
                { action: "Get Shoes", done: false },
                { action: "Collect Tickets", done: true },
                { action: "Call Joe", done: false }],
                showCompleted: true
            });

    }


    render() {
        return (
            <div className="text-center">
                <TodoBanner name={ this.state.userName} tasks={ this.state.todoItems} />
                <div className="container-fluid">
                    <TodoCreator callback={this.createNewTodo } />
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{ this.todoTableRows(false) }</tbody>
                </table>
                <div className="bg-secondary text-white text-center p-2">
                    <VisibilityControl description="Completed tasks"
                        isChecked={this.state.showCompleted}
                        callback={(checked) => this.setState({showCompleted:checked})}/>
                </div>
                {this.state.showCompleted && 
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>Description</th><th>Done</th></tr>
                        </thead>
                        <tbody>{this.todoTableRows(true)}</tbody>
                    </table>
                }
            </div>
            )
    }
}

//Método componentDidMount(): nos permite ejecutar el codigo React cuando 
//el componente ya se ha montado en el DOM. Vive en la fase de montaje de React
