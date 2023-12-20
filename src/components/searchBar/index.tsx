import React, { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useGetPokemonDataRequest from "../../services/requests/useGetPokemonDataRequest";
import { IPokemonData } from "../../utils/types";
import useSearchBar from "./hooks/useSearchBar";


const SearchBar: React.FC<{
  onSearch: (searchFound: number, pokemon: IPokemonData) => void;
  failedMsgError: string;
}> = ({ failedMsgError, onSearch }) => {
  
    const{
        pokemon,
        handleIconButtonClick,
        handleInputChange,
        isLoading,
        pokemonRes,
        searchValue
    } = useSearchBar();

    useEffect(() => {
      return onSearch(pokemonRes, pokemon);
    }, [pokemon])


  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleIconButtonClick}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          value={searchValue}
          onChange={handleInputChange}
          aria-labelledby="search"
          sx={{ ml: 1, flex: 1 }}
          placeholder="search by name or number"
          inputProps={{ "aria-label": "search" }}
        />
      </Paper>
      {(pokemonRes == 0  && <h4>{failedMsgError}</h4>)}
    </>
  );
};

export default SearchBar;
