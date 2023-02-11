import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';

function App() {

  const [todo, setTodo] = useState([])

  return (
    <Container>
      <Header />
      <AddTodo  todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
