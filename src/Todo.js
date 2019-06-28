import React from "react"
import FlipMove from "react-flip-move"

export default props => (
    
        <li onClick={props.onDelete}>

            {props.todo.text}
           
        </li>
    
)