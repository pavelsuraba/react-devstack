import React, {Component} from 'react';
import TodoApp from 'components/TodoApp/TodoApp';
import Heading from 'components/Heading/Heading';
import TodoList from 'components/TodoList/TodoList';
import CreateTodo from 'components/CreateTodo/CreateTodo';

const todos = [
    {
        task: 'Make Todo app',
        isCompleted: false
    },
    {
        task: 'Buy milk',
        isCompleted: false
    },
    {
        task: 'Make dinner',
        isCompleted: false
    }    
]

export default class Main extends Component {
    constructor() {
        super();

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

        this.state = {
            todos
        }
    }
    addTodo(task) {
        const newState = [...this.state.todos];
        newState.unshift({
            task,
            isCompleted: false        
        });
        this.setState({todos: newState});
    }
    removeTodo(id) {
        const todos = this.state.todos;
        const newState = [
            ...todos.slice(0, id),
            ...todos.slice(id + 1)
        ];
        this.setState({todos: newState});
    }    
    render() {
        return (
            <TodoApp>
                <Heading>React Todo app</Heading>
                <CreateTodo addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
            </TodoApp>
        )
    }
}