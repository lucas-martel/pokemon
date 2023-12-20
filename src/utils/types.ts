export interface IPokemonData {
    name: string
    imgLink: string
    types: string[]
    id: string
    abilities?: string[]
    hiddenAbilities?: string[]
    hp?: number
    attack?: number
    defense?: number
    specialAtack?: number
    specialDefense?: number
    speed?: number
}

export type FavoritesLS = {
   favs: IPokemonData[]
}

export enum Operation {
    add,
    remove
}