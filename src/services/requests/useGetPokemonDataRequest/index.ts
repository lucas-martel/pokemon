import { useState } from "react";
import { IPokemonData } from "../../../utils/types";
import axios from "axios";
import { voidPokemon } from "../../../utils/constants";

const useGetPokemonDataRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemonData>({
    name: "",
    id: "-1",
    imgLink: "",
    types: [],
  });

  const [pokemonRes, setPokemonRes] = useState(-1)

  const getPokemonRequest = async (id: string) => {
    try {
      setIsLoading(true);
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      
      const abilitiesList: [{is_hidden: boolean, ability: {name: string}}] = resp.data.abilities;

      const abilities: string[] = [];
      const hiddenAbilities: string[] = [];

      for(let i = 0; i < abilitiesList.length; i++) {
        if(abilitiesList[i].is_hidden){
            hiddenAbilities.push(abilitiesList[i].ability.name)
        }else{
            abilities.push(abilitiesList[i].ability.name)
        }
      }

      const pokemon: IPokemonData = {
        name: resp.data.name,
        id: resp.data.id,
        imgLink: resp.data.sprites.front_default,
        types: resp.data.types.map(
          (type: { type: { name: string } }) => type.type.name
        ),
        abilities: abilities,
        hiddenAbilities: hiddenAbilities,
        hp: resp.data.stats[1].base_stat,
        attack: resp.data.stats[0].base_stat,
        defense: resp.data.stats[1].base_stat,
        specialAtack: resp.data.stats[1].base_stat,
        specialDefense: resp.data.stats[1].base_stat,
        speed: resp.data.stats[1].base_stat,
      };
      setPokemon(pokemon);
      setPokemonRes(1)
    } catch (error) {
      setPokemonRes(0)
      setPokemon(voidPokemon)
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    pokemon,
    pokemonRes,
    getPokemonRequest,
  };
};

export default useGetPokemonDataRequest;
