import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getDecodedUser } from "../component/Login/LoginManager";
import { reducer } from "./reducer";

const AppContext = createContext();

const initialState = {
  user: getDecodedUser(),
  admin: false,
  selectedService: {},
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
