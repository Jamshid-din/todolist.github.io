import React from "react"
import shortid from "shortid"
class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
// Handle the input field
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
// Handle add button
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit({
            id:  shortid.generate(),
            text: this.state.text,
            complete: false
        });

        this.setState({
            text: ""
        })
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.text} 
                    placeholder="enter a task"
                    name="text"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Add</button><br/>
            </form>
        )
    }
}
export default TodoForm;