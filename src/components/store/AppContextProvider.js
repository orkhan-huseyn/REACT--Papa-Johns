import { useState } from "react";
import AppContext from "./app-context";

function AppContextProvider({ children }) {
  const [activePage, setActivePage] = useState("home");

  function changeActivePageHandler(page) {
    setActivePage(page);
  }

  return (
    <AppContext.Provider
      value={{
        activePage,
        changeActivePageHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
