import { IPokemonData } from "./types"

export const pokemonPagesInfos = {
    pokemonsPerPage: 12,
    totalPages: 16
}

export const FAV_KEY:string = "favorites"

export const voidPokemon: IPokemonData = {
    id: "",
    imgLink: "",
    name: "",
    types: [],
    abilities: [],
    attack: -1,
    defense: -1,
    hiddenAbilities: [],
    hp: 0,
    specialAtack: 0,
    specialDefense: 0,
    speed: 0,
  };