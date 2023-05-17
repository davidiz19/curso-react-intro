import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';
import { CreateTodoButton } from './CreateTodoButton';


function App() {
  return (
    <div className="App">

      <TodoCounter />   {/*Componente del contador de tareas restantes*/}
      <TodoSearch />    {/*Componente del buscador/filtro de las tareas (TODOs)*/}
      
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

     <CreateTodoButton /> 

    </div>
  );
}

export default App;
