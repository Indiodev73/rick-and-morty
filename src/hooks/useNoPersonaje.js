import { obtenerPersonajes } from '../services/services'
import { useEffect, useState } from 'react'

export function useNoPersonaje () {
  const [character, setCharacter] = useState([])
  // console.log(character)

  const obtenerTodoPersonajes = async () => {
    try {
      const nuevoPersonaje = await obtenerPersonajes()
      setCharacter(nuevoPersonaje)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerTodoPersonajes()
  }, [])

  return { character }
}
