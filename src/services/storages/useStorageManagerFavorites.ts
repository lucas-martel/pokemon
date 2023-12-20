import { FAV_KEY } from "../../utils/constants";
import { FavoritesLS, IPokemonData, Operation } from "../../utils/types";

export const getFavorites = () => {
  const data = localStorage.getItem(FAV_KEY);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

export const setFavorites = (favPokemon: IPokemonData, op: Operation) => {
  let data = getFavorites() as FavoritesLS;

  if (!data) {
    data = { favs: [] };
  }

  if (op === Operation.add) {
    data.favs.push(favPokemon);
  } else {
    data.favs = data.favs.filter((fav) => fav.id !== favPokemon.id);
  }

  localStorage.setItem(FAV_KEY, JSON.stringify(data));
};

export const IsPokemonFavorite = (id: string) => {
  const data = getFavorites() as FavoritesLS;

  if (!data) {
    return false;
  }

  return data.favs.some((pokemon) => pokemon.id === id);
};
