import './App.css';
import List from './components/List';
import TodoList from './services/todolist';

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <List list={TodoList} />
    </>

  );
}

export default App;
