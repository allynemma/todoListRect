import React from 'react'
const ToDo = ({ toDo, removeToDo, completarToDo }) => {
  return (
    <div className="toDo" style={{textDecoration: toDo.isCompleted ? "line-through" : "" }} >
        <div className="content">
            <p>{toDo.text}</p>
            <p>({toDo.category})</p>
            <button className='complete' onClick={() => completarToDo(toDo.id)}>Completar</button>
            <button className='remove' onClick={() => removeToDo(toDo.id)}>x</button>
          </div>
      </div>
  )
}

export default ToDo