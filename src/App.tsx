import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Button, ThemeProvider, useMediaQuery } from "@mui/material";
import Theme from "./utils/Theme";
import MenuDrawer from "./components/menuDrawer";
import useMenuDrawer from "./components/menuDrawer/hooks/useMenuDrawer";
import { menuItens } from "./components/menuDrawer/hooks/useMenuButtonsOptions";
import { useTheme } from "@mui/material";

function App() {
  const {
    isOpen,
    handleCloseDrawer,
    handleOpenDrawer
  } = useMenuDrawer();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        {(smDown && <Button onClick={handleOpenDrawer}>abrir</Button>)}
        <MenuDrawer isOpen={isOpen} handleCloseDrawer={handleCloseDrawer} menuItens={menuItens}>
          <AppRoutes />
        </MenuDrawer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
