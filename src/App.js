import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList/>
    </div>
  );
}

export default App;
