import { API_URL } from '../config/config'

export async function buscarPersonajes ({ page, query }) {
  // if (query === '') return null
  try {
    const response = await fetch(`${API_URL}/?page=${page}&name=${query}`)
    const res = await response.json()
    // const data = res.results

    // return data?.map((dato) => ({
    //   id: dato.id,
    //   nombre: dato.name,
    //   estado: dato.status,
    //   foto: dato.image,
    //   genero: dato.gender,
    //   especie: dato.species
    // }))
    return res
  } catch (e) {
    throw new Error('error searching character')
  }
}

// export async function obtenerPersonajes () {
//   try {
//     const response = await fetch(API_URL)
//     const res = await response.json()
//     return res
//   } catch (error) {
//     throw new Error('error getting characters')
//   }
// }
