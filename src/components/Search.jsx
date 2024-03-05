const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar:</h2>
        <input type="text" value={search} onChange={(evento)=> setSearch(evento.target.value)} placeholder="Digite para pesquisar"/>
    </div>
  )
}

export default Search