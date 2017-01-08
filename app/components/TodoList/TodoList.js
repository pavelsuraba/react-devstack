import React from 'react';
import Counter from 'components/Counter/Counter';
import TodoListItem from 'components/TodoListItem/TodoListItem';
import Info from 'components/Info/Info';

const TodoList = (props) => {
    const todos = props.todos;
    const removeTodo = props.removeTodo;

    function renderTodos() {
        return todos.map((todo,i) => <TodoListItem {...todo} key={i} id={i} removeTodo={removeTodo}/>);
    }

    function view() {
        if(todos.length > 0) {
            return (
                <div>
                    <ul>
                        {renderTodos()}
                    </ul>
                    <Counter number={todos.length}/>
                </div>
            )
        }
        return <Info text="Nothing to do"/>
    }
    return view();
}

export default TodoList;