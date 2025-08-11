import React, { useCallback } from "react";
import "../App.css";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import useLocalStorageState from "../hooks/useLocalStorageState";
import todoReducer from "../reducers/todo.reducer"


const APP_STORAGE_KEY = 'react-todo-app-todos';

function App() {
  const [todos, dispatch] = useLocalStorageState(
    APP_STORAGE_KEY, 
    [],
    todoReducer
  )

  const handleDelete = useCallback((id) => dispatch({ type: 'DELETE', id}), [dispatch]);
  const handleToggle = useCallback((id) => dispatch({ type: 'TOGGLE', id}), [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React To-Do App</h1>
        <TodoForm onAddTodo={(text) => dispatch({ type: 'ADD', text: text })} />
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todos.id}
            {...todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
            />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
