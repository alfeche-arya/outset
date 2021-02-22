import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Todo({ todo, index, completeTodo, removeTodo}) {
    return (
        <div style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "white", margin: "20px", padding: "10px"}}>
                {todo.text}
                <div>
                    <Button variant="success" onClick={() => completeTodo(index)} style={{marginRight: "10px"}}> Complete </Button>
                    <Button variant="danger" onClick={() => removeTodo(index)}>x</Button>
                </div>
            </div>
        </div>
    )
}

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                classname="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Enter task here and press enter to add"
                style={{width: "50%", height: "40px"}}
            />
        </form>
    );
}

function Visions() {
    const [todos, setTodos] = React.useState([
        {
            text: "Learn about React Hooks",
            isCompleted: false
        },
        {   
            text: "Make short ribs for dinner",
            isCompleted: false
        },
        {
            text: "Implement visions component",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text}];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    
    return (
        <Container style={{margin: "80px auto", width: "50em", backgroundColor: "whitesmoke"}}>
            <div style={{padding: "20px 0px 0px 20px"}}>
                <h4 style={{textAlign: "center"}}>My First Vision Board</h4>
            </div>
            <div style={{marginTop: "40px", textAlign: "center"}}>
                <TodoForm addTodo={addTodo} />
            </div>
            <div style={{padding: "20px"}}>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Visions;