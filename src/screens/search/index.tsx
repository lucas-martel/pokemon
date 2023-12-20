import React from "react";
import { IPokemonData } from "../../utils/types";
import PokemonViewContainer from "../../components/pokemonViewContainer";
import { pokemonPagesInfos} from "../../utils/constants";
import { CircularProgress, Pagination, Stack } from "@mui/material";
import SearchBar from "../../components/searchBar";
import useSearch from "./hooks/useSearch";

const Main: React.FC = () => {
  const {
    isLoading,
    pokemonData,
    isSearch,
    pokemonSearch,
    onChangePage,
    handleSelectPokemonView,
    handleOnSubmmitSearch,
  } = useSearch();

  const renderPokemonViews = () => {
    return pokemonData.map((data: IPokemonData, key) => (
      <PokemonViewContainer
        key={key}
        pokemon={data}
        onClick={() => handleSelectPokemonView(data.id)}
      />
    ));
  };

  const renderPokemonSearch = () => {
    return (
      <PokemonViewContainer
        pokemon={pokemonSearch}
        onClick={() => handleSelectPokemonView(pokemonSearch.id)}
      />
    );
  };

  return (
    <>
      <h1>Hello, Pokémon Trainer!</h1>
      <p>Here we have all pokémon registrations that you might need.</p>
      <SearchBar
        failedMsgError="No results found"
        onSearch={handleOnSubmmitSearch}
      />
      {isLoading && <CircularProgress />}
      <Stack
        spacing={{ xs: 2, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {isSearch === -1 && renderPokemonViews()}
        {isSearch === 1 && renderPokemonSearch()}
      </Stack>
      <Pagination
        onChange={onChangePage}
        count={pokemonPagesInfos.totalPages}
      />
    </>
  );
};

export default Main;
