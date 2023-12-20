import React, { useState } from 'react'
import useGetPokemonDataRequest from '../../../services/requests/useGetPokemonDataRequest';

const useSearchBar = () => {
    
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, pokemon, getPokemonRequest, pokemonRes } = useGetPokemonDataRequest();
 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleIconButtonClick = () => {
    getPokemonRequest(searchValue);
  };

  return {
    searchValue,
    isLoading,
    pokemon,
    pokemonRes,
    getPokemonRequest,
    handleInputChange,
    handleIconButtonClick
  }
}

export default useSearchBar
