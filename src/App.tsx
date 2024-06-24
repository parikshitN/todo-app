import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from "./Components/AddToDo";
import ToDo from './Model/ToDo';
import ToDoList from "./Components/ToDoList";

function App() {
    const [todos, setToDos] = useState<ToDo[]>([]);
    const addTodo = (toDo: ToDo) => {
        setToDos([...todos, toDo]);
    }
    return (
        <div className="App">
            <h1>To Do</h1>
            <AddToDo addToDo={addTodo}/>
            <ToDoList items={todos}/>
        </div>
    );
}

export default App;
