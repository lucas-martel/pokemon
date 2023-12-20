import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetPokemonRequest from "../../../services/requests/useGetPokemonsRequests";
import { pokemonPagesInfos, voidPokemon } from "../../../utils/constants";
import { routePath } from "../../../utils/Screens";
import { IPokemonData } from "../../../utils/types";

const useSearch = () => {
  const { isLoading, pokemonData, getPokemonRequest } = useGetPokemonRequest();
  const [isSearch, setIsSearch] = useState(-1);
  const [pokemonSearch, setPokemonSearch] = useState(voidPokemon);
  const navigate = useNavigate();
  const onChangePage = (_event: React.ChangeEvent<any>, page: number) => {
    const pokeOfsset = (page - 1) * (pokemonPagesInfos.pokemonsPerPage + 1);
    getPokemonRequest(pokemonPagesInfos.pokemonsPerPage, pokeOfsset);
  };

  const handleSelectPokemonView = (id: string) => {
    navigate(routePath.pkInfo, { state: { id } });
  };

  const handleOnSubmmitSearch = (
    searchSucess: number,
    pokemon: IPokemonData
  ) => {
    setIsSearch(searchSucess);
    setPokemonSearch(pokemon);
  };

  return {
    isLoading,
    pokemonData,
    getPokemonRequest,
    isSearch,
    pokemonSearch,
    navigate,
    onChangePage,
    handleSelectPokemonView,
    handleOnSubmmitSearch,
  };
};

export default useSearch;
