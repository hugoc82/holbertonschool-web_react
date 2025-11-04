import React from "react";

const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};
const defaultLogOut = () => {};

const newContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export { default as default } from "../App/AppContext";
export { defaultUser } from "../App/AppContext";
