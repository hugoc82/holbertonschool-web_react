import React from "react";

// valeurs par défaut du contexte
const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const defaultLogOut = () => {};

// Contexte (export default uniquement, sous le nom newContext)
const newContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default newContext;
