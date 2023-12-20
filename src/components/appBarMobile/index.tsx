import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const AppBarMobile: React.FC<{onClickMenu: ()=> void}> = ({onClickMenu}) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onClickMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Pokémon
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarMobile;
