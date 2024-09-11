import { useEffect, useState } from 'react'
import { buscarPersonajes } from '../services/services'

export function usePersonajes ({ query }) {
  const [character, setCharacter] = useState([])
  const [cargando, setCargando] = useState(false)
  const [page, setPage] = useState(1)

  const onChangePage = (next) => {
    if (!character.prev && page + next <= 0) return
    if (!character.next && page + next >= 4) return
    setPage(page + next)
  }

  const iniciarBuscar = async () => {
    try {
      setCargando(true)
      const buscar = await buscarPersonajes({ page, query })
      setCharacter(buscar)
    } catch (error) {
      console.log(error)
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    iniciarBuscar()
  }, [page])

  return { iniciarBuscar, character, cargando, onChangePage, page }
}
