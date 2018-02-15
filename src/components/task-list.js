import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.done = this.done.bind(this);
        this.delete = this.delete.bind(this);
    }
    componentDidMount() {
        //console.log( this.props.todos );
    }

    componentDidUpdate() {
        //console.log(this.props)
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const th = this;

        const todo = {
            title: th.state.title,
            content: th.state.content,
        }

        th.props.onAdd(todo);
    }

    done(id) {
        this.props.onToggle(id)
    }

    delete(id) {
        this.props.onDelete(id);
    }

    render() {
        let list = [];

        if (this.props.todos) {
            list  = this.props.todos.map((todo, i) => {
                return  <li key={i} className={"todo" + (todo.done ? ' done' : '')}>
                            {todo.title}
                            <p>
                                {todo.content}
                            </p>
                            <p>
                                {todo.id}
                            </p>
                            <p>
                                {todo.done}
                            </p>
                            <button onClick={() => this.done(todo.id)}>done</button>
                            <button onClick={() => this.delete(todo.id)}>delete</button>
                            <hr/>
                        </li>
            });
        } 

        return (
            <div>
                <ul>
                    {list}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange} />
                    <input type="text" 
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default TaskList;