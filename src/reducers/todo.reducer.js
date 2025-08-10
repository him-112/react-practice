const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: Date.now(), text: action.text, completed: false}];
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return state.map(
                todo => 
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

export default reducer;