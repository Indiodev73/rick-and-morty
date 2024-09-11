export function Formulario ({ setQuery, iniciarBuscar, query }) {
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    iniciarBuscar()
  }

  return (
    <form className='formulario' onSubmit={handleSubmit}>
      <input
        type='search'
        name='buscar'
        placeholder='Ej: Rick Sanchez ...'
        value={query}
        onChange={handleChange}
      />
      <button type='submit'>Buscar</button>
    </form>
  )
}
