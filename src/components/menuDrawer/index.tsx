import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { IItens } from "../../utils/types";
import { useNavigate } from "react-router-dom";

type prop = {
  children: React.ReactNode;
  isOpen: boolean;
  handleCloseDrawer: () => void;
  menuItens: IItens[];
};

const MenuDrawer: React.FC<prop> = (props) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <>
      <Drawer open={props.isOpen} variant={smDown ? "temporary" : "permanent"}>
        <Box
          width={theme.spacing(21)}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          {smDown && <Button onClick={props.handleCloseDrawer}>x</Button>}
          <h3>Pokemon</h3>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {props.menuItens.map((item, key) => (
                <ListItemButton
                  key={key}
                  onClick={() => {
                    navigate(item.navLink);
                  }}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={smDown ? "0" : theme.spacing(21)}>
        {props.children}
      </Box>
    </>
  );
};

export default MenuDrawer;
