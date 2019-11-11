import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialUser = JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState(initialUser);
  const [posts, setPosts] = useState([]);

  return (
    <AppContext.Provider value={{ user, posts, setUser, setPosts }}>
      {children}
    </AppContext.Provider>
  );
};
