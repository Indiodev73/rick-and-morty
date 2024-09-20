## Filter characters:
You can also include filters in the URL by including additional query parameters. To start filtering add a ? followed by the query <query>=<value>. If you want to chain several queries in the same call, use & followed by the query.

For example, If you want to check how many alive Ricks exist, just add ?name=rick&status=alive to the URL.

Available parameters:

name: filter by the given name.
status: filter by the given status (alive, dead or unknown).
species: filter by the given species.
type: filter by the given type.
gender: filter by the given gender (female, male, genderless or unknown).

URL='https://rickandmortyapi.com/api/character/?name=rick&status=alive'

## Get all characters
You can access the list of characters by using the /character endpoint.

URL='https://rickandmortyapi.com/api/character'

## Paginacion

URL = 'https://rickandmortyapi.com/api/character/?page=2&name=morty' 

[![55.png](https://i.postimg.cc/Wpgpjzwv/55.png)](https://postimg.cc/mhZWybnX)
