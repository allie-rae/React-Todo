import React from 'react';

const Todo = props => {
    return (
        <div key={props.todo.id} 
             onClick={() => props.toggleCompleted(props.todo.id)}
             style={props.todo.completed ? { textDecoration: 'line-through' } : null}>
            {props.todo.task}    
        </div>
    );
};

export default Todo;