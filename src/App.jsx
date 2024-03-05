import { useState } from 'react';
import "./App.css";
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "Conseguir o estágio na Santos Brasil",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar SQL",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar python",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Estudar react",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A-Z");
  const addTodo = (text, category) => {
    const newToDos = [
      ...toDos, 
      {
        id: Math.floor(Math.random()*10000), //não entendi
        text,
        category,
        isCompleted: false,
    },
  ];
    setToDos(newToDos);
  };
  const removeToDo = (id) => {
    const newTodos = [...toDos];
    const filteredTodos = newTodos.filter((toDo) =>
      toDo.id !== id ? toDo : null
    );
    setToDos(filteredTodos);
  }
  const completarToDo = (id) => {
    const newTodos = [...toDos]
    newTodos.map((toDo) => toDo.id === id ? toDo.isCompleted = !toDo.isCompleted : toDo);
    setToDos(newTodos);
  }
  return (<div className="app">
    <h1>Lista de tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="toDo-list">
      {toDos
      .filter((toDo) => filter === "All" ? true : filter === "Completed" ? toDo.isCompleted : !toDo.isCompleted)
        .filter((toDo) => (
          toDo.text.toLowerCase().includes(search.toLowerCase()))
          )
        .sort((a,b)=> sort === "A-Z" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} completarToDo={completarToDo}/>
      ))}
    </div>
    <ToDoForm addTodo={addTodo}/>
  </div>)
}
//key é que nem em banco de dados, é único, evita repetições
export default App;
