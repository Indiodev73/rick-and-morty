import { ListaPersonajes } from './ListaPersonajes'
import { NoListaPersonajes } from './NoListaPersonajes'

export function Personajes ({ character }) {
  return (
    <>
      {character?.results?.length > 0
        ? (
          <ListaPersonajes character={character} />
          )
        : (
          <NoListaPersonajes />
          )}
    </>
  )
}
