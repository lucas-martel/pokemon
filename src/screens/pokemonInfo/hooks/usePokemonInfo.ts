import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useGetPokemonDataRequest from "../../../services/requests/useGetPokemonDataRequest";
import { IsPokemonFavorite, setFavorites } from "../../../services/storages/useStorageManagerFavorites";
import { Operation } from "../../../utils/types";

const usePokemonInfo = () => {
  const location = useLocation();
  const { id } = location.state;
  const { pokemon, getPokemonRequest, isLoading } = useGetPokemonDataRequest();
  const [isFavorite, setIsFavorite] = useState(IsPokemonFavorite(id));

  useEffect(() => {
    getPokemonRequest(id);
    console.log("asd");
  }, [id]);

  const toggleFavoriteStatus = async () => {
    setIsFavorite((oldFav) => !oldFav);
    await setFavorites(pokemon, !isFavorite ? Operation.add : Operation.remove);
  };

  return {
    location,
    id,
    isLoading,
    pokemon,
    isFavorite,
    toggleFavoriteStatus
  };
};

export default usePokemonInfo;
