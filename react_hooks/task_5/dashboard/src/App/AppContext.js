import { createContext } from "react";

export const defaultUser = { email: "", password: "", isLoggedIn: false };

const AppContext = createContext({
  user: defaultUser,
  logIn: () => {},
  logOut: () => {},
});

export default AppContext;
