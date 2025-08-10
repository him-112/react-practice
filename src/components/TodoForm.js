import React, {useState} from 'react';

function TodoForm( {onAddTodo} ) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue.trim()) return;
        console.log(`Adding a new todo: ${inputValue}`);
        onAddTodo(inputValue);
        setInputValue('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    )

}

export default TodoForm;