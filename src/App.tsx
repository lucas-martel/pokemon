import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Button, ThemeProvider, useMediaQuery } from "@mui/material";
import Theme from "./utils/Theme";
import MenuDrawer from "./components/menuDrawer";
import useMenuDrawer from "./components/menuDrawer/hooks/useMenuDrawer";
import { menuItens } from "./components/menuDrawer/hooks/useMenuButtonsOptions";
import AppBarMobile from "./components/appBarMobile";

function App() {
  const {
    isOpen,
    handleCloseDrawer,
    handleOpenDrawer
  } = useMenuDrawer();

  const mdDown = useMediaQuery(Theme.breakpoints.down("md"))

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        {(mdDown && <AppBarMobile onClickMenu={handleOpenDrawer} />)}
        <MenuDrawer isOpen={isOpen} handleCloseDrawer={handleCloseDrawer} menuItens={menuItens}>
          <AppRoutes />
        </MenuDrawer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
