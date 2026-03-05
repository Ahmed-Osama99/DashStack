import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // Lazy initialization: This function only runs once on the initial mount
  const [favoriteList, setFavoriteList] = useState(() => {
    try {
      const storedFavoriteList = localStorage.getItem("favoriteList");
      // Only parse if the item exists, otherwise default to an empty array
      return storedFavoriteList ? JSON.parse(storedFavoriteList) : [];
    } catch (error) {
      // Catch malformed JSON to prevent app crashes
      console.error("Failed to parse favorites from localStorage:", error);
      return []; 
    }
  });

  // add / remove product from favoriteList
  const toggleFavoriteList = (product) => {
    setFavoriteList((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // check specific product(id) in favoriteList
  const isInFavoriteList = (id) => {
    return favoriteList.some((item) => item.id === id);
  };

  useEffect(() => {
    // store/update favoriteList in local storage
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

  return (
    <FavoritesContext.Provider
      value={{ favoriteList, toggleFavoriteList, isInFavoriteList }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext };