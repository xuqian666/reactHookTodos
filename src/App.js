import React, { useState } from 'react';
import TodoHeader from './Todo/TodoHeader';
import TodoBody from './Todo/TodoBody';
import TodoFooter from './Todo/TodoFooter';
import './App.css'


const ToDoDemo = () => {

	const getInitData = () => {
		return localStorage.getItem('todoListData') ? JSON.parse(localStorage.getItem('todoListData')) : []
	}

	const [todoList, setTodoList] = useState(getInitData())

	const saveDataInLocal = (data) => {
		localStorage.setItem('todoListData', JSON.stringify(data))
	}

	const addTodo = (value) => {
		setTodoList(prev => {
			saveDataInLocal([{value: value, isDone: false}, ...prev])
			return [{value: value, isDone: false}, ...prev]
		})
	}

	const deleteTodo = (index) => {
		setTodoList(prev => {
			prev.splice(index, 1);
			saveDataInLocal([...prev])
			return [...prev]
		})
	}
	
	const clearDone = () => {
		setTodoList(prev => {
			prev = prev.filter(i => !i.isDone);
			saveDataInLocal([...prev])
			return [...prev]
		})
	}

	const changeTodoStatus = (index) => {
		setTodoList(prev => {
			prev[index].isDone = !prev[index].isDone;
			saveDataInLocal([...prev])
			return [...prev]
		})
	}

	const checkedAll = () => {
		const isAllChecked = todoList.every(t => t.isDone)
		setTodoList(prev => {
			prev.forEach(p => {
				p.isDone = isAllChecked ? false : true
			})
			saveDataInLocal([...prev])
			return [...prev]
		})
	}

	return <div className="todo-list-demo">
		<TodoHeader addTodo={addTodo} />
		<TodoBody todoList={todoList} deleteTodo={deleteTodo} changeTodoStatus={changeTodoStatus} />
		<TodoFooter todoList={todoList} clearDone={clearDone} checkedAll={checkedAll} />
	</div>
}

export default ToDoDemo;

