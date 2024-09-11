export function Paginacion ({ onChangePage, page }) {
  return (
    <section className='botonera'>
      <button onClick={() => onChangePage(-1)}>Anterior</button>
      <button>{page}</button>
      <button onClick={() => onChangePage(1)}>Siguiente</button>
    </section>
  )
}
