import { useState } from 'react'

const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (evento) => {
        evento.preventDefault();
        if (!value || !category) return; //vai voltar com nada
        //para criar mais
        addTodo(value, category);
        //para limpar campos
        setCategory(""); //+ value={category} no select
        setValue(""); //+ value={value} no input
    }
    //target = input
  return <div className="toDo-form">
    <h2>Criar tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o título' value={value} onChange={(evento) => setValue(evento.target.value)}/>
        <select value={category} onChange={(evento)=>setCategory(evento.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button>Criar Tarefa</button>
    </form>
  </div>
}

export default ToDoForm