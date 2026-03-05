import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { FavoritesProvider } from "../features/products/context/FavoritesContext";
import { FiltersProvider } from "../features/orders/context/FiltersContext";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <FiltersProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </FiltersProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
