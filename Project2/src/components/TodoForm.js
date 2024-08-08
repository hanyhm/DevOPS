import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action of form
        e.preventDefault();
        if (value) {
          // pass input value to parent
          addTodo(value);
          // clear form
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Add task?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}