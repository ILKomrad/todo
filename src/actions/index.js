import axios from 'axios';

export function getTodos() {
    return axios.get('/getList')
                .then(res => res.data)
                .then(todos => {
                    return {
                        type: 'getList',
                        todos: todos.todos
                    }
                })
}

export function addTodo(todo) {
    return axios.post('/addTodo', {todo: todo})
                .then(res => {
                    return res.data
                })
                .then(todo => ({
                    type: 'addTodo',
                    todo: todo.todo
                }))
}

export function toggleTodo(id) {
    return axios.post('/toggleTodo', {id: id})
                .then(res => res.data)
                .then(todos => ({
                    type: 'toggleTodo',
                    todos: todos.todos
                }))
}

export function deleteTodo(id) {
    return axios.post('/deleteTodo', {id: id})
                .then(res => res.data)
                .then(todos => ({
                    type: 'deleteTodo',
                    todos: todos.todos
                }));
}

export function visibilityFilter(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}