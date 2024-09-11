import './style/app.css'
import { Titulo } from './components/Titulo'
import { Footer } from './components/Footer'
import { Spinner } from './components/Spinner'
import { Errores } from './components/Errores'
import { SubTitulo } from './components/SubTitulo'
import { useErrores } from './hooks/useErrores'
import { Formulario } from './components/Formulario'
import { Personajes } from './components/Personajes'
import { Paginacion } from './components/Paginacion'
import { usePersonajes } from './hooks/usePersonajes'

export function App () {
  const { query, errores, setQuery } = useErrores()
  const { iniciarBuscar, character, cargando, onChangePage, page } = usePersonajes({ query })

  return (
    <div className='page'>
      <header>
        <Titulo />
        <SubTitulo />
        <Formulario setQuery={setQuery} iniciarBuscar={iniciarBuscar} query={query} />
        {errores && (<Errores dataError={errores} />)}
      </header>
      <main>
        {cargando && (<Spinner />)}
        <Personajes character={character} />
      </main>
      <Footer />
      <Paginacion onChangePage={onChangePage} page={page} />
    </div>
  )
}
