import React, { useState } from 'react';

const TodoHeader = props => {
    const [value, setValue] = useState('')
    
    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const addTodo = (e) => {
        if(value){
            setValue('');
            props.addTodo(value, e);
        }
    }
    
    return <>
        <input value={value} onChange={e => changeValue(e)} onKeyDown={e => e.keyCode === 13 ? addTodo(e) : null} type="text" placeholder='what needs to be done?' />
    </>
}

export default TodoHeader