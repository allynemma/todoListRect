const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(evento) => setFilter(evento.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>Ordem alfabética:</div>
            <button onClick={()=>setSort("A-Z")}>A-Z</button>
            <button onClick={()=>setSort("Z-A")}>Z-A</button>
        </div>
    </div>
  )
}

export default Filter