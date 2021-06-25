import React from "react";

const AppContext = React.createContext({
    activePage: '',
    changeActivePageHandler: (page) => {}
});

export default AppContext;