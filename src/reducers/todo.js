export default function todo(state = [], action) {
    switch (action.type) {
        case 'getList': 
            return action.todos;
        
        case 'addTodo':
            return action.todo;
        
        case 'toggleTodo':
            return action.todos;
        
        case 'deleteTodo':
            return action.todos;
            
        default:
            return state;
    }
}