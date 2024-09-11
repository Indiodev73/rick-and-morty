import { useEffect, useRef, useState } from 'react'

export function useErrores () {
  const [query, setQuery] = useState('')
  const [errores, setErrores] = useState(null)
  const primeraBusqueda = useRef(true)

  useEffect(() => {
    if (primeraBusqueda.current) {
      primeraBusqueda.current = query === ''
      return
    }
    if (query === '') {
      setErrores('La búsqueda no se puede realizar con el casillero vacío')
      return
    }
    if (query.match(/^\d+$/)) {
      setErrores('No se puede hacer la búsqueda con un número')
      return
    }
    if (query.length < 3) {
      setErrores('La búsqueda debe tener más de dos caracteres')
      return
    }
    setErrores(null)
  }, [query])

  return { query, errores, setQuery }
}
