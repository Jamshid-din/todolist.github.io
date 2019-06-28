import React from "react";
import TodoForm from "./TodoForm"
import "./TodoList.css";
import FlipMove from "react-flip-move"

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            todos: [],
            buttonName: "all"
        }
        this.addTodo = this.addTodo.bind(this);
        this.crossList = this.crossList.bind(this);
        this.buttonStatus = this.buttonStatus.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }
    // Add items to the array
    addTodo = todo => {
            this.setState({
            todos: [todo, ...this.state.todos]
        })
    }
    // Crossline when the task is done
    crossList = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }
                else{
                    return todo;
                }
            })
        })
    }

    // Status of the button "Done, Undone, Trash All"
    buttonStatus = (s) => {
        this.setState({
            buttonName: s
        })
    }

    // Delete selected 
    handleDelete  = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    //Delete all tasks
    removeAll = () => {
        this.setState({
            todos: []
        })
    }



    render(){
        let todos =[];
        if(this.state.buttonName === "all"){
            todos = this.state.todos;
        }
        let todosLen = todos.length;
        
        return(
            <div className="todoListMain">
                <div className="header">
                    <h1>Todo App</h1>
                    
                    <TodoForm onSubmit={this.addTodo}/>
                    <ul className="theList">

                        <FlipMove>
                                {todos.map( (todo) => (
                                    <li 
                                        key={todo.id}
                                        onClick={() => this.handleDelete(todo.id)}>
                                        {todo.text}{console.log(todo.id,todo.text)}
                                    </li>
                                ))}

                                {this.state.todos.length ? <button onClick={this.removeAll}>Trash All</button> : null}
                        </FlipMove>
                    </ul>
                </div>
            </div>
        )
    }
}
export default App;