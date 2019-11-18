import React from 'react';

const TodoBody = props => {

    const changeTodoStatus = (index) => {
        props.changeTodoStatus(index)
    }
    const renderTodoList = () => {
        return props.todoList.map((todo, index) => {
            return <div className='todo-list' key={`todo-list-${index}`}>
                <input onChange={changeTodoStatus.bind(this, index)} type="checkbox" checked={todo.isDone} />
                <span>{todo.value}</span>
                <button onClick={() => props.deleteTodo(index)}>{'delete'}</button>
            </div>
        })
    }

    return <>
        {renderTodoList()}
    </>
}

export default TodoBody