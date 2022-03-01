import { useReducer } from "react";
import usersReducer from "../../reducers/usersReducer";
import UsersContext from "./UsersContext";

const UsersContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(usersReducer, []);

  return (
    <UsersContext.Provider value={{ users, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
