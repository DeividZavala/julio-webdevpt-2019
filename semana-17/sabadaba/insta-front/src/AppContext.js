import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  return (
    <AppContext.Provider value={{ user, posts }}>
      {children}
    </AppContext.Provider>
  );
};
