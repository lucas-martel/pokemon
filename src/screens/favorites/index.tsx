import React from 'react'
import { getFavorites } from '../../services/storages/useStorageManagerFavorites'
import { FavoritesLS, IPokemonData } from '../../utils/types'
import { Stack } from '@mui/material'
import PokemonViewContainer from '../../components/pokemonViewContainer'
import { useNavigate } from 'react-router-dom'
import { routePath } from "../../utils/Screens";

const Favorites: React.FC = () => {
  const favorites = getFavorites() as FavoritesLS
  const navigate = useNavigate()
  const handleSelectPokemonView = (id: string) => {
    navigate(routePath.pkInfo, { state: { id } });
  };

  return (
    <div>
      {favorites.favs.map((favorite, key) => (
         <Stack key={key} spacing={{xs: 2, sm: 2}} direction="row" useFlexGap flexWrap="wrap">
           <PokemonViewContainer
             pokemon={favorite}
             onClick={handleSelectPokemonView}
           />
       </Stack>
      ))}
    </div>
  )
}

export default Favorites