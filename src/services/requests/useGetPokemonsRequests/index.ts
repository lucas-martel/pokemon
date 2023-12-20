import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemonData } from "../../../utils/types";
import { pokemonPagesInfos } from "../../../utils/constants";

const useGetPokemonRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);
  useEffect(() => {
    getPokemonRequest(pokemonPagesInfos.pokemonsPerPage, 0);
  }, []);

  const getPokemonRequest = async (limit: number, offset: number) => {
    try {
      setIsLoading(true);
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      );

      const detailedInfoPromises = resp.data.results.map(
        async (pokemon: { url: string }) => {
          try {
            const pokemonReq = await axios.get(pokemon.url);
            return pokemonReq.data;
          } catch (error) {
            console.error("Erro na obtenção de detalhes do Pokémon:", error);
            return null;
          }
        }
      );

      const detailedInfoResponses = await Promise.all(detailedInfoPromises);

      const pokemons: IPokemonData[] = detailedInfoResponses.map((resp) => ({
        id: resp.id,
        name: resp.name,
        imgLink: resp.sprites.front_default,
        types: resp.types.map((type: { type: { name: string }; }) => type.type.name),
      }));
      
      setPokemonData(pokemons)
    } catch (error) {
      console.error("Erro na obtenção da lista de Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    pokemonData,
    getPokemonRequest,
  };
};

export default useGetPokemonRequest;
