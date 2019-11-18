import React from 'react';

const TodoFooter = props => {
    const doneLength = props.todoList.filter(i => i.isDone).length;
    const unDoLength = props.todoList.length - doneLength;
    return <div className='todo-footer'>
        {
            props.todoList.length > 0 ? 
            <>
                <input onChange={props.checkedAll} type='checkbox' checked={props.todoList.every(i => i.isDone)} />
                <span>{'Check all items'}</span>
                <br />
                <span>{`${unDoLength} items left`}</span>
            </> : null
        }
        {
            doneLength ? <button onClick={props.clearDone}>{`Clear ${doneLength} completed items`}</button> : null
        }
    </div>
}

export default TodoFooter