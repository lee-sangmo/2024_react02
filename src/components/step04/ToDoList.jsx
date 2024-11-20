import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function ToDoList(props) {
  const [todos, setTodos] = useState(['Learn React','Build a Project'])
  const [newTodo, setNewTodo] = useState('')

  // 리스트에서 삭제
  const deleteTodo = (index) => {
    // filter 메서드의 콜백 함수 매개변수
    // 첫번째 매개변수 _ 는 배열의 각 요소를 의미(지금은 사용하지 않으므로 _)
    // 두번째 매개변수 i 는 index를 의미한다
    setTodos(todos.filter((_, i) => i !== index));
  }

  // 리스트에 삽입
  const addTodo = () => {
    if(newTodo.trim !== null){
      // ...todos는 todos의 배열을 복사해서 가져온다
      // 기존 todos 배열에 새로운 정보를 가진 newTodo를 추가한다
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  }
  return (
    <div className='ToDoListBox'>
      <h2>Todo List</h2>
      <ul>
        {/* 
        <li>Learn React {' '} <Button variant="contained">Delete</Button></li><br />
        <li>Build a Project {' '} <Button variant="contained">Delete</Button></li> 
        */}
        {todos.map((todo, index) => (
          <li key={index}>{todo} &nbsp; &nbsp; &nbsp;
          <Button variant="contained"
            onClick={() => deleteTodo(index)}>Delete</Button></li>
        ))}
      </ul>
      <br />
      <p>Typing: {newTodo}</p>
      <TextField id="standard-basic" label="Search" variant="standard" 
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      /> &nbsp; &nbsp; &nbsp;
      <Button variant="contained" onClick={addTodo}>Add New Task</Button>
    </div>
  );
}

export default ToDoList;