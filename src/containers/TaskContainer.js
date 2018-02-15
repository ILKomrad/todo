import { connect } from 'react-redux';
import TaskList from '../components/task-list';
import React from 'react';
import { addTodo, toggleTodo, deleteTodo } from '../actions';

function getFiltred(todos, filter) {
    switch (filter) {
        case 'all':
            return todos;
        case 'done':
            return todos.filter(todo => todo.done);
        case 'not-done':
            return todos.filter(todo => !todo.done);
        default:
            return [];
    }
}

function mapStateToProps(state) {
    return {
        todos: getFiltred(state.todo.todo, state.filter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: todo => dispatch(addTodo(todo)),
        onToggle: id => dispatch(toggleTodo(id)),
        onDelete: id => dispatch(deleteTodo(id))
    }
}

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);
export default TaskContainer;