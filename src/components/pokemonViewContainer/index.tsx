import { Box, Paper } from "@mui/material";
import React from "react";
import { IPokemonData } from "../../utils/types";

interface IProp {
  pokemon: IPokemonData
  onClick: (id: string) => void;
}

const PokemonViewContainer: React.FC<IProp> = (prop) => {
  return (
    <Paper onClick={() => prop.onClick(prop.pokemon.id)} elevation={1}>
      <h1>{prop.pokemon.name}</h1>
      <span>{prop.pokemon.id}</span>
      <img src={prop.pokemon.imgLink} alt={`${prop.pokemon.name} image`} />
      <div>
        {prop.pokemon.types.map((type, key) => (
          <span key={key}>{type}</span>
        ))}
      </div>
    </Paper>
  );
};

export default PokemonViewContainer;
