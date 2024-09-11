import { Genero } from './Genero'
import { Estado } from './Estado'
import { Especie } from './Especie'
import { CartTitle } from './CartTitle'

export function ListaPersonajes ({ character }) {
  return (
    <ul className='boxes'>
      {character?.results?.map((data) => (
        <li className='box' key={data.id}>
          <CartTitle name={data.name} />
          <img src={data.image} alt={data.name} />
          <p>
            <Estado status={data.status} />
            <Especie species={data.species} />
          </p>
          <p>
            <Genero gender={data.gender} />
          </p>
        </li>
      ))}

    </ul>
  )
}
