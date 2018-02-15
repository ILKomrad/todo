var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    i = 0,
    todos = {
        todo: [
            {
                id: i,
                title: 'task 1',
                content: 'cont 1',
                done: false,
            },
            {
                id: ++i,
                title: 'task 2',
                content: 'cont 2',
                done: false
            }
        ],
        filter: 'all'
    };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/getList', function(req, res) {
    res.json({
        todos: todos
    })
});

app.post('/addTodo', function(req, res) {
    const todo = {...req.body.todo, done: false, id: ++i};
    todos = {...todos, todo: [...todos.todo, todo]}

    res.json({
        todo: todos
    })
});

app.post('/toggleTodo', function(req, res) {
    const _todos = todos.todo.slice();
    todos.todo = _todos.map(function(todo) {
        if (todo.id == req.body.id) {
            return Object.assign({}, todo, {done: !todo.done});
        } else {
            return todo;
        }
    });
    todos = Object.assign({}, todos);

    res.json({
        todos: todos
    });
});

app.post('/deleteTodo', function(req, res) {
    const _todos = todos.todo.slice();
    todos.todo = _todos.filter(todo => todo.id !== req.body.id);
    todos = Object.assign({}, todos);

    res.json({
        todos: todos
    });
})

app.get('/', function(req, res) {
    res.send('d')
});

app.listen(3002, function() {
    console.log('3000');
})