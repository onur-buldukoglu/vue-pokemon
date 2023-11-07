export interface PokemonListItem {
  name: string
  url: string
}

export interface PokemonDetails {
  id: number
  name: string
  order: number
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  types: PokemonType[]
}

export interface PokemonListResponse {
  count: number
  next: string
  previous: string
  results: PokemonListItem[]
}

interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}
