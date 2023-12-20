import React from "react";
import { Box, Chip} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import usePokemonInfo from "./hooks/usePokemonInfo";

const PokemonInfo: React.FC = () => {
  const {pokemon, isFavorite, toggleFavoriteStatus } =
    usePokemonInfo();

  return (
    <Box>
      <Box>
        <div onClick={toggleFavoriteStatus}>
          {!isFavorite ? <StarBorderIcon /> : <StarIcon />}
        </div>
        <h1>{pokemon.name}</h1>
        <span>{pokemon.id}</span>
      </Box>

      <img src={pokemon.imgLink} alt="" />
      <Box>
        <h3>Information</h3>
        <div>
          <h4>Type</h4>
          {pokemon.types.map((type, key) => (
            <Chip key={key} label={type} />
          ))}
        </div>
        <div>
          <h4>Abilities</h4>
          {pokemon.abilities?.map((ability, key) => (
            <h5 key={key}>{ability}</h5>
          ))}
        </div>
        <div>
          <h4>Hidden Abilities</h4>
          {pokemon.hiddenAbilities?.map((ability, key) => (
            <h5 key={key}>{ability}</h5>
          ))}
        </div>
      </Box>
      <Box>
        <h4>Status Base</h4>
        <div>
          <h4>hp</h4>
        </div>
      </Box>
    </Box>
  );
};

export default PokemonInfo;
